🇰🇷  **For Korean user**: 스크롤다운을 하면 한국어로된 프로젝트 설명을 보실 수 있습니다.

## 📑 Table of Contents

### [English](<#🔍-Job-Search-(English)>)

- [🚀 Quick Start](#-Quick-Start)
- [✨ Introduction](#-Introduction)
  - [Problem](#Problem)
  - [Idea](#Idea)
- [👀 Demo](#-Demo)
  - [Mokcup Link](#Mokcup-Link)
  - [Live Website Link](#Live-Website-Link)
- [⚙️ Main Feature](#-Main-Feature)
- [🪄 Tech Stack](#-)
  - [Design](#Design)
  - [Front-end](#Front-end)
  - [Back-end](#Back-end)
- [📝 Project Review](#-Project-Review)
  - [The most challenging parts](#The-most-challenging-parts)
  - [Areas of improvement](#Areas-of-improvement)
  - [Blog Posts](#Blog-Posts)

### [Korean](<#🔍-Job-Search-(Korean)>)

- [🚀 프로젝트 실행하기](#-프로젝트-실행하기)
- [✨ 소개](#-소개)
  - [불편했던점](#-불편했던점)
  - [아이디어](#-아이디어)
- [👀 데모](#-데모)
  - [목업 링크](#목업-링크)
  - [라이브 사이트 링크](#라이브-사이트-링크)
- [⚙️ 주요 기능과 로직](#-주요-기능과-로직)
- [🪄 기술 스택](#-기술-스택)
  - [디자인](#-디자인)
  - [프론트앤드](#-프론트앤드)
  - [백앤드](#-백앤드)
- [📝 프로젝트 리뷰](#-프로젝트-리뷰)
  - [프로젝트를 하면서 어려웠던 점](#-프로젝트를-하면서-어려웠던-점)
  - [프로젝트를 하면서 아쉬웠던 점](#-프로젝트를-하면서-아쉬웠던-점)
  - [아쉬웠던점을 보강하기 위해 공부한 내용](#-아쉬웠던점을-보강하기-위해-공부한-내용)

---

# 🔍 Job Search (English)

## 🚀 Quick Start

1. Clone this repo: `git clone https://github.com/hyeonahc/job-search-front.git`
2. Move to the directory: `cd <YOUR_PROJECT_NAME>`.
3. Install packages: `yarn install`
4. Start project
   - in your localhost: `yarn start`
   - after build: `yarn build` then `yarn start`

## ✨ Introduction

Job Search is a small API where you can filter 3 options from the results page of Saramin. The filter options are following:

1. Number of years since the company has been established
2. Revenue of the company
3. Number of employees

FYI, [Saramin](https://www.saramin.co.kr/) is one of the biggest Korean employment websites for job listings. You can think of it as Korean Indeed!

### Problem

<p align="center">
  <img src="https://user-images.githubusercontent.com/83247825/163704800-17cc6fe0-9467-470d-b437-1263cef4b2fd.png" alt="saramin screenshot" style="width: 70%;"/>
</p>
Saramin provides job titles, locations and occupations for job search. You are likely to receive a lot of job postings that don’t match your preferences on the result page.

### Idea

My team came up with the idea of adding more search filters to narrow down the job postings and show relevant result data on the table.

## 👀 Demo

![Job Search](https://user-images.githubusercontent.com/83247825/163704640-e427dc00-af2f-4a16-a2e9-7d812a624411.png)

### Mokcup Link

🔗 [Click here to see the mockup on Behance](https://www.behance.net/gallery/141657723/Search-Jobs)

### Live Website Link

🔗 [Click here to see the live website link on Netlify](https://saramin-job-search.netlify.app/)

## ⚙️ Main Feature

1. Crawling: Crawled the job posting data from Saramin and displayed them on the table
2. Filtering: Added three options that filter the job posting data on the table

## 🪄 Tech Stack

#### Design [@hyeonahc](https://github.com/hyeonahc)

: Adobe XD

#### Front-end [@hyeonahc](https://github.com/hyeonahc)

: React, Context API, React Table, Scss

#### Back-end [@rerun1129](https://github.com/rerun1129)

: Java, Spring

🔗 Click here to see the back-end repository: [job_search_back](https://github.com/rerun1129/job_search_back)

## 📝 Project Review

### The most challenging parts

_Apr 17, 2022_

1. **Context API**

   When I created projects with React, I’ve been using state only locally (within the same component). I managed the state globally using the context API library for the first time in which I struggled with applying context API to my project. I would like to practice this feature more and use Redux for my next project.

2. **React Table**

   I used React Table library to easily insert data into the table and added the pagination feature. The most challenging part was quickly picking up the right information. Also, I found that it took more time for me to learn how to use the new library. My next goal is to experience more new libraries.

3. **Communication with back-end developers**

   Throughout the project, I found it difficult to understand the back-end developer (Even though it was in my native language, Korean) There were some new terms and a situation I never experienced before. I learned that it’s important to understand the bigger picture, the overall web development process, and to communicate with back-end developers as well as understand how the client-side receives the data from the back-end.

### Areas of improvement

1. **Add .gitignore file in the beginning of the project**

   I added .gitignore file later in the project which led to including unnecessary files(cache, node_mdules) in the git history.

2. **Make the meaningful commit**

   The best practice is committing when a certain feature is built. That’s something I didn’t know. I committed whenever I felt like it, which led to messing up the commit history.

3. **Keep the commit message convention**

   I didn’t follow the common commit message convention which made it hard to figure out what the commit is about.

### Blog Posts

I studied the challenging parts from this porject and wrote some blog posts. (Written in Korean 🇰🇷)

- [[Git] How to Write Git Commit Message](https://maplecoding.tistory.com/104?category=1268568)
- [[Git] Common Prefix for Conventional Commits](https://maplecoding.tistory.com/101?category=1268568)
- [[Git] 4 Things to Avoid When You Use Git](https://maplecoding.tistory.com/99?category=1268568)

---

# 🔍 Job Search (한국어)

## 🚀 프로젝트 실행하기

1. 리포 클론하기: `git clone https://github.com/hyeonahc/job-search-front.git`
2. 해당 디렉토리로 이동하기: `cd <YOUR_PROJECT_NAME>`.
3. 패키지 설치하기: `yarn install`
4. 프로젝트 실행하기
   - 사용자 로컬호스트: `yarn start`
   - 빌드후 사용: `yarn build` then `yarn start`

## ✨ 소개

Job Search는 [사람인](https://www.saramin.co.kr/zf_user/) IT/개발 직업군 검색결과에서 세가지 필터링 옵션을 추가하여 테이블로 정리해주는 간단한 API입니다. 3가지 필터링 옵션은 다음과 같습니다:

1. 업력
2. 매출액
3. 회사사원수

### 불편했던점

<p align="center">
  <img src="https://user-images.githubusercontent.com/83247825/163704800-17cc6fe0-9467-470d-b437-1263cef4b2fd.png" alt="saramin screenshot" style="width: 70%;"/>
</p>

사람인에서 구인정보를 검색할때 내가 선호하는 회사 조건을 필터링해주는 기능이 없어 불편함을 느꼈다.

### 아이디어

구인정보에서 회사 업력, 매출액, 회사사원수 필터링 옵션을 추가해서 테이블로 정리해주면 어떨까?

## 👀 데모

![Job Search](https://user-images.githubusercontent.com/83247825/163704640-e427dc00-af2f-4a16-a2e9-7d812a624411.png)

### 목업 링크

🔗 [Behance에서 목업 보러가기](https://www.behance.net/gallery/141657723/Search-Jobs)

### 라이브 사이트 링크

🔗 [Netlify로 배포한 라이브 사이트 보러가기](https://saramin-job-search.netlify.app/)

## ⚙️ 주요 기능과 로직

1. 크롤링: 사람인에서 IT/개발 직군의 회사 설립일, 매출액, 회사사원수 정보를 불러와 테이블에 보여준다
2. 필터링: 회사 설립일, 매출액, 회사사원수의 세부 검색 기능을 추가한다

## 🪄 기술 스택

#### 디자인 [@hyeonahc](https://github.com/hyeonahc)

: Adobe XD

#### 프론트앤드 [@hyeonahc](https://github.com/hyeonahc)

: React, Context API, useTable, Scss

#### 백앤드 [@rerun1129](https://github.com/rerun1129)

: Java, Spring

🔗  [백엔드 리포지토리: job_search_back 보러가기](https://github.com/rerun1129/job_search_back)

## 📝 프로젝트 리뷰

### 프로젝트를 하면서 어려웠던 점

_Apr 17, 2022_

1. **context API의 사용**

   지금까지 리액트 프로젝트를 할때 state를 컴포넌트 내부에서만 사용하였다. 이번 프로젝트를 진행하면서 처음으로 context API를 사용하여 전역적으로 state를 관리해주었다. 아직 사용법에 익숙하지 않아 프로젝트에 적용하는데 많은 어려움이 있었다. 리액트에서 전역적으로 데이터를 처리하는 방법을 더 공부해보겠다. 다음 프로젝트에서 전역적으로 상태관리를 할때는 redux를 공부해 사용해보고 싶다.

2. **React Table 라이브러리 사용**

   공식문서와 유튜브 강의를 보며 React Table 사용법을 익히면서 프로젝트에 적용해보았다. 아직까지는 공식문서를 파악하는 속도가 느리고 새로운 라이브러리를 만났을때 사용법을 익히는데 오랜 시간이 걸린다. 새로운 라이브러리를 접하는 것을 두려워하지 않고 영어로 된 공식문서를 자주 접해야겠다.

3. **백엔드 개발자와의 소통문제**

   프로젝트를 진행하면서 함께 작업을 했던 백엔드 개발자의 말을 이해하는데 어려움이 있었다. 이를 극복하기 위해 웹개발에 대한 전반적인 흐름을 이해하는 것이 중요하다고 느꼈다. 특히 프론트와 백엔드 사이에서 어떻게 데이터를 받아오는지에 대한 공부를 해 다음 프로젝트에서는 의사소통에 어려움을 줄이는 것을 목표로 삼겠다.

### 프로젝트를 하면서 아쉬웠던 점

1. **.gitignore 적용을 뒤늦게 했다**

   GitHub에 올라오지 않아도될 cache, node_modules에 대한 변경 정보도 같이 커밋되어 commit history가 지저분해지는 결과를 초래했다.

2. **깃 커밋 메시지 컨벤션을 지켜주지 못했다**

   깃 커밋 메세지에 대한 prefix, convention에 대한 사전 지식이 없어 기능별로 커밋을 하지 못했고 결과적으로 commit별로 내가 어떤 작업을 했는지 파악하기가 어려워졌다.

### 아쉬웠던점을 보강하기 위해 공부한 내용

- [[깃] 깃 커밋 메시지 컨벤션 (깃 메세지 작성법)](https://maplecoding.tistory.com/104?category=1268568)
- [[깃] 커밋 메세지 작성시 필요한 커밋 유형(prefix) 정리](https://maplecoding.tistory.com/101?category=1268568)
- [[깃] 깃 올바른 사용법 (안좋은 습관)](https://maplecoding.tistory.com/99?category=1268568)
