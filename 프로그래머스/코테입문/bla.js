7.1 함수란? (중요한 개념 설명)
    특정한 일을 수행하는 코드의 집합

    function add(a,b){
        return a+b;
    };

    함수도 객체.
    함수를 정의하면 함수의 오브젝트는 힙에 할당된다.
    함수의 이름은 함수 오브젝트의 메모리 주소를 가지고 있다.
    즉 함수의 이름은 함수를 참조하고 있다.


7.2 함수의 기본


7.3 함수와 메모리
    const sum = add; 하면 같은 함수 오브젝트를 가리킨다.
    만약 지정한 매개변수의 수만큼 함수에 전달하지 않으면 매개변수가 undefined로 설정된다.


7.4 반환이란?
    return을 명시적으로 하지 않으면 자동으로 undefined이 반환됨!
    return을 함수 중간에 하게 되면 함수가 종료됨
    사용예: 조건이 맞지 않는 경우 함수 도입부분에서 함수를 일찍이 종료함!


7.5 함수의 인자
    매개변수의 기본값은 무조건 undefined

    매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨**
    console.log(arguments); 하면 전달받은 것들이 출력된다. 
    arguments[0], arguments[1] ... 사용 가능.

    매개변수 기본값 Default Parameters 지정
    function add(a=1, b=1){

    }

    Rest 매개변수 Rest Parameters
    function sum(a, b, ...numbers) {
    console.log(a);
    console.log(b);
    console.log(numbers);   -> 배열
    }
    sum(1, 2, 3, 4, 5, 6, 7, 8);


7.6 함수 표현식
    함수 작성법 3가지.

    1. 함수 선언문 function name() { }
    2. 함수 표현식 const name = function () { }  *함수도 객체이기때문에 다른 변수에 할당이 가능.
    let add = function (a, b) {
    return a + b;
    };
    console.log(add(1, 2));

    함수이름이없음 = 무명함수. 

    3. 화살표 함수 const name = () => { }  *위보다 간결. function 생략가능.
    add = (a, b) => { return a + b;};
    add = (a, b) => a + b;  -> 바로 리턴, 즉 값만 리턴하는 경우 {} 생략 가능

    console.log(add(1, 2));


    생성자 함수 const object = new Function(); 뒤 객체편에서 다룸 

    IIFE (Immediately-Invoked Function Expressions)
    아래와 같이 함수를 ()로 묶으면 값으로 변환된다.
    (function run() {
    console.log('😍');
    })();
    함수를 정의하자마자 바로 호출.


7.7 콜백함수
    콜백함수 

    일급객체: 일반 객체처럼 모든 연산이 가능한것.
    -함수의 매개변수로 전달
    -함수의 반환값
    -할당 명령문
    -동일 비교 대상

    함수도 일급 객체이다. 즉 함수가 일반 객체처럼 모든 연산이 가능. **파이썬도 갖고있음

    고차함수
    인자로 함수를 받거나 (콜백함수) 함수를 반환하는 함수

    const add = (a, b) => a + b;
    const multiply = (a, b) => a * b;

    전달된 action은 콜백함수이다.
    전달될 당시에 함수를 바로 호출해서 반환된 값을 전달하는 것이 아니라
    함수를 가리키고 있는 함수의 레퍼런스(참조값)가 전달된다.
    그래서 함수는 고차함수안에서 필요한 순간에 호출이 나중에 됨
    function calculator(a, b, action) {
        if (a < 0 || b < 0) {
            return;
        }
        let result = action(a, b);
        console.log(result);
        return result;
    }

    calculator(1, 1, add);
    calculator(1, 2, multiply);


7.10 중요한 불변성에 대해

    함수내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 💩
    상태변경이 필요한 경우에는, 새로운 상태를(오브젝트, 값) 만들어서 반환해야 함 ✨
    원시값 - 값에 의한 복사
    객체값 - 참조에 의한 복사 (메모리주소)  -> 이 경우 문제 발생
    function display(num) {
        num = 5; ❌
        console.log(num);
    }
    const value = 4;
    display(value);
    console.log(value);

    function displayObj(obj) {
        obj.name = 'Bob'; ❌❌❌❌❌❌ 외부로 부터 주어진 인자(오브젝트)를 내부에서 변경 ❌
        console.log(obj);
    }
    const ellie = { name: 'Ellie' };
    displayObj(ellie);
    console.log(ellie);

    function changeName(obj) {
        return { ...obj, name: 'Bob' };
    }
    ->새로운 오브젝트를 만들고 기존의 오브젝트는 유지
    변경하는 전용 함수를 만들고, 반환시 새로운 오브젝트를 만들자.

