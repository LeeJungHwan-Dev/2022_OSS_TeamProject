# ⭐️ JBNU_Slack_ChatBot

<img src = "https://img.shields.io/badge/Node.js-v18.11.0-blue"/>  ![GitHub](https://img.shields.io/github/license/LeeJungHwan-Dev/JBNU_Slack_ChatBot)

![전챗](https://user-images.githubusercontent.com/93726941/202358478-ac261d45-1976-47e3-a3dc-e714a41aaa0a.png)
</br>

## ✅ PreView
<div align = "center"><img src = "https://user-images.githubusercontent.com/93726941/202402391-5ce88ac2-c656-4f38-8e17-b950cabc2f26.gif"/></div>

</br>

## 🔎 프로그래 소개
#### 🤖 JBNU_Slack_ChatBot

> 1. 간단한 인사에 대한 처리가 가능합니다.
>><pre>
>>"hello"
>>  |_"hi"
>>  |_"안녕하세요?"
>>  |_"반가워요."
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
>>"학사일정"
>>  |_"안내 받을 날짜르 이야기해주세요."
>>    |_"10/24"
>>      |_"10/24는 개교기념일 입니다."
>>
>></pre>      
>
> 4. 학식조회가 가능합니다.
>><pre>
>>"오늘 밥 뭐야"
>>  |_"시래기국, 된장국, 불고기"
>>  |_"⭐️⭐️"
>></pre>    
>
> 5. 학과사무실 안내
>><pre>
>>"컴퓨터공학부"
>>  |_"공과대학 7호관 224호"
>></pre> 
</br>

## ❓ Why Use?

* 같은 학교 팀원들과 협업을 진행하다가 점심 먹을시간이 다가오면 학식 메뉴를 바로 확인할 수 있습니다.
* 같은 학교 팀원들과 협업중 학사일정을 공유가 필요하면 바로 진행할 수 있습니다.
</br>

## 🌈 How To Use?
~~~
1. 개인 저장소에 Git clone
2. 폴더 이동후 npm install
3. module 폴더 안에 token.js 작성 / 내용 참고
4. node index.js 실행

❗️ 해당 프로세스를 진행하기 위해서는 반드시 Node가 설치되어 있어야합니다.
💡 Repo 맨 위에 기재된 Node 버전은 해당 Repo 개발 당시 사용된 Node의 버전 입니다.
~~~

#### 🔨 token.js 생성 방법
![code](https://user-images.githubusercontent.com/93726941/202366662-e658bcc4-c78b-4bed-b381-6591d7704a2a.png)

#### ➕ 학사일정 및 학과 사무실 데이터 입력 방법
~~~~
학사일정 : module -> 학사일정.txt 이름으로 데이터 저장

module
  |_학사일정.txt 
  
* 데이터 저장 형식 : MM/DD comment

학과사무실 : module -> 학과사무실.txt 이름으로 데이터 저장

module
  |_학과사무실.txt 
  
* 데이터 저장 형식 : 학과이름 위치
~~~~
</br>

## 📄Docs
* 인사 모듈
* 학사일정 모듈
* 학식조회 모듈
* 학과사무실 안내 모듈

## ⚙️ 테스트 환경 
#### OS : Windows , MacOS ventura 13.0
#### IDE : VS code
#### Language : JavaScript
#### CheckTool : ESLint , Prettier , Hook(husky)
#### Collaboration Tools : Git , GitHub, Slack , Notion
</br>

## License
~~~
Copyright (c) 2022 JungHwan Lee.

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

