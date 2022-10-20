import {useEffect, useState} from 'react'

function Ex01(){
    const [data, setData] = useState(0);
    const [data1, setData1] = useState(0);
    // useEffect : 렌더링 되자마자 이것부터 실행해 주세요!
    // -->  상태값이 바뀔때(다시 렌더링 된다)마다 다시 실행시킴

    useEffect(function(){       
        console.log("Test")
    }, [data])      // console창에서 data1이아닌 data의 상태값만 변화시켰을 때 Test가 뜸


    function add(){
        setData(data+1);
    }
    function minus(){
        setData(data-1);
    }

    function add1(){
        setData1(data1+1);
    }

    function minus1(){
        setData1(data1-1);
    }

    return(
        <>
            <h1>useEffect 첫번째</h1>
            <button onClick={add}>+</button>
            <span>{data}</span>
            <button onClick={minus}>-</button>
            <br></br>
            <button onClick={add1}>+</button>
            <span>{data1}</span>
            <button onClick={minus1}>-</button>
            
        </>
    )
}

export default Ex01;