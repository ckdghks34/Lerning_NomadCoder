# NomadCoder  - Reactjs 

------

## 1. Warning

------

### 1.1 React Hook useEffect has a missing dependency: 'getMovieDetail'. Either include it or remove the dependency array

![image-20220316150218457](C:\Users\Hwan\AppData\Roaming\Typora\typora-user-images\image-20220316150218457.png)

![image-20220316145252292](C:\Users\Hwan\AppData\Roaming\Typora\typora-user-images\image-20220316145252292.png)

- 특정 페이지가 마운트 되기전에 fetch를 한번만 할 것이기 때문에 의존성을 빈 배열로 넘겨주었으나 해당 Warning이 발생함.

- 해결방법

  1. useEffect 내 state를 넣어준다.

     -> 해당되지 않음.

  2. useEffect 내부에 함수를 정의한 경우

     2.1 아래와 같이 수정하였으나 여전히 Warning 발생

     ![](C:\Users\Hwan\AppData\Roaming\Typora\typora-user-images\image-20220316151130371.png)

     

     2.2 useCallback() 사용

     ​				![image-20220316151249623](C:\Users\Hwan\AppData\Roaming\Typora\typora-user-images\image-20220316151249623.png)

       - 문제가 해결되었으나 useCallback에서 추가 자료를 찾아봐야할 듯.

         

       - 2.3 아래와 같이 두번째 인자값을 [] 로 보내지 않아도 Warning 발생하지 않음.

         ![image-20220316151552158](C:\Users\Hwan\AppData\Roaming\Typora\typora-user-images\image-20220316151552158.png)

         - 실행에도 문제없음.
         - useEffect(), useCallback() 다시 찾아볼 것.



##### 참고 사이트

- [exhaustive-deps-warning 해결법]: https://kyounghwan01.github.io/blog/React/exhaustive-deps-warning/#_1-useeffect%E1%84%82%E1%85%A2-state%E1%84%85%E1%85%B3%E1%86%AF-%E1%84%82%E1%85%A5%E1%87%82%E1%84%8B%E1%85%A5%E1%84%8C%E1%85%AE%E1%86%B7

  