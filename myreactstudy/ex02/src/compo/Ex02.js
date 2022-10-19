import {useState} from 'react'

function Ex02 () {

    const [todoArray, setTodoArray] = useState([]);
    const [inputData, setInputData] = useState("");     // 입력한 값을 기억하다가 TodoArray이에 적용

    function getText(e){
        setInputData(e.target.value);
    }

    function setTodo(){
        // inputData에있는 값을 todoArray에추가
        // react에서 배열에 값을 추가할 때 -> push가 아니라 concoat을 사용한다!

        // 불변성 유지 : 상태값을 업데이트 할 때는 기존 상태를 그대로 두면서
        //               새로운 값으로 상태를 업데이트 해줘야함!
        setTodoArray(todoArray.concat(inputData))       //새로운 배열이 만들어짐
    }

    return (
        <>
            <h1>Todolist</h1>
            <input onChange={getText}></input>
            <button onClick={setTodo}>추가</button>
            {todoArray.map(function(data){
                return <h1>{data}</h1>
            })}
        </>
    )
}

export default Ex02;