(function () {
    'use strict';

    var header = document.querySelector('[data-site-header]');
    var toggle = document.querySelector('.nav-toggle');
    var productMenu = document.querySelector('[data-product-menu]');
    var languageButtons = document.querySelectorAll('[data-language]');
    var languageStorageKey = 'devp-yg-language';
    var packs = {};
    var currentLanguage = document.documentElement.lang === 'en' ? 'en' : 'ko';

    function getValue(source, path) {
        return path.split('.').reduce(function (value, part) {
            if (value === undefined || value === null) return undefined;
            return value[part];
        }, source);
    }

    function getLanguagePackUrl(language) {
        var base = document.querySelector('meta[name="language-pack-base"]');
        var baseUrl = base ? base.getAttribute('content') : '/assets/i18n/';
        return baseUrl.replace(/\/$/, '') + '/' + language + '.json';
    }

    function loadLanguagePack(language) {
        if (packs[language]) return Promise.resolve(packs[language]);

        return fetch(getLanguagePackUrl(language), { credentials: 'same-origin' })
            .then(function (response) {
                if (!response.ok) throw new Error('Language pack could not be loaded.');
                return response.json();
            })
            .then(function (pack) {
                packs[language] = pack;
                return pack;
            });
    }

    function replaceCount(value, element) {
        return value.replace('{count}', element.getAttribute('data-i18n-count') || '');
    }

    function updateMailLink(link, language) {
        if (!link.href || link.href.indexOf('mailto:') !== 0) return;
        var originalSubject = link.getAttribute('data-i18n-mail-subject');
        if (!originalSubject) return;

        var subject = language === 'en'
            ? (originalSubject === 'CityBus 문의' ? 'CityBus inquiry' : 'Support request')
            : originalSubject;
        link.href = link.href.split('?')[0] + '?Subject=' + encodeURIComponent(subject);
    }

    function updateMetadata(pack) {
        var pageKey = document.documentElement.getAttribute('data-i18n-page') || 'home';
        var page = getValue(pack, 'pages.' + pageKey);
        if (!page) return;

        if (page.title) document.title = page.title;
        var description = document.querySelector('meta[name="description"]');
        if (description && page.description) description.setAttribute('content', page.description);
        var ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle && page.title) ogTitle.setAttribute('content', page.title);
        var ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription && page.description) ogDescription.setAttribute('content', page.description);
        var ogLocale = document.querySelector('meta[property="og:locale"]');
        if (ogLocale) ogLocale.setAttribute('content', currentLanguage === 'en' ? 'en_US' : 'ko_KR');
    }

    function updateToggleLabel(isOpen) {
        if (!toggle || !packs[currentLanguage]) return;
        var key = isOpen ? 'common.menuClose' : 'common.menuOpen';
        var label = getValue(packs[currentLanguage], key);
        if (label) toggle.setAttribute('aria-label', label);
    }

    function applyLanguage(language, pack) {
        currentLanguage = language;
        document.documentElement.lang = language;
        document.documentElement.setAttribute('data-language', language);

        document.querySelectorAll('[data-i18n]').forEach(function (element) {
            var value = getValue(pack, element.getAttribute('data-i18n'));
            if (typeof value === 'string') element.textContent = replaceCount(value, element);
        });
        document.querySelectorAll('[data-i18n-html]').forEach(function (element) {
            var value = getValue(pack, element.getAttribute('data-i18n-html'));
            if (typeof value === 'string') element.innerHTML = replaceCount(value, element);
        });
        document.querySelectorAll('[data-i18n-alt]').forEach(function (element) {
            var value = getValue(pack, element.getAttribute('data-i18n-alt'));
            if (typeof value === 'string') element.setAttribute('alt', value);
        });
        document.querySelectorAll('[data-i18n-aria-label]').forEach(function (element) {
            var value = getValue(pack, element.getAttribute('data-i18n-aria-label'));
            if (typeof value === 'string') element.setAttribute('aria-label', value);
        });
        document.querySelectorAll('[data-i18n-mail-subject]').forEach(function (element) {
            updateMailLink(element, language);
        });

        languageButtons.forEach(function (button) {
            var active = button.getAttribute('data-language') === language;
            button.setAttribute('aria-pressed', active ? 'true' : 'false');
            button.classList.toggle('is-active', active);
        });

        updateToggleLabel(header && header.hasAttribute('data-open'));
        updateMetadata(pack);
        try {
            window.localStorage.setItem(languageStorageKey, language);
        } catch (error) {
            // Private browsing modes can deny localStorage; the current page still works.
        }
    }

    function closeMenu() {
        if (!header || !toggle) return;
        header.removeAttribute('data-open');
        toggle.setAttribute('aria-expanded', 'false');
        if (productMenu) productMenu.removeAttribute('open');
        updateToggleLabel(false);
    }

    if (header && toggle) {
        toggle.addEventListener('click', function () {
            if (header.hasAttribute('data-open')) closeMenu();
            else {
                header.setAttribute('data-open', '');
                toggle.setAttribute('aria-expanded', 'true');
                updateToggleLabel(true);
            }
        });
        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') closeMenu();
        });
        document.addEventListener('click', function (event) {
            if (productMenu && productMenu.hasAttribute('open') && !productMenu.contains(event.target)) {
                productMenu.removeAttribute('open');
            }
        });
        header.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', closeMenu);
        });
    }

    languageButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var language = button.getAttribute('data-language');
            loadLanguagePack(language)
                .then(function (pack) { applyLanguage(language, pack); })
                .catch(function (error) { console.warn('[i18n]', error); });
        });
    });

    var savedLanguage = null;
    try { savedLanguage = window.localStorage.getItem(languageStorageKey); } catch (error) { savedLanguage = null; }
    if (savedLanguage !== 'ko' && savedLanguage !== 'en') savedLanguage = currentLanguage;

    loadLanguagePack(savedLanguage)
        .then(function (pack) { applyLanguage(savedLanguage, pack); })
        .catch(function (error) { console.warn('[i18n]', error); });
})();
