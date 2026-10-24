(function () {
    'use strict';

    var cloud = document.querySelector('[data-app-cloud]');
    var stage = cloud && cloud.querySelector('[data-cloud-stage]');
    if (!stage) return;
    var icons = Array.from(stage.querySelectorAll('[data-cloud-icon]'));
    if (!icons.length) return;

    // Shuffle once per visit, keeping DOM/tab order in the same visual order.
    for (var i = icons.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var swap = icons[i]; icons[i] = icons[j]; icons[j] = swap;
    }
    icons.forEach(function (icon) { stage.appendChild(icon); });
    var seeds = icons.map(function () { return Math.random() * Math.PI * 2; });
    var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    var points = [];
    var pointer = null;
    var focused = -1;
    var active = -1;
    var pressed = false;
    var frame = 0;
    var lastTime = 0;
    var visible = true;
    var enabled = false;
    var width = 0;
    var height = 0;
    var tile = 0;

    function clamp(value, min, max) { return Math.max(min, Math.min(max, value)); }
    function setActive(index) {
        if (active === index) return;
        active = index;
        icons.forEach(function (icon, index) { icon.classList.toggle('is-active', index === active); });
    }
    function chooseActive() {
        if (focused >= 0) return setActive(focused);
        if (!pointer) return setActive(-1);
        if (pressed) return;
        var nearest = -1;
        var distance = Infinity;
        points.forEach(function (point, index) {
            var d = Math.hypot(point.x - pointer.x, point.y - pointer.y);
            if (d < distance) { distance = d; nearest = index; }
        });
        if (active >= 0 && Math.hypot(points[active].x - pointer.x, points[active].y - pointer.y) < distance + 16) return;
        setActive(nearest);
    }
    function draw(point, index) {
        icons[index].style.transform = 'translate3d(' + (point.x - tile / 2).toFixed(2) + 'px,' +
            (point.y - tile / 2).toFixed(2) + 'px,0) rotate(' + point.angle.toFixed(2) +
            'deg) scale(' + point.scale.toFixed(3) + ')';
    }
    function layout() {
        width = stage.clientWidth;
        tile = icons[0].offsetWidth;
        var columns = Math.max(1, Math.min(4, Math.ceil(Math.sqrt(icons.length)), Math.floor(width / (tile + 20))));
        var rows = Math.ceil(icons.length / columns);
        height = Math.max(400, rows * (tile + 44) + 48);
        stage.style.height = height + 'px';
        var margin = tile * 0.95;
        var pitchX = columns > 1 ? (width - margin * 2) / (columns - 1) : 0;
        var pitchY = rows > 1 ? (height - margin * 2) / (rows - 1) : 0;
        points = icons.map(function (icon, index) {
            var row = Math.floor(index / columns);
            var rowCount = Math.min(columns, icons.length - row * columns);
            var x = width / 2 + (index % columns - (rowCount - 1) / 2) * pitchX;
            var y = rows > 1 ? margin + row * pitchY : height / 2;
            x = clamp(x + Math.sin(seeds[index]) * 10, margin, width - margin);
            y = clamp(y + Math.cos(seeds[index]) * 16, margin, height - margin);
            var point = { baseX: x, baseY: y, x: x, y: y, vx: 0, vy: 0, angle: 0, scale: 1 };
            draw(point, index);
            return point;
        });
        chooseActive();
        start();
    }
    function animate(time) {
        frame = 0;
        if (!enabled || !visible || document.hidden) return;
        var dt = Math.min((time - (lastTime || time - 16.67)) / 16.67, 2);
        lastTime = time;
        var source = focused >= 0 ? { x: points[focused].baseX, y: points[focused].baseY } : pointer;
        var targets = points.map(function (point, index) {
            var phase = seeds[index];
            // Different periods on each axis give a slow, wandering idle motion.
            var x = point.baseX + Math.sin(time * (0.00035 + index % 3 * 0.00008) + phase) * 16;
            var y = point.baseY + Math.cos(time * (0.00045 + index % 4 * 0.00006) + phase) * 22;
            if (source && index !== active) {
                var dx = x - source.x;
                var dy = y - source.y;
                var distance = Math.hypot(dx, dy);
                var force = Math.pow(Math.max(0, 1 - distance / 175), 1.3) * 85;
                x += dx / (distance || 1) * force;
                y += dy / (distance || 1) * force;
            }
            if (index === active) { x = point.baseX; y = point.baseY - 10; }
            return { x: x, y: y };
        });
        // Resolve crowding without moving the selected link under a click.
        for (var pass = 0; pass < 3; pass++) {
            targets.forEach(function (a, index) {
                for (var other = index + 1; other < targets.length; other++) {
                    var b = targets[other];
                    var dx = b.x - a.x;
                    var dy = b.y - a.y;
                    var distance = Math.hypot(dx, dy) || 0.01;
                    var minimum = tile * (index === active || other === active ? 1.4 : 1.15);
                    if (distance >= minimum) continue;
                    var push = (minimum - distance) * 0.5;
                    if (index !== active) { a.x -= dx / distance * push * (other === active ? 2 : 1); a.y -= dy / distance * push * (other === active ? 2 : 1); }
                    if (other !== active) { b.x += dx / distance * push * (index === active ? 2 : 1); b.y += dy / distance * push * (index === active ? 2 : 1); }
                }
            });
            targets.forEach(function (target, index) {
                var edge = tile * (index === active ? 0.75 : 0.65);
                target.x = clamp(target.x, edge, width - edge);
                target.y = clamp(target.y, edge, height - edge);
            });
        }
        points.forEach(function (point, index) {
            point.vx = (point.vx + (targets[index].x - point.x) * 0.035 * dt) * Math.pow(0.76, dt);
            point.vy = (point.vy + (targets[index].y - point.y) * 0.035 * dt) * Math.pow(0.76, dt);
            point.x += point.vx * dt;
            point.y += point.vy * dt;
            point.scale += ((index === active ? 1.26 : 0.97) - point.scale) * Math.min(1, 0.12 * dt);
            var tilt = index === active ? 0 : Math.sin(time * 0.0003 + seeds[index]) * 6;
            point.angle += (tilt - point.angle) * Math.min(1, 0.12 * dt);
            draw(point, index);
        });
        frame = requestAnimationFrame(animate);
    }
    function start() {
        if (enabled && visible && !document.hidden && !frame) { lastTime = 0; frame = requestAnimationFrame(animate); }
    }
    function configure() {
        enabled = !reducedMotion.matches;
        cancelAnimationFrame(frame); frame = 0;
        pointer = null; pressed = false; setActive(-1);
        stage.classList.toggle('is-interactive', enabled);
        if (enabled) layout();
        else {
            stage.style.removeProperty('height');
            icons.forEach(function (icon) { icon.style.removeProperty('transform'); });
        }
    }
    stage.addEventListener('pointermove', function (event) {
        if (!enabled || !finePointer.matches || event.pointerType === 'touch') return;
        var rect = stage.getBoundingClientRect();
        pointer = { x: event.clientX - rect.left, y: event.clientY - rect.top };
        chooseActive();
    });
    stage.addEventListener('pointerleave', function () { pointer = null; pressed = false; chooseActive(); });
    stage.addEventListener('pointerdown', function () { pressed = true; });
    window.addEventListener('pointerup', function () { pressed = false; });
    stage.addEventListener('pointercancel', function () { pressed = false; pointer = null; chooseActive(); });
    stage.addEventListener('focusin', function (event) {
        focused = icons.indexOf(event.target.closest('[data-cloud-icon]'));
        if (enabled) chooseActive();
    });
    stage.addEventListener('focusout', function (event) { focused = icons.indexOf(event.relatedTarget); if (enabled) chooseActive(); });
    new ResizeObserver(function () { if (enabled && stage.clientWidth !== width) layout(); }).observe(stage);
    new IntersectionObserver(function (entries) {
        visible = entries[0].isIntersecting;
        if (visible) start(); else { cancelAnimationFrame(frame); frame = 0; }
    }).observe(stage);
    document.addEventListener('visibilitychange', function () {
        if (document.hidden) { cancelAnimationFrame(frame); frame = 0; } else start();
    });
    finePointer.addEventListener('change', configure);
    reducedMotion.addEventListener('change', configure);
    configure();
}());
