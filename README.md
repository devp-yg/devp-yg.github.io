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

User-facing pages use directory URLs defined with Jekyll `permalink` settings:

- `/portfolio/`
- `/history/`
- `/blog/`
- `/copyright/`
- `/privacy/devp-yg/`
- `/citybus/`
- `/myaioffice/`
- `/movlog/`
- `/contact/`

The former `.html` addresses remain as redirect pages using `_layouts/redirect.html`. Internal links use the directory URLs; redirect pages keep query strings and fragments and declare the new URL as canonical. The privacy policy already uses `/privacy/devp-yg/` and retains its `/privacy_policy.html` redirect.

## Content updates

- 사용자에게는 모바일·데스크톱을 모두 “앱”(영문 “Apps”)으로 안내합니다. 메뉴, 전체 목록, 소개 문구에서 앱과 프로젝트를 별도 종류로 구분하지 않습니다.

- 앱의 이름, 설명, 아이콘, 소개 페이지 경로(`intro_url`), 복수 플랫폼 표기(`platforms`)는 `_data/apps.yml`에서 관리합니다. 새 항목에는 사용 목적을 기준으로 `category`와 `portfolio_order`를 지정합니다. 데스크톱 앱은 `platform: desktop`, 공개 기록 날짜는 `published_at`, 저장소 링크는 `project_url`을 사용합니다. 이 데이터는 탐색 메뉴, 전체 제품 카드, 출시·공개 타임라인에서 함께 사용됩니다.
- iOS 최초 출시일은 `launched_at`, 심사 상태는 `review_status`, 심사 접수일은 `review_submitted_at`으로 관리합니다. macOS는 `macos_launched_at`, `macos_review_status`, `macos_review_submitted_at`, `macos_store_url`을 사용합니다. 출시 월이 같은 플랫폼은 각 출시일을 함께 표시하고, 월이 다르면 타임라인 카드를 나누어 표시합니다. 심사 중 카드는 접수일 기준으로 표시합니다.
- 전체 제품 화면의 상위 분류와 노출 순서는 `_data/app_categories.yml`에서 관리합니다. 분류는 제품의 기능 하나보다 사용 목적을 기준으로 넓고 오래 유지하며, `series`(예: CityBus)는 별도로 관리합니다. 생활 도구 목록은 해당 분류 데이터에서 자동으로 구성됩니다. 새 분류를 추가할 때는 두 언어팩의 `portfolio.categories`에 이름과 설명도 추가합니다.
- 공통 문서 구조는 `_layouts/default.html`, 제품 탐색 메뉴는 앱·분류 데이터에서 자동 생성하고, 기타 내비게이션 링크는 `_data/navigation.yml`에서 관리합니다.
- 한국어·영어 문구는 `assets/i18n/ko.json`, `assets/i18n/en.json` 언어팩에서 관리하며, 헤더의 `KO / EN` 전환 버튼으로 전체 페이지에 적용됩니다. 선택 언어는 브라우저의 `localStorage`에 저장됩니다.
- 영문은 Source Sans 3, 한국어는 Noto Sans KR을 사용합니다. 언어별 자간과 줄 간격은 `assets/css/typography.css`에서 관리합니다.
- 제품별 스타일은 `assets/css/pages/`에 두고 각 페이지의 `styles` front matter에서 불러옵니다.
- 들여쓰기와 줄바꿈 규칙은 `.editorconfig`를 따릅니다. IntelliJ IDEA에서 EditorConfig 지원을 활성화하면 자동으로 적용됩니다.

## Home product discovery

홈과 탐색 메뉴는 `_data/apps.yml`과 `_data/app_categories.yml`을 공유합니다. 새 제품을 추가하면 코드에 카드나 메뉴를 추가하지 않아도 홈의 최신 제품 후보, 목적별 제품 수, 전체 목록에 반영됩니다.

- 홈의 최신 제품 카드는 출시일(`launched_at`), macOS 출시일(`macos_launched_at`), 앱 공개일(`published_at`), 심사 접수일(`review_submitted_at`) 중 가장 최근 날짜 순입니다. 같은 날짜는 제품 ID 역순으로 고정합니다. 일반 업데이트일은 순서에 영향을 주지 않습니다.
- 같은 `series`는 가장 최근 항목 하나만 홈의 최신 제품에 노출합니다. 전체 목록과 분류별 개수에는 모든 제품이 포함됩니다.
- 최신 제품 카드는 `_data/home.yml`의 `product_limit`으로 제한합니다(1~6, 기본값 6). 아이콘 구름은 `home_hidden`이 아닌 제품을 표시하며 같은 시리즈는 하나로 묶습니다. `_data/app_series.yml`에 시리즈의 이름·아이콘·설명·소개 URL을 등록하면 홈 카드와 아이콘 모두 해당 시리즈 소개로 연결됩니다. 아이콘 배치는 페이지를 열 때마다 섞이고, 최신 제품 카드는 날짜순을 유지합니다. 마우스 환경에서는 가장 가까운 아이콘을 강조하고 주변 아이콘은 포인터에서 밀려납니다. 아이콘은 서로 다른 속도와 방향으로 떠다니고, 터치 환경에서도 미세한 부유 효과를 제공합니다. 동작 줄이기 설정에서는 고정 그리드를 사용합니다.
- `short_name`은 홈의 짧은 제품 이름입니다. 없으면 `name`을 사용합니다. 두 언어팩의 `apps.<id>.shortName`도 함께 지정합니다.
- 이전 제품을 홈에 새로 소개할 때만 `home_listed_at`을 지정합니다. 홈 최신 목록에서 제외할 때는 `home_hidden: true`를 사용합니다. 목적별 탐색과 전체 목록에는 계속 표시됩니다.
- 홈 링크는 `intro_url` → `store_url` → `project_url` → 전체 목록 순으로 연결합니다. 소개 페이지가 없는 제품도 동작합니다.
- 새 분류는 `_data/app_categories.yml`에 `id`, 한국어 기본 문구인 `label`·`description`을 추가하고 두 언어팩의 `portfolio.categories`에 번역을 등록합니다. 홈과 메뉴에는 제품이 있는 분류만 자동으로 노출됩니다.

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
