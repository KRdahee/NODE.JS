if (true){
    var x = 3;
}
console.log(x); //3

if(true){
    const y = 3;
}
console.log(y); //Uncaught ReferenceError : y is not defined

/*
x는 정상적으로 출력 but y는 에러 발생, var을 const로 바꿨을 뿐인데 차이가 발생함.

var은 함수 스코프를 가지므로 if문의 블록과 관계없이 접근할 수 있습니다. 

BUT! const와 let은 블록 스코프를 가지므로 블록 밖에서는 변수에 접근 불가.
*/