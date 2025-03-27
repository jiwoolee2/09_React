/* -- useState 활용해보기 */
import {useState} from "react";
import styled from "styled-components"

const StyledTitle = styled.h1`
  font-size : 40px;
  color : lightpink;
`;

const StyledMemo = styled.div`
  width : 300px;
  height : 160px;
  margin : 20px;
  padding : 7px;
  background-color : lightyellow;
  border : 1px solid yellow;
  border-radius: 2px;
  box-shadow: 0px 0px 1px 2px black;
  display : inline-block;
`
const StyledContent = styled.div`
  width : 90%;
  height : 60%;
  margin : auto;
  padding:7px;
  font-size: 19px;
  text-align: center;
`

const StyledWriter = styled.div`
  width : 90%;
  height : 20%;
  font-weight : bold;
  text-align: right;
  margin: auto;
`

const StyledWrap = styled.div`
  width : 1000px;
  height : 1500px;
  margin : 100px 0;
  border : 1px solid black;
  border-radius : 12px;
  padding : 25px;
`;

/* hr 태그 */
const StyledHr = styled.div`
  border : 1px solid black;
  margin : 50px 0px;
  width : 100%;
`


const Memo = () => {
  // AJAX요청을 잘 보내서 응답을 받았다는 가정하에 메모들이 반환됨(DB Table에서 조회됨)
  const [memos,setMemos] = useState([
    {
      writer : '짱구',
      content : "자자자 일어납시다!!",
    },
    {
      writer : '철수',
      content : "점심 뭐먹음???!",
    },
    {
      writer : '영수',
      content : "11111!!",
    },
    {
      writer : '영구',
      content : "1ㅇㅎㄹㅇ!",
    }]
  );
  const [content,setContent] = useState("");
  const [writer,setWriter] = useState("");
  // state : 컴포넌트에서 사용할 변수
  // state의 변화가 일어나면 컴포넌트가 재렌더링
  // useState() => [value,setValue] == value 인자로 전달한 초기값의 식별자
  //                                == setValue value를 변강할 수 있는 setter
  const inputContentHandler = (e) => {
    setContent(e.target.value);
  };

  const inputWriterHandler = (e) => {
    setWriter(e.target.value);
  };

  // 추가하기 버튼 클릭 시 memoState에 새롭게 요소를 추가할 핸들러
  // 핸들러를 통해 input에 있는 내용이 writer,content에 들어가면
  // memo에 담아서 memos배열에 추가
  const addMemo = () => {
    const memo = { writer : writer,content : content}; 

    // setState를 이용해서 memo state를 변경
    // 기존 memos 배열을 펼쳐서 복사 (spread 문법)
    // [기존 메모들..., 새 메모] 형태의 새 배열이 만들어짐 -> 재렌더링됨
    setMemos([...memos,memo]);

    setContent("");
    setWriter("");
  };

  return (
    <>
      <StyledWrap>
        <StyledTitle>메모 작성해보기</StyledTitle>
        <StyledHr></StyledHr>
        {
          memos ? (
          memos.map((memo,i) => (
            <StyledMemo key={i}>
              <StyledContent>{memo.content}</StyledContent>
              <StyledWriter>{memo.writer}</StyledWriter>
            </StyledMemo>

          ))
        ) : (
          <h2>메모가 존재하지 않습니다</h2>
        )};

        <StyledHr/>
        <div>
          <h4>내용을 입력해주세요!</h4>
          {/* 값을 입력했을 때 inputHandeler를 호출하여
            Writer와 Content에 값을 대입*/}
          <input type="text" onChange={inputContentHandler} value={content}/>
          <br />
        </div>
        <div>
          <h4>작성자를 입력해주세요</h4>
          <input type="text"onChange={inputWriterHandler} value={writer}/>
          <br />
        </div>
        <button onClick={addMemo}>메모추가하기</button>

      </StyledWrap>
      <h3></h3>





    </>
  );
};
export default Memo;