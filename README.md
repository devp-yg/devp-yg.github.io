# Devp-YG Website

Devp-YG의 앱 목록, 제품 소개, 개인정보처리방침, 개발 기록을 제공하는 GitHub Pages 사이트입니다.

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
│   ├── movlog/
│   ├── markdam/
│   ├── rtvideo/
│   ├── taghere/
│   ├── snapqr/
│   ├── fareflow/
│   └── myaioffice/
├── index.html      # Site entry page
├── ads.txt         # Ad network verification
└── app-ads.txt     # App-ads.txt verification
```

Public addresses are preserved with Jekyll `permalink` settings:

- `/portfolio.html`
- `/history.html`
- `/privacy/devp-yg/`
- `/citybus/`
- `/myaioffice/`
- `/movlog/`
- `/contact.html`

## Content updates

- 앱과 개발 프로젝트의 이름, 설명, 아이콘, 소개 페이지 경로(`intro_url`), 복수 플랫폼 표기(`platforms`)는 `_data/apps.yml`에서 관리합니다. 새 항목에는 사용 목적을 기준으로 `category`와 `portfolio_order`를 지정합니다. 로컬 데스크톱 프로젝트는 `platform: desktop`, 공개 기록 날짜는 `published_at`, 저장소 링크는 `project_url`을 사용합니다. 이 데이터는 탐색 메뉴, 전체 제품 카드, 출시·공개 타임라인에서 함께 사용됩니다.
- iOS 최초 출시일은 `launched_at`, 심사 상태는 `review_status`, 심사 접수일은 `review_submitted_at`으로 관리합니다. macOS는 `macos_launched_at`, `macos_review_status`, `macos_review_submitted_at`, `macos_store_url`을 사용합니다. 출시 월이 같은 플랫폼은 각 출시일을 함께 표시하고, 월이 다르면 타임라인 카드를 나누어 표시합니다. 심사 중 카드는 접수일 기준으로 표시합니다.
- 전체 제품 화면의 상위 분류와 노출 순서는 `_data/app_categories.yml`에서 관리합니다. 분류는 제품의 기능 하나보다 사용 목적을 기준으로 넓고 오래 유지하며, `series`(예: CityBus)는 별도로 관리합니다. 생활 도구 목록은 해당 분류 데이터에서 자동으로 구성됩니다. 새 분류를 추가할 때는 두 언어팩의 `portfolio.categories`에 이름과 설명도 추가합니다.
- 공통 문서 구조는 `_layouts/default.html`, 내비게이션은 `_data/navigation.yml`에서 관리합니다.
- 한국어·영어 문구는 `assets/i18n/ko.json`, `assets/i18n/en.json` 언어팩에서 관리하며, 헤더의 `KO / EN` 전환 버튼으로 전체 페이지에 적용됩니다. 선택 언어는 브라우저의 `localStorage`에 저장됩니다.
- 영문은 Source Sans 3, 한국어는 Noto Sans KR을 사용합니다. 언어별 자간과 줄 간격은 `assets/css/typography.css`에서 관리합니다.
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
