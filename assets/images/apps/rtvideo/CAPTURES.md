# 보말 웹사이트 화면 캡처

- 촬영일: 2026-11-14 (Asia/Seoul)
- 출처: `Project_Swift/Bomal`의 현재 작업 소스
- 기기: iPhone 17 Pro, iOS 26.5 Simulator
- 해상도: 1206 × 2622, PNG 원본
- 상태 표시줄: 9:41, Wi-Fi, 배터리 100%
- UI는 앱의 실제 SwiftUI 뷰를 사용했으며, 이미지의 내용을 수정하거나 다시 그리지 않았습니다.
- 언어 목록·자막은 Debug 검토용 예시입니다. 실제 음성 인식·번역·PiP 동작을 검증하는 캡처가 아닙니다.

| 파일 | 화면 | 실행 구성 |
| --- | --- | --- |
| `screenshots/bomal-main.png` | 최초 권한 안내, 언어 카드, 시작 버튼 | `RTVIDEO_UI_REVIEW_SCENARIO=home` |
| `screenshots/bomal-language-selection.png` | 원문 언어 선택 시트 | `home`에서 실제 `CaptionLanguageField`의 원문 언어 시트 표시 |
| `screenshots/bomal-settings.png` | 설정 첫 화면, 앱 언어 및 자막 표시 방식 | `home`에서 실제 설정 시트 표시 |
| `screenshots/bomal-caption-settings.png` | 자막 모양, 글자 크기, 미리보기 | `RTVIDEO_UI_REVIEW_SCENARIO=store-settings` |
| `screenshots/bomal-captions.png` | 번역 자막 예시 | `RTVIDEO_UI_REVIEW_SCENARIO=store-translation` |
| `screenshots/bomal-original-speakers.png` | 원문·화자별 자막 예시 | `RTVIDEO_UI_REVIEW_SCENARIO=store-original` |

Debug 빌드를 설치한 뒤 위 실행 구성으로 화면을 열고 `xcrun simctl io <UDID> screenshot <출력 경로>`로 촬영합니다. 언어 선택과 설정 첫 화면은 별도 임시 프로젝트 복사본에서 `BOMAL_WEBSITE_CAPTURE=language` 또는 `settings`일 때 해당 실제 시트를 열도록 구성했습니다. 원본 앱 프로젝트에는 촬영용 변경을 적용하지 않았습니다. 다시 촬영할 때는 앱에서 해당 화면을 직접 열어도 됩니다.

언어 선택은 현재 원문(일본어)과 번역 결과(한국어)를 위쪽에, 다른 언어(영어)를 아래쪽에 표시한 예시입니다. 최근 조합이 없는 메인 화면을 촬영했으므로 최근 조합 칩은 이 캡처에 나타나지 않습니다. 지원 언어와 화면 구성은 기기·OS·권한 상태에 따라 달라집니다.
