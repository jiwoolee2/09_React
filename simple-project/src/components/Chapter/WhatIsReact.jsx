const WhatIsReact = () => {
  return (
    <>
     <h1>리액트란??????</h1>
    
    <pre>
      U.I(User Interfae)를 구현하기 위한 JavaScript Library
      <br />
      코드의 단위를 Component로 구분하여 Component를 조합하여 복잡한 U.I를
      구성할 수 있음 // Componet란 코드를 만들때 사용하는 부품
      <br />
      SPA(Single Page Application)을 구현하기 위한 도구로 사용됨!
      <br />
      <strong>
        화면을 예쁘게 만드는 것과 React는 전혀 연관이 없음.
        예쁘게 만드는 것은 CSS의 역할
      </strong>
      <br />
      리액트를 구동하기 위해서는 node.js라는 JavaScript라는 Runtime을 설치
      <br />
      NPM(Node Package Manager)라는 패키지 매니저 + JSX(Babel)문법을 활용가능
    </pre>
    </> // 여러개의 리액트 element들을 하나의 컴포넌트로 만들어서 반환
    );
  };

  export default WhatIsReact;
