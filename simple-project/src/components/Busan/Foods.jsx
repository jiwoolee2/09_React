import styled from "styled-components"
import {useState,useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

const StyledWrap = styled.div`
  width : 1200px;
  height : auto;
  min-height : 1200px;
  margin : auto;
  margin-top : 30px;
  margin-bottom : 30px;
  border : 1px solid red;
  box-shadow: 0px 0px 0px 1px black;
`;

const StyledTitle = styled.h1`
  font-size : 60px;
  font-weight : 800;
  color : skyblue;
  text-align : center;
  margin : 45px 0px;
`;

const StyledInnerWrap = styled.div`
  width : 1100px;
  margin : auto;
  height : auto;
  min-height : 600px;
  padding : 12px;
  border : 1px solid rgba(0,0,0,0.1);
  border-radius: 10;
`;

const StyledCard = styled.div`
  width : 330px;
  height : 250px;
  margin : 9px 9px;
  padding : 5px;
  box-shadow : 1px 1px 1px rgba(0,0,0,0.2);
  display : inline-block;

  &:hover{
    cursor : pointer;
    box-shadow : 1px 1px 1px 1px rgba(0,0,0,0.4);
    opacity : 0.9;
  }
`;

const StyledImage = styled.img`
  width : 330px;
  height : 180px;
`;

const StyledStoreName = styled.h3`
  font-weight : bold;
  text-align : center;
  font-size : 17px;
  margin : 0px;
  margin-top: 12px;
`;

const StyledMoreButton = styled.button`
  width : 150px;
  height : 80px;
  line-height: 80px;
  text-align: center;
  margin : auto;
  border-radius: 22px;
  background: lightpink;
  color : white;
  font-weight : 900;
  border : 2px dotted lightpink;
  margin-top : 15px;
`;

const Foods = () => {

  const [pageNo, setPageNo] = useState(1);
  const [foods, setFoods] = useState([]); // 음식테이블을 저장할 배열
  const [hasMore, setHasMore] = useState(true); // 더 불러올 게시글이 있는지 없는지

  const navi = useNavigate();
  /* DB에서 결과 조회해서 가져옴 */
  useEffect(()=>{

    /* fetch(`http://localhost/spring/busans?pageNo=${pageNo}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error("문제발생",err))
     */

/*     axios({
      url : `http://localhost/spring/busans?pageNo=${pageNo}`,
      method : "get",
    
    }).then((result) => console.log(result)); */

    axios.get(`http://localhost/spring/busans?pageNo=${pageNo}`)
         .then(result => {
          // console.log("결과잘오나~~");
          // console.log(result);

          /* data-> getFoodKr->item 객체 조회*/
          const response = result.data.getFoodKr.item;
          // console.log(response);

          // 음식 배열에 item안의 값들(result로 받은 데이터) 추가
          setFoods([...foods, ...response]);
          if(response.length < 9){
            setHasMore(false);
          }
         });

  },[pageNo]); // pageNo가 바뀔 때마다 데이터를 요청 

  
  /* 버튼을 누르면 페이지 +1=> setFoods를 통해 foods 배열에 추가 */
  const clickToButtonHandler = () =>{
    setPageNo((pageNo) => pageNo+1);
  };

  return (
    <>
      <StyledWrap>
        <StyledTitle>뷰샨의 맛집 둘러뵤기</StyledTitle>
        <StyledInnerWrap>
              {foods.length === 0 ? (
                <h3>음식점 몰록을 불러오는 중입니다.</h3>
              ) : (
                foods.map((e) => (
                  <StyledCard key={e.UC_SEQ} onClick = {() => navi(`/foods/${e.UC_SEQ}`,
                    /* {state  :s {e},} */
                  )}>
                    <StyledImage src={e.MAIN_IMG_THUMB}/>
                    <br />
                    <StyledStoreName>{e.MAIN_TITLE}</StyledStoreName>
                  </StyledCard>
                 ))
            )}
        </StyledInnerWrap>
        {hasMore && ( // hasMore가 true인 경우에만
        <StyledMoreButton onClick={clickToButtonHandler}>더보기</StyledMoreButton>)}
      </StyledWrap>
    </>
  );
};
export default Foods;