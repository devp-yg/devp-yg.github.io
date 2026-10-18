---
layout: default
lang: ko
i18n_key: tagherePrivacy
title: "개인정보 처리방침 | 공간기록"
description: "공간기록 앱의 개인정보 처리 및 이용에 관한 안내입니다."
permalink: /privacy/taghere/
styles:
  - /assets/css/pages/legal.css
---

<article id="main">
  <header class="special container">
    <span class="icon fa-tablet" aria-hidden="true"></span>
    <h2><strong data-i18n="tagherePrivacy.title">개인정보 처리방침</strong></h2>
  </header>

  <section class="wrapper style1 container legal-content app-policy-content">
    <div class="policy-app-target policy-app-target--compact" aria-label="적용 대상" data-i18n-aria-label="tagherePrivacy.targetLabel">
      <span class="policy-app-target-label" data-i18n="tagherePrivacy.targetLabel">적용 대상</span>
      <div class="policy-app-target-details">
        <strong class="policy-app-target-name" data-i18n="tagherePrivacy.appName">공간기록</strong>
        <span class="policy-app-target-description" data-i18n="tagherePrivacy.appDescription">여기를 기억해</span>
      </div>
      <ul class="policy-app-platforms" aria-label="지원 플랫폼" data-i18n-aria-label="tagherePrivacy.platformsLabel">
        <li>iOS</li>
      </ul>
    </div>
    <div data-i18n-html="tagherePrivacy.content">
    {% capture policy_content %}
## 제1조(개인정보의 처리 목적)

운영자는 이용자의 선택 동의에 따라 Google LLC의 Firebase Analytics를 이용하여 다음 목적으로 앱 이용 정보를 처리합니다.

- 앱 설치·실행 및 활성 이용 현황 파악
- 기능별 이용 현황 분석과 사용성 개선
- 기능 오류 분석과 안정성 개선

앱 이용 분석을 위한 개인정보 수집·이용은 이용자의 동의를 근거로 합니다. 동의하지 않아도 장소 등록, 공간 인식 및 방문 기록 등 주요 기능을 이용할 수 있습니다.

## 제2조(개인정보의 처리 및 보유 기간)

Firebase Analytics 분석 데이터에는 다음 보유기간을 적용합니다.

| 구분 | 보유기간 |
|:--|:--|
| 이벤트 데이터 | 2개월 |
| 사용자 데이터 | 마지막 사용자 활동을 기준으로 14개월 |

사용자 데이터는 새 활동이 발생할 때마다 보유기간을 다시 계산합니다. 이 설정은 사용자·이벤트 수준의 데이터에 적용되며, 표준 집계 보고서에는 동일하게 적용되지 않습니다.

## 제3조(개인정보의 제3자 제공 및 외부 서비스 이용)

운영자는 개인정보를 제3자의 독립적인 이용 목적으로 제공하지 않습니다. Google LLC가 운영자를 대신하여 수행하는 분석 업무는 제4조에 안내합니다.

**앱 버전 확인**

앱은 최신 버전을 확인하기 위해 Apple의 App Store 조회 서비스를 이용합니다.

Apple이 서비스 요청 과정에서 처리하는 네트워크 연결 정보에는 [Apple 개인정보 처리방침](https://www.apple.com/legal/privacy/kr/)이 적용됩니다.

**지도 및 주소 검색**

앱은 장소 등록 화면에서 지도를 표시하고 현재 위치 확인, 장소 선택 및 주소 검색을 제공하기 위해 Apple Inc.의 지도 및 주소 검색 서비스를 이용합니다. 이때 Apple이 요청 처리를 위해 지도 영역·선택 위치의 좌표, 검색어 또는 네트워크 연결 정보를 처리할 수 있으며, 자세한 내용은 <a href="https://www.apple.com/legal/privacy/kr/">Apple 개인정보 처리방침</a>을 확인해 주세요.

## 제4조(개인정보 처리의 위탁 및 국외 처리)

공간기록 운영자는 개인정보처리자이며, 앱 이용 통계 분석을 위해 Google LLC에 분석 처리를 위탁합니다. Firebase Analytics(Google Analytics)의 ‘Google 제품 및 서비스’ 데이터 공유 설정은 사용하지 않습니다.

| 구분 | 내용 |
|:--|:--|
| 개인정보처리자 | 공간기록 운영자 |
| 수탁자 | Google LLC |
| 이용 서비스 | Firebase Analytics(Google Analytics) |
| 위탁 업무 | 앱 이용 통계 처리 및 분석 결과 제공 |
| 처리 항목 | 제5조의 분석 데이터 |
| 보유기간 | 제2조의 기준 적용 |

이용자가 분석에 동의하면 제5조의 앱 이용 정보가 Firebase Analytics(Google Analytics)를 통해 Google에 전달됩니다. Google은 글로벌 인프라를 이용하므로 분석 데이터가 국외에서 처리·보관됩니다.

서비스의 데이터 처리와 보호조치에 관한 자세한 내용은 [Google Analytics 데이터 보호 안내](https://support.google.com/analytics/answer/6004245?hl=ko) 및 [Google의 국외 데이터 이전 안내](https://business.safety.google/adsdatatransfers/)에서 확인할 수 있습니다.

## 제5조(처리하는 개인정보의 항목)

앱은 이름, 이메일 주소, 전화번호 및 회원 계정 등 실제 신원을 직접 확인하기 위한 정보를 수집하지 않습니다.

**이용자가 앱 이용 분석에 동의한 경우 처리하는 정보**

| 구분 | 처리 항목 |
|:--|:--|
| 식별자 | 앱 설치를 구분하기 위한 Firebase 앱 인스턴스 식별자, iOS 공급업체 식별자(IDFV) |
| 앱·기기 정보 | 앱 버전, 운영체제 버전, 기기 모델 등 기술 정보 |
| 이용·진단 정보 | 앱 실행·화면·기능 이용 이벤트, 항목 종류별 생성·수정·삭제 이벤트, 사전에 정의된 오류 유형·코드 |
| 대략적인 지역 정보 | Google Analytics가 네트워크 정보를 이용하여 산출하는 국가·지역 정보 |

앱·기기 정보와 이용 정보는 분석 식별자와 연계하여 분석될 수 있습니다. 운영자는 이용자의 이름이나 연락처를 분석 식별자에 연결하여 관리하지 않습니다.

**등록한 장소·공간의 구체적인 정보와 방문 기록은 Firebase Analytics 이벤트에 포함하지 않습니다.**

## 제6조(개인정보의 파기절차 및 방법)

보유기간이 지난 분석 데이터는 Google Analytics의 정기 삭제 절차에 따라 자동 삭제됩니다. 보유기간 만료와 삭제 처리 사이에는 서비스의 처리 주기에 따른 차이가 있습니다.

동의를 철회하면 이후 분석 데이터 수집을 중단합니다. 철회 전에 전송된 데이터가 즉시 삭제되는 것은 아니며, 제2조의 보유기간과 Google Analytics의 삭제 절차에 따라 처리됩니다.

앱은 이미 Google 서버에 전송된 개별 분석 데이터의 열람·수정·삭제 기능을 제공하지 않습니다. 해당 데이터는 Google Analytics의 보유기간과 삭제 절차에 따라 처리됩니다. Google이 처리하는 데이터와 개인정보 보호 요청 방법은 <a href="https://support.google.com/policies/answer/9581826?hl=ko">Google 개인정보 보호 고객센터</a>에서 확인할 수 있습니다.

## 제7조(개인정보의 안전성 확보조치)

운영자는 앱 이용 분석의 목적과 항목을 정하고, 이용자가 동의한 경우 앱이 해당 이벤트를 Google LLC의 Firebase Analytics로 전송하도록 설정합니다. 운영자는 개별 분석 기록을 별도로 보관하지 않습니다. Google LLC는 전달받은 정보를 분석 서비스에 따라 처리·보관합니다.

분석 정보의 전송·보관에는 Google이 제공하는 암호화 및 접근 통제 등 보안조치가 적용됩니다.

## 제8조(자동 수집 및 분석 정보 관리)

**앱 이용 분석 동의 관리**

Firebase Analytics는 이용자가 동의한 경우에만 제5조의 분석 정보를 자동 수집합니다. 이용자는 앱의 **설정 → 개인정보**에서 동의를 언제든지 철회하거나 다시 허용할 수 있습니다. 동의를 거부하거나 철회해도 앱의 주요 기능은 이용할 수 있습니다.

**기기에 저장된 기록 관리**

장소·공간·방문 기록은 이용자 기기에 저장됩니다. 이용자는 앱에서 해당 기록을 직접 수정·삭제할 수 있으며, 운영자는 이 기록을 열람하거나 대신 수정·삭제할 수 없습니다.

**이미 전송된 분석 정보**

앱은 회원 계정을 만들지 않으며, 앱 내에서는 이미 Google 서버에 전송된 개별 분석 데이터의 삭제 요청을 접수하거나 삭제할 수 없습니다. 이용자가 동의를 철회하면 이후 수집은 중단되지만, 철회 전에 전송된 데이터는 제2조의 보유기간과 Google Analytics의 삭제 절차에 따라 처리됩니다. Google에 저장된 데이터에 관한 개인정보 보호 요청은 <a href="https://support.google.com/policies/answer/9581826?hl=ko">Google 개인정보 보호 고객센터</a>를 통해 문의할 수 있습니다.

## 제9조(개인정보 보호책임자 및 문의처)

운영자는 개인정보 보호책임자로서 개인정보 처리·보호 업무와 관련 문의·고충 처리를 총괄합니다.

- **담당:** 운영자
- **이메일:** [devp.yg@gmail.com](mailto:devp.yg@gmail.com)

## 제10조(적용 시점 및 처리방침의 변경)

이 방침은 개인정보 동의 기능이 포함된 앱 버전의 출시일부터 적용합니다.

처리 목적·항목, 외부 서비스, 보유기간 또는 동의·권리 행사 방법이 변경되면 변경 내용과 적용일을 이 페이지에 안내합니다. 변경 전 방침은 별도 이력으로 관리하며, 추가 동의가 필요한 사항은 적용 전에 별도로 동의를 받습니다.
    {% endcapture %}
    {{ policy_content | markdownify }}
    </div>
  </section>
</article>
