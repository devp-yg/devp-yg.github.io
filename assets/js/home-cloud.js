(function () {
    'use strict';

    var cloud = document.querySelector('[data-app-cloud]');
    var stage = cloud && cloud.querySelector('[data-cloud-stage]');
    if (!stage) return;

    var icons = Array.prototype.slice.call(stage.querySelectorAll('[data-cloud-icon]'));
    var canFloat = window.matchMedia('(hover: hover) and (pointer: fine)');
    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!canFloat.matches || reducedMotion.matches || icons.length < 2) return;

    var points = [];
    var activeIndex = -1;
    var resetTimer;

    function layout() {
        stage.classList.remove('is-interactive');
        stage.style.height = '';
        points = icons.map(function (icon) {
            return {
                x: icon.offsetLeft,
                y: icon.offsetTop,
                width: icon.offsetWidth,
                height: icon.offsetHeight
            };
        });
        stage.style.height = stage.offsetHeight + 'px';
        stage.classList.add('is-interactive');
        points.forEach(function (point, index) {
            icons[index].style.transform = 'translate3d(' + point.x + 'px, ' + point.y + 'px, 0)';
        });
    }

    function settle() {
        if (activeIndex !== -1) icons[activeIndex].classList.remove('is-active');
        activeIndex = -1;
        points.forEach(function (point, index) {
            icons[index].classList.remove('is-active');
            icons[index].style.transform = 'translate3d(' + point.x + 'px, ' + point.y + 'px, 0)';
        });
    }

    function moveCloud(event) {
        window.clearTimeout(resetTimer);
        var bounds = stage.getBoundingClientRect();
        var x = event.clientX - bounds.left;
        var y = event.clientY - bounds.top;
        var nearest = -1;
        var nearestDistance = Infinity;

        points.forEach(function (point, index) {
            var dx = x - (point.x + point.width / 2);
            var dy = y - (point.y + point.height / 2);
            var distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < nearestDistance) {
                nearestDistance = distance;
                nearest = index;
            }
        });

        if (activeIndex !== nearest) {
            if (activeIndex !== -1) icons[activeIndex].classList.remove('is-active');
            activeIndex = nearest;
            if (activeIndex !== -1) icons[activeIndex].classList.add('is-active');
        }

        points.forEach(function (point, index) {
            var dx = point.x + point.width / 2 - x;
            var dy = point.y + point.height / 2 - y;
            var distance = Math.sqrt(dx * dx + dy * dy);
            var push = index === nearest || distance >= 150 ? 0 : (1 - distance / 150) * 34;
            var offsetX = distance ? (dx / distance) * push : 0;
            var offsetY = distance ? (dy / distance) * push : 0;
            icons[index].style.transform = 'translate3d(' + (point.x + offsetX) + 'px, ' + (point.y + offsetY) + 'px, 0)';
        });
    }

    layout();
    stage.addEventListener('pointermove', moveCloud);
    stage.addEventListener('pointerleave', function () {
        resetTimer = window.setTimeout(settle, 90);
    });
    icons.forEach(function (icon, index) {
        icon.addEventListener('focus', function () {
            if (activeIndex !== -1) icons[activeIndex].classList.remove('is-active');
            activeIndex = index;
            icon.classList.add('is-active');
        });
        icon.addEventListener('blur', settle);
    });
    window.addEventListener('resize', function () {
        window.clearTimeout(resetTimer);
        settle();
        layout();
    }, { passive: true });
}());
