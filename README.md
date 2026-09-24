# Devp-YG Website

Devp-YG의 앱 포트폴리오, 제품 소개, 개인정보처리방침, 개발 기록을 제공하는 GitHub Pages 사이트입니다.

## Structure

```text
├── _data/          # Shared navigation and site data
├── _includes/      # Shared head, header, footer, and copyright fragments
├── _layouts/       # Jekyll page layouts
├── _archive/       # Retained, unpublished template-era source files
├── assets/         # CSS, JavaScript, fonts, and organized images
├── pages/          # Portfolio, blog, legal, legacy-route, and system pages
├── products/       # Product landing pages
│   ├── citybus/
│   └── movlog/
├── index.html      # Site entry page
├── ads.txt         # Ad network verification
└── app-ads.txt     # App-ads.txt verification
```

Public addresses are preserved with Jekyll `permalink` settings:

- `/portfolio.html`
- `/history.html`
- `/privacy_policy.html`
- `/citybus/`
- `/movlog/`
- `/contact.html`

## Content updates

- 앱 이름, 설명, 아이콘, 스토어 주소는 `_data/apps.yml`에서 관리합니다. 새 앱에는 `category`와 `portfolio_order`를 함께 지정합니다.
- 전체 앱 화면의 상위 분류와 노출 순서는 `_data/app_categories.yml`에서 관리합니다. 분류는 넓고 오래 유지할 수 있는 사용자 목적 중심으로 두며, `series`(예: CityBus)와는 별도로 관리합니다. 새 분류를 추가할 때는 두 언어팩의 `portfolio.categories`에 이름과 설명도 추가합니다.
- 공통 문서 구조는 `_layouts/default.html`, 내비게이션은 `_data/navigation.yml`에서 관리합니다.
- 한국어·영어 문구는 `assets/i18n/ko.json`, `assets/i18n/en.json` 언어팩에서 관리하며, 헤더의 `KO / EN` 전환 버튼으로 전체 페이지에 적용됩니다. 선택 언어는 브라우저의 `localStorage`에 저장됩니다.
- 제품별 스타일은 `assets/css/pages/`에 두고 각 페이지의 `styles` front matter에서 불러옵니다.
- 들여쓰기와 줄바꿈 규칙은 `.editorconfig`를 따릅니다. IntelliJ IDEA에서 EditorConfig 지원을 활성화하면 자동으로 적용됩니다.

## Local preview

Do not open source HTML files directly from IntelliJ IDEA or Finder. Jekyll must process Liquid templates and page data before the site can render correctly.

From the IntelliJ IDEA terminal, run:

```bash
./bin/serve
```

Then open `http://127.0.0.1:4000` in a browser. Stop the server with `Control+C`.

Before publishing, run `jekyll build` to verify that all templates and data files compile.

## Notes

- `_site/`, `.jekyll-cache/`, and local IDE settings are ignored.
- The original HTML5 UP Twenty template license is retained in [LICENSE](LICENSE).
- Files in `_archive/` are kept for history but are not published.
