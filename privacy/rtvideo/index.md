---
layout: default
lang: ko
i18n_key: rtvideoPrivacy
title: "개인정보 처리방침 | 보이는말"
description: "보이는말 앱의 개인정보 처리 및 이용에 관한 안내입니다."
permalink: /privacy/rtvideo/
styles:
  - /assets/css/pages/legal.css
---

<article id="main">
  <header class="special container">
    <span class="icon fa-tablet" aria-hidden="true"></span>
    <h2><strong data-i18n="rtvideoPrivacy.title">개인정보 처리방침</strong></h2>
  </header>

  <section class="wrapper style1 container legal-content app-policy-content">
    <div class="policy-app-target policy-app-target--compact" aria-label="적용 대상" data-i18n-aria-label="rtvideoPrivacy.targetLabel">
      <span class="policy-app-target-label" data-i18n="rtvideoPrivacy.targetLabel">적용 대상</span>
      <div class="policy-app-target-details">
        <strong class="policy-app-target-name" data-i18n="rtvideoPrivacy.appName">보이는말 - 실시간 자막 번역</strong>
        <span class="policy-app-target-description" data-i18n="rtvideoPrivacy.appDescription">실시간 음성 자막 및 번역</span>
      </div>
      <ul class="policy-app-platforms" aria-label="지원 플랫폼" data-i18n-aria-label="rtvideoPrivacy.platformsLabel">
        <li>iOS</li>
      </ul>
    </div>
    <div data-i18n-html="rtvideoPrivacy.content">
{% capture policy_fallback %}
<h2>제1조(개인정보의 처리 목적)</h2>

<p>이용자가 앱 이용 분석에 동의하면, 앱은 Google LLC의 Firebase Analytics를 통해 앱 이용 정보를 다음 목적으로 처리합니다.</p>

<ul><li>앱 설치·실행 및 이용 현황 파악</li><li>기능별 이용 현황 분석과 사용성 개선</li><li>오류 분석과 안정성 개선</li></ul>

<p>앱 이용 분석 정보는 이용자의 동의를 받은 경우에만 수집·이용합니다.</p>

<h2>제2조(개인정보의 처리 및 보유 기간)</h2>

<p>Firebase Analytics 분석 데이터에는 다음 보유기간을 적용합니다.</p>

<table><thead><tr><th>구분</th><th>보유기간</th></tr></thead><tbody><tr><td>이벤트 데이터</td><td>2개월</td></tr><tr><td>사용자 데이터</td><td>마지막 사용자 활동을 기준으로 14개월</td></tr></tbody></table>

<p>사용자 데이터 보유기간은 새 활동이 발생할 때마다 다시 계산됩니다. 이 기준은 사용자·이벤트 수준의 데이터에 적용되며, 표준 집계 보고서에는 동일하게 적용되지 않습니다.</p>

<p>앱 설정값은 이용자 기기의 앱 저장공간에 앱이 설치된 동안 보관됩니다. 번역 세션의 오디오·인식 자막·번역문은 처리 중 메모리에만 두고 세션 종료 시 정리합니다. 이용자가 설정에서 화자 구분 모델을 내려받으면 앱 저장공간에 보관되며, 설정에서 삭제하거나 앱을 제거할 때 삭제됩니다.</p>

<h2>제3조(개인정보의 제3자 제공 및 외부 서비스 이용)</h2>

<p>운영자는 개인정보를 제3자의 독립적인 이용 목적으로 제공하지 않습니다. Google LLC에 위탁하는 앱 이용 분석은 제4조에 안내합니다.</p>

<p><strong>앱 버전 확인</strong></p>

<p>앱은 최신 버전을 확인하기 위해 Apple App Store 조회 서비스에 앱 번들 ID를 전송합니다.</p>

<p>보이는말은 App Store 버전 조회 요청에 현재 스토어 국가 코드도 함께 전송합니다. 음성·자막 정보는 이 요청에 포함하지 않습니다.</p>

<p>Apple이 서비스 요청을 처리하면서 네트워크 연결 정보를 처리할 수 있으며, 자세한 내용은 <a href="https://www.apple.com/legal/privacy/kr/">Apple 개인정보 처리방침</a>을 확인해 주세요.</p>

<p>음성 인식과 번역은 Apple의 기기 내 기능으로 처리됩니다. 필요한 언어 모델은 Apple 서버에서 내려받을 수 있습니다. Apple은 번역 기능 사용에 관한 앱 번들 ID와 원문·번역 언어 등의 사용·성능 지표를 받을 수 있지만 오디오와 인식·번역 내용은 받지 않습니다. 해당 사용·성능 지표와 네트워크 요청 정보의 보관·삭제는 <a href="https://www.apple.com/legal/privacy/kr/">Apple 개인정보 처리방침</a>에 따르며, 앱에서 Apple 서버의 개별 기록을 조회하거나 삭제할 수 없습니다. <a href="https://developer.apple.com/documentation/translation/translationsession">Apple Translation</a> 및 <a href="https://developer.apple.com/documentation/speech/assetinventory">Speech 모델 안내</a>를 확인해 주세요.</p>

<p>이용자가 설정에서 화자 구분 모델 다운로드를 시작하면 Hugging Face에서 모델 파일을 내려받습니다. 이 요청에는 네트워크 연결 정보와 요청한 모델 리포지토리 정보가 포함될 수 있습니다. 오디오와 자막은 이 요청에 포함되지 않습니다. 요청 정보의 보관·삭제는 Hugging Face 정책을 따르며, 앱에서 Hugging Face 서버의 개별 기록을 조회하거나 삭제할 수 없습니다. Hugging Face의 <a href="https://huggingface.co/privacy">개인정보 처리방침</a>을 확인해 주세요.</p>

<h2>제4조(개인정보 처리의 위탁 및 국외 처리)</h2>

<p>앱 운영자는 개인정보처리자이며, 앱 이용 통계 분석을 위해 Google LLC에 분석 처리를 위탁합니다. Firebase Analytics(Google Analytics)의 ‘Google 제품 및 서비스’ 데이터 공유 설정은 사용하지 않습니다.</p>

<p>현재 Google Analytics 계정에서는 ‘Engagement modeling and business insights’ 설정을 사용하고 있습니다. Google은 해당 기능에 쓰이는 정보를 집계·익명화한다고 안내합니다.</p>

<table><thead><tr><th>구분</th><th>내용</th></tr></thead><tbody><tr><td>개인정보처리자</td><td>앱 운영자</td></tr><tr><td>수탁자</td><td>Google LLC</td></tr><tr><td>이용 서비스</td><td>Firebase Analytics(Google Analytics)</td></tr><tr><td>위탁 업무</td><td>앱 이용 통계 처리 및 분석 결과 제공</td></tr><tr><td>처리 항목</td><td>제5조의 앱 이용 분석 정보</td></tr><tr><td>보유기간</td><td>제2조의 기준 적용</td></tr></tbody></table>

<p>이용자가 동의한 앱 이용 분석 정보는 Firebase Analytics를 통해 Google에 전달됩니다. Google의 글로벌 인프라를 이용하므로 분석 정보는 국외에서 처리·보관됩니다.</p>

<p>Google의 데이터 처리 및 보호조치에 관한 자세한 내용은 <a href="https://support.google.com/analytics/answer/6004245?hl=ko">Google Analytics 데이터 보호 안내</a>와 <a href="https://business.safety.google/adsdatatransfers/">Google의 국외 데이터 이전 안내</a>를 확인해 주세요.</p>

<h2>제5조(처리하는 개인정보의 항목)</h2>

<p>앱 이용 분석을 위해 이름, 이메일 주소, 전화번호, 회원 계정 등 이용자를 직접 식별하는 정보를 수집하지 않습니다.</p>

<p>이용자가 앱 이용 분석에 동의한 경우 다음 정보를 처리합니다.</p>

<table><thead><tr><th>구분</th><th>처리 항목</th></tr></thead><tbody><tr><td>식별자</td><td>Firebase 앱 인스턴스 식별자. iOS 공급업체 식별자(IDFV)는 수집하지 않습니다.</td></tr><tr><td>앱·기기 정보</td><td>앱 버전, 운영체제 버전, 기기 모델, 앱 인스턴스별 자동 생성 식별자</td></tr><tr><td>이용·진단 정보</td><td>앱 실행·화면(home, captions, settings, licenses)·기능 이용 이벤트, 설정 항목과 선택값, 음성 권한 상태, 지원 언어 개수, 모델·번역 준비 결과와 소요 시간, 세션 결과·종료 사유·시간·자막 개수·오류 및 오디오 드롭 집계, 오류 문맥·도메인·코드·유형. 같은 오류는 60초 동안 한 번만 기록합니다.</td></tr><tr><td>대략적인 지역 정보</td><td>Google Analytics가 네트워크 정보를 이용해 산출하는 국가·지역 정보</td></tr></tbody></table>

<p>앱이 기록하는 이벤트는 app_opened, screen_view, settings_snapshot, setting_changed, feature_used, languages_loaded, speech_permission_status/requested/result/changed, translation_preparation_started/ended, translation_session_started/ended, audio_sharing_requested/cancelled/started/paused/resumed, first_caption, pip_opened/closed, speaker_model_install_started/ended, speaker_model_removed, app_update_checked, previous_session_interrupted, app_error입니다. 이벤트에는 화면 이름, 기능·설정 이름과 선택값, 언어 코드, 권한·작업 결과, 시간·개수 집계와 사전 정의된 오류 값만 포함합니다.</p>

<p>Firebase Analytics는 동의 후 앱 인스턴스 식별자, 앱·운영체제 버전, 기기 종류 등 서비스의 자동 수집 정보와 앱 세션 관련 이벤트도 처리할 수 있습니다.</p>

<p>앱·기기 정보와 이용 정보는 분석 식별자와 연계하여 분석될 수 있습니다. 운영자는 이용자의 이름이나 연락처를 분석 식별자에 연결하지 않습니다.</p>

<p><strong>오디오 원문, 인식된 자막과 번역문, 이용자가 입력한 문장, 파일명·경로는 앱 이용 분석 정보에 포함하지 않습니다.</strong></p>

<p><strong>분석 동의와 별도로 외부 서비스 요청에 포함되는 정보</strong></p><ul><li>Apple App Store 버전 조회: 앱 번들 ID, 스토어 국가 코드, 네트워크 연결 정보</li><li>Apple 번역 기능의 사용·성능 지표: 앱 번들 ID와 원문·번역 언어</li><li>Hugging Face 모델 다운로드: 요청한 모델 리포지토리 정보와 네트워크 연결 정보</li></ul><p>이 요청에는 오디오, 인식 자막, 번역문이 포함되지 않습니다.</p>

<h2>제6조(개인정보의 파기절차 및 방법)</h2>

<p>보유기간이 지난 분석 데이터는 Google Analytics의 정기 삭제 절차에 따라 자동 삭제됩니다. 보유기간 만료와 실제 삭제 사이에는 서비스 처리 일정에 따른 차이가 있을 수 있습니다.</p>

<p>동의를 철회하면 이후 분석 정보 수집을 중단합니다. 철회 전에 Google에 전달된 정보는 즉시 삭제되지 않으며, 제2조의 보유기간과 Google Analytics의 삭제 절차에 따라 처리됩니다.</p>

<p>앱은 Google 서버에 전달된 개별 분석 정보의 열람·정정·삭제 기능을 제공하지 않습니다. 해당 정보는 Google Analytics의 보유기간과 삭제 절차에 따라 처리됩니다. Google이 처리하는 정보에 관한 개인정보 보호 요청 방법은 <a href="https://support.google.com/policies/answer/9581826?hl=ko">Google 개인정보 보호 고객센터</a>에서 확인할 수 있습니다.</p>

<p>앱을 제거하면 기기에 저장된 앱 설정과 앱 저장공간의 모델 파일도 함께 제거됩니다. 내려받은 화자 구분 모델은 앱 설정의 모델 삭제 기능으로 삭제할 수 있습니다.</p>

<h2>제7조(개인정보의 안전성 확보조치)</h2>

<p>운영자는 앱 이용 분석의 목적과 항목을 정하고, 이용자가 동의한 경우 앱이 해당 이벤트를 Google LLC의 Firebase Analytics로 전송하도록 설정합니다. 운영자는 개별 분석 기록을 별도로 보관하지 않습니다. Google LLC는 전달받은 정보를 분석 서비스에 따라 처리·보관합니다.</p>

<p>분석 정보의 전송·보관에는 Google이 제공하는 암호화 및 접근 통제 등 보안조치가 적용됩니다.</p>

<h2>제8조(자동 수집 및 분석 정보 관리)</h2>

<p><strong>앱 이용 분석 동의 관리</strong></p>

<p>Firebase Analytics는 이용자가 동의한 경우에만 제5조의 정보를 자동 수집합니다. 이용자는 앱의 <strong>설정 → 개인정보</strong>에서 동의를 언제든지 철회하거나 다시 허용할 수 있습니다. 동의를 거부하거나 철회해도 앱의 주요 기능을 이용할 수 있습니다.</p>

<h2>제9조(개인정보 보호책임자 및 문의처)</h2>

<p>운영자는 개인정보 처리와 보호에 관한 책임을 맡고 관련 문의와 고충을 처리합니다.</p>

<ul><li><strong>담당:</strong> 앱 운영자</li><li><strong>이메일:</strong> <a href="mailto:devp.yg@gmail.com">devp.yg@gmail.com</a></li></ul>

<h2>제10조(적용 시점 및 처리방침의 변경)</h2>

<p>이 방침은 앱 이용 분석 동의 기능이 포함된 버전의 출시일부터 적용합니다.</p>

<p>처리 목적·항목, 외부 서비스, 보유기간 또는 동의 관리 방법이 변경되면 변경 내용과 적용일을 이 페이지에 안내합니다. 변경 전 방침은 별도 이력으로 관리하며, 추가 동의가 필요한 변경은 적용 전에 동의를 받습니다.</p>
{% endcapture %}
      {{ policy_fallback | markdownify }}
    </div>
  </section>
</article>
