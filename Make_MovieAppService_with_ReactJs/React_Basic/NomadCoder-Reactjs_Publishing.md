# NomadCoder  - Reactjs 



##  7.7 Publishing



### 7.7.1 gh-pages

------

- 결과물을 github pages에 업로드 할 수 있게 해주는 패키지

  > 💡 github pages란?
  >
  > - github에서 제공하는 무료 서비스
  > - html, css, javascript를 업로드하게되면 웹사이트로 만들어서 전세계에 무료로 배포해준다.
  > - 도메인을 가지게됨

  

- 설치 명령어

  ```bash
  npm install gh-pages
  ```

  

- 가장 먼저 해야할 것은 package.json 확인 해야한다.

  - json 파일에 안에 'build' script를 실행하면 웹사이트의 production ready code를 생성하게 된다.

    > 💡 Production ready란?
    >
    > ​	- 코드가 압축되고 모든게 최적화 된다는 의미.

  - 'build' script를 실행하게되면 아래와같이 build라는 폴더와 함께 브라우저가 이해할 수 있는 코드로 변환된 파일들이 생성된다.

  - github에 build한 파일들을 push하면 완료!

    ![image-20220316152045342](C:\Users\Hwan\AppData\Roaming\Typora\typora-user-images\image-20220316152045342.png)

  - push하기 전 해야할 일!

    1. package.json을 킨다.
    2. 맨 아래쪽에서 "homepage" : "https://{github_id}.github.io/{github_repository}" 추가해준다.
       ![image-20220316152458784](C:\Users\Hwan\AppData\Roaming\Typora\typora-user-images\image-20220316152458784.png)
       - git remote -v 명령어를 통해 repository를 알 수 있다.
    3.  'deploy' script 생성
       - 설치한 gh-pages를 실행시키고 'build' 디렉토리를 가져가도록 함.
       - "deploy" : "gh-pages -d build"
       - deploy를 하기전 build를 해야한다. 이를 위해 predeploy 스크립트를 생성하여 deploy가 실행되기 전 build가 되도록 만듬.
       - "predeploy" : "npm run build"
    4. ㅇㅇ
    5. ㅇㅇ
    6. ㅇㅇ

    

  - > ## Error
    >
    > ------
    >
    > 1.  deploy 명령어가 실행되었을때 발생한 오류
    >
    >    - ![image-20220316154217801](C:\Users\Hwan\AppData\Roaming\Typora\typora-user-images\image-20220316154217801.png)
    >
    >    - 원인 : git 주소가 잘못되어 Clone에 실패하여 발생한 오류
    >
    >    - 해결
    >
    >      ```json
    >      // 수정 전
    >      "homepage": "https://ckdghks34.github.io/Lerning_NomadCoder"
    >      
    >      // 수정 후
    >      "homepage": "https://ckdghks34.github.io/Lerning_NomadCoder.git"
    >      ```
    >
    >      
    >
    > 2. Filename too long
    >
    >    - ![image-20220316154601512](C:\Users\Hwan\AppData\Roaming\Typora\typora-user-images\image-20220316154601512.png)
    >
    >    - 원인 : clone을 받는과정에서 발생한 오류로, 윈도우 API의 파일경로길이 제한이 260자이기 때문에 발생한 오류
    >
    >    - 해결 : 
    >
    >      ```bash
    >      # git bash를 관리자권한으로 실행하여 아래 명령어 실행
    >      git config --system core.longpaths true
    >      ```
    >
    >      