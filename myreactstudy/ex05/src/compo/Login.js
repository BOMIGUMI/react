import { useState } from "react";
import { useSelector } from "react-redux";
import {useSearchParams, useNavigate} from 'react-router-dom';
// useSearchParams : 주소값에 있는 쿼리스트링 데이터를 꺼내 올 수 있게 만들어줌
// useNavigate : 주소값을 입력받아 해당하는 주소로 페이지를 전환하는 기능


function Login(){

    const id = useSelector((state)=> state.id);
    const pw = useSelector((state)=> state.pw);
    // params :  이전 컴포넌트에서 보낸 쿼리스트링 데이터를 객체로 갖고있음
    // ex) id=Test&pw=123&nick=냉면
    const [Params, setParams] = useSearchParams();      // ParamsID :  쿼리스트링에대한 정보를 담고있음
  
    //const id = Params.get("id");  // get으로 저장된  id(쿼리스트링)를 가져오기
    //const pw = Params.get("pw");  // get으로 저장된  pw(쿼리스트링)를 가져오기
    //const nick = Params.get("nick");    // join에서 넘긴 nick

    // input된 id를 그때그때 가져오기 위함
    const [inputID, setinputID] = useState('');
    const [inputPW, setinputPW] = useState('');
    const [inputNick, setinputNick] = useState('');

    const nav = useNavigate();

    function tryLogin () {
        if(id == inputID && pw == inputPW){
            // 로그인 성공
            console.log("성공!")
            // nav 변수에 주소를 넘겨주기
         nav("/Home");   
        }

        else {
            // 로그인 실패
            console.log("실패!")
        }
    }


    return (
        <>
            <h1>Login 페이지</h1>
            {/* 로그인 무조건 성공! */}
            <form action={"/Home"}>  {/* param으로 가져온 nick이라는 데이터 */}
            <br></br>
            ID : <input  placeholder='아이디 입력' onChange={(e)=>setinputID(e.target.value)}></input>
            <br></br>
            PW : <input  placeholder='비밀번호 입력' onChange={(e)=>setinputPW(e.target.value)}></input>
            <br></br>
            {/* <input value={nick} style={{display:"none"}} name="nick"></input> */}
            <button onClick={tryLogin}>로그인 시도</button>
            </form>
        </>
    

    )

}
export default Login;