  /* 화면상에 재사용할 컴포넌트 생성  */
  const FirstComponent = () => { // 첫 글자는 무조건 대문자!!
    return (
    <>
      <h3>컴포넌트</h3>
      <div>함수형 컴포넌트 예제입니다.</div>
    </> // 여러개의 리액트 element들을 하나의 컴포넌트로 만들어서 반환
    );
  };

  export default FirstComponent;
  // export할 수 있는 개수 - 1개