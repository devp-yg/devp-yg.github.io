(function () {
    'use strict';

    var timeline = document.querySelector('[data-history-timeline]');
    var controls = document.querySelectorAll('[data-history-sort]');

    if (!timeline || !controls.length) return;

    var items = Array.prototype.slice.call(timeline.querySelectorAll('.history-item'));

    function updateDateLabels(orderedItems) {
        var previousYear = null;
        var previousMonth = null;

        orderedItems.forEach(function (item) {
            var dateParts = item.getAttribute('data-launch-date').split('-');
            var sameYear = previousYear === dateParts[0];
            var sameMonth = sameYear && previousMonth === dateParts[1];
            var year = item.querySelector('[data-history-year]');
            var month = item.querySelector('[data-history-month]');
            var monthNumber = item.querySelector('[data-history-month-number]');
            var marker = item.querySelector('[data-history-marker]');

            year.textContent = sameYear ? '' : dateParts[0];
            monthNumber.textContent = dateParts[1];
            year.classList.toggle('is-hidden', sameYear);
            month.classList.toggle('is-hidden', sameMonth);
            marker.classList.toggle('is-hidden', sameMonth);

            previousYear = dateParts[0];
            previousMonth = dateParts[1];
        });
    }

    function sortHistory(order) {
        items.sort(function (first, second) {
            var firstDate = first.getAttribute('data-launch-date');
            var secondDate = second.getAttribute('data-launch-date');
            var result = firstDate.localeCompare(secondDate);
            return order === 'oldest' ? result : -result;
        });

        items.forEach(function (item) {
            timeline.appendChild(item);
        });

        updateDateLabels(items);
        controls.forEach(function (control) {
            var isActive = control.getAttribute('data-history-sort') === order;
            control.classList.toggle('is-active', isActive);
            control.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        });
    }

    controls.forEach(function (control) {
        control.addEventListener('click', function () {
            sortHistory(control.getAttribute('data-history-sort'));
        });
    });

    sortHistory('latest');
})();
