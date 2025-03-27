import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
  position: fixed;
  top: 100px;
`;

const Styledx = styled.div`
  
`
const Styledy = styled.div`
  
`

/* 
  1. 출력할 데이터를 넣을 컴포넌트 생성
  2. url을 입력해서 경기도 맛집 데이터를  모두 얻어옴
  3. state종류3개 -> useState,useEffect,useNavigate
      내용을 state를 이용해서 저장
*/

const MatGyp = ()=>{

  const [pageNo,setPage] = useState(2);
  const [ResName, setResName] = useState(""); // 음식점 이름
  const [ResData, setResData] = useState([]); // 음식점 정보를 담을 배열
  const [xyplace, xplaceset] = useState([]); // 위치를 저장할 배열
  const [hasMore, setHasMore] = useState(true); // 더 불러올 게시글이 있는지 없는지


  useEffect(()=>{

    axios.get(`http://localhost/spring/matGyp?pageNo=${pageNo}`)
          .then(result=>{  // 서버 갔다온 후 실행할 내용
          //console.log(result.data);
          const returnData = result.data;
          setResData([...ResData,...returnData]); // 음식점의 정보를 담은 배열
          });
  },[pageNo]); // pageNo이 바뀔 때마다 useEffect

  /* 버튼을 누르면 페이지 +1=> setFoods를 통해 foods 배열에 추가 */
  const clickToButtonHandler = () =>{
    setPage((pageNo) => pageNo+1);
  };

  return (
    <>

      <StyledTitle>경기도 맛집 보기!!~~</StyledTitle>
          <div>
            {ResData.map((e,i) => (
              <div key = {i}>
              <StyledTitle>{e.RESTRT_NM}</StyledTitle>
              <Styledx>{e.REFINE_WGS84_LOGT}</Styledx>
              <Styledy>{e.REFINE_WGS84_LAT}</Styledy>
          </div>
        ))}


      </div>
      <div></div>
      <div></div>

      {hasMore && ( // hasMore가 true인 경우에만
      <button onClick={clickToButtonHandler}>더보기</button>)}
    </>
  );
};
export default MatGyp;