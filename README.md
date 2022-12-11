# ⭐️ JBNU_Slack_ChatBot

<img src = "https://img.shields.io/badge/Node.js-v18.11.0-blue"/>  ![GitHub](https://img.shields.io/github/license/LeeJungHwan-Dev/JBNU_Slack_ChatBot)
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FLeeJungHwan-Dev%2FJBNU_Slack_ChatBot&count_bg=%23FFA1FA&title_bg=%23000000&icon=slack.svg&icon_color=%23FFFFFF&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

![전챗](https://user-images.githubusercontent.com/93726941/202358478-ac261d45-1976-47e3-a3dc-e714a41aaa0a.png)

</br>

## ✅ PreView
|학사일정 조회|학사일정 조회|
|---------|-------------|
|![인사](https://user-images.githubusercontent.com/93726941/206875047-f6869269-c07f-4df3-bb3b-7ca40767c44a.gif)|![학사일정](https://user-images.githubusercontent.com/93726941/206875050-0e89503f-155a-4ea0-9a30-6ff2ebd22638.gif)|

|학과 사무실 조회|학식 조회|
|---------|-------------|
|![학과 사무실](https://user-images.githubusercontent.com/93726941/206875059-5579f0de-4d9c-4154-b5b8-4691fba7cfdd.gif)|![학식](https://user-images.githubusercontent.com/93726941/206875063-9f70a022-6206-40c1-9eaa-a16fdddf4133.gif)|



</br>

## 🔎 프로그램 소개
#### 🤖 JBNU_Slack_ChatBot

> 1. 간단한 인사에 대한 처리가 가능합니다.
>><pre>
>>"hello"
>>  |_"`안녕하세요? 전북대학교 챗봇입니다. 다음의 기능들을 제공하고 있습니다."
>>  |_"1. 학사일정 조회"
>>  |_"2. 식단 조회"
>>  |_"3. 학과 사무실 조회"
>>
>></pre>
>
> 2. 간단한 배수 연산이 가능합니다.
>> * ex) 4 -> 8 , 2 -> 4와 같이 지정한 값에 따른 연산이 가능합니다.
>><pre>
>>  "4"
>>  |_"8"
>></pre> 
>
> 3. 학사일정 조회가 가능합니다.
>><pre>
>>"학사일정 조회"
>>  |_"안내 받을 날짜를 이야기해주세요."
>>  |_|_"10/24"
>>  |_|_|_"10/24는 개교기념일 입니다."
>>  |
>>  |_"안내 받을 날짜를 이야기해주세요."
>>  |_|_"9/1 - 9/7"
>>  |_|_ 해당 날짜 안에 있는 일정 출력
>></pre>      
>
> 4. 학식조회가 가능합니다.
>><pre>
>>"오늘 학식 뭐야"
>>  |_"오늘의 메뉴는 '옹심이떡국 / 치즈너비아니조림 / 통영식오징어무침 / 참나물무침'입니다."
>>  |_"월: ⭐️⭐️"
>>
>>"이번주 뭐 나와"
>>  |_주간 메뉴 출력
>>  |_주간 식단 레이팅 출력
>></pre>    
>
> 5. 학과사무실 안내
>><pre>
>>"학과 사무실 조회"
>>  |_"학과 이름을 입력해주세요."
>>  |_|_"Computer Science and Engineering"
>>  |_|_|_"Computer Science and Engineering은 College of Engineering Building 7, 224입니다."
>></pre> 
</br>

## ❓ Why Use?

* 같은 학교 팀원들과 협업을 진행하다가 점심 먹을 시간이 다가오면 학식 메뉴를 바로 확인할 수 있습니다.
* 같은 학교 팀원들과 협업 중 학사일정을 공유가 필요하면 바로 진행할 수 있습니다.
</br>

## 🌈 How To Use?
~~~
1. 개인 저장소에 Git clone
2. 폴더 이동후 npm install
3. module 폴더 안에 token.js 작성 / 내용 참고
4. node index.js 실행

❗️ 해당 프로세스를 진행하기 위해서는 반드시 Node가 설치되어 있어야 합니다.
💡 Repo 맨 위에 기재된 Node 버전은 해당 Repo 개발 당시 사용된 Node의 버전입니다.
~~~

#### 🔨 token.js 생성 방법
![code](https://user-images.githubusercontent.com/93726941/202366662-e658bcc4-c78b-4bed-b381-6591d7704a2a.png)

#

#### ➕ 학사일정 및 학과 사무실 데이터 입력 방법


학사일정 : module -> 학사일정.txt 이름으로 데이터 저장

~~~
  module 
  |_scheduleModule 
  |_|_haksa.txt
~~~

* 데이터 저장 형식 : M/D : comment
* 데이터 저장 형식2 : M/D - M/D : comment

학과사무실 : module -> dept.txt 이름으로 데이터 저장

~~~
module 
  |_officeModule 
  |_|_dept.txt  
~~~
  
* 데이터 저장 형식 : 학과이름 : 위치

</br>

## 📄Docs
* 인사 모듈
* 학사일정 모듈
* 학식조회 모듈
* 학과사무실 안내 모듈

</br>

## 👋 협업 방법
* 1. fork 해주세요.
* 2. 코드를 수정후 PR 양식에 맞춰 dev 브랜치로 PR 해주세요.
* 3. 코드 리뷰가 끝나면 merge 해드리겠습니다.
</br>

## ⚙️ 테스트 환경 
#### OS : Windows , MacOS ventura 13.0
#### IDE : VS code 1.72.2
#### Language : JavaScript
#### CheckTool : ESLint , Prettier , Hook(husky)
#### Collaboration Tools : Git , GitHub, Slack , Notion

</br>

## License
~~~
Copyright (c) 2022 JungHwan Lee Seo / Min Seok / Yi Ha Eun.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
~~~

