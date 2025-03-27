import {useState , useEffect} from "react";

const Chapter03B = ()=>{

  const [count,setCount] = useState(0);
  const [message,setMessage] = useState("메시지당");

  const onClickButton = ()=>{
    setCount((count) => count-1);
  };

  // 화면을 출력하는 것 이외의 sideEffect들은 useEffect에 넣어서 관리
  useEffect(()=>{
    alert(-count+"번 클릭!")
  },[count]);  // 배열 내의 value가 바뀔 때마다 useEffect 수행

  /* 첫 렌더링(MOUNT)과 재렌더링(UPDATE) 시점에 무언가 수행하고 싶다면 useEffect Hook사용
      두가지 인자 전달 가능
      빈 배열 [] => 첫 렌더링 시점에만 수행하고 싶다.
      빈 배열 아님 [state,state,state] => 각각의 state가 set될 때마다 수행하겠다.

      Hook 사용 시 주의사항
      - 블록 최상위에서만 Hook을 호출할 수 있음(반복, 조건, 함수내부에서 호출할 수 없음)
      - React 함수 컴포넌트 내부에서만 사용 가능(클래스 컴포넌트에서는 사용할 수 없음)
  */



  return (
    <>
      <h3>{count}</h3>
      <h3></h3>
      <h3>
        <button onClick={onClickButton}>감소버튼</button>
      </h3>  
    </>
  );
};
export default Chapter03B;