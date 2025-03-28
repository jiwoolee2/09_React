import {useLocation,  useParams} from "react-router-dom";
import {useEffect,useState} from "react";
import axios from "axios";
import { StyledWrap,StyledTitle, StyledMoreButton } from "../Foods.styles";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import CommentList from "../Comments/CommentList";

const StyledMainImg = styled.img`
  width : 95%;
  height : 500px;
`;

const StyledDescription = styled.div`
  font-size : 17px;
  font-weight : bold;
  margin : 20px 0px;
`;

const StyledOther = styled.div`
  font-size : 18px;
  text-align : center;
  margin : 15px 0px;
`;

const StyledMap = styled.div`
  width : 50%;
  height : 600px;
  margin : auto;
  border : 1px solid black;
  border-radius: 15px;
  box-sizing : border-box;
`
const FoodDetail = () => {
 /*  const location = useLocation();
  console.log(location.state); */



  const {id} = useParams();
  const [ load, isLoad ] = useState(false);

  //alert(id);
  const [food, setFood] = useState({
    title : "",
    img : "",
    description : "",
    usageTime : "",
    address : "",
    lat : "",
    lng : "",
  });
  const [content,setContent] = useState("");
  const navi = useNavigate();
  const [success,isSuccess] = useState(true);

  useEffect(()=>{

    axios.get(`http://localhost/busans/${id}`)
         .then((result)=>{
            //console.log(result);
            const response = result.data.getFoodKr.item[0];
            console.log(response)
            
            setFood({
              title : response.MAIN_TITLE,
              img : response.MAIN_IMG_NORMAL,
              description : response.ITEMCNTNTS,
              usageTime : response.USAGE_DAY_WEEK_AND_TIME,
              address : response.ADDR1,
              lat : response.LAT,
              lng : response.LNG,
              // 1 MAIN_TITLE : 가게이름
              // 2 MAIN_IMG_NORMAL : 메인사진
              // 3 ITEMCNTNS : 소개글
              // 4 USAGE_DAY_WEEK_AND_TIME : 운영시간
              // 5 ADDR1 : 주소
              // 6 LAT   : 위도
              // 7 LNG   : 경도
            })
            isLoad(true);
          
          if(food.lat){
              var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
                  mapOption = { 
                      center: new window.kakao.maps.LatLng(response.LAT, response.LNG), // 지도의 중심좌표
                      level: 3 // 지도의 확대 레벨
                  };

              var map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

              // 마커가 표시될 위치입니다 
              var markerPosition  = new window.kakao.maps.LatLng(response.LAT, response.LNG); 

              // 마커를 생성합니다
              var marker = new window.kakao.maps.Marker({
                  position: markerPosition
              });

              // 마커가 지도 위에 표시되도록 설정합니다
              marker.setMap(map);  
            }
          });
          //이 useEffect는 food.lat 또는 load가 변경될 때마다 실행됨
          //즉, food.lat이 바뀌거나, load가 false → true로 바뀌면 useEffect 내부 로직이 다시 실행
  },[food.lat,load]);

const submitHandler = (e) =>{
  e.preventDefault();

  if(content.trim() === ''){
    alert("내용을 입력해주세요!");
    return;
  }
  /* 
    정규표현식 활용~~
  */
  // 댓글 내용을 서버로 보내서 DB에 저장
  axios.post(`http://localhost/busans/comments`,{
    seq : id,
    content : content,
  }).then((result) => {
    console.log(result);
    setContent("");
    isSuccess(!success);
  });
};

// input요소의 value를 content state에 집어넣는 이벤트 핸들러
const contentHandler = e => {
  setContent(e.target.value);
}


  if(!load){
    return (

    
      <StyledWrap>
        <StyledTitle>음식점을 조회 중입니다...</StyledTitle>
      </StyledWrap>
      )
  }

 

  return (
    <> 
      <StyledWrap>
        <StyledTitle>{food.title}</StyledTitle>
        <StyledMainImg src={food.img}/>
        <StyledDescription>{food.description}</StyledDescription>
        <StyledOther>{food.address}</StyledOther>
        <StyledOther>{food.usageTime}</StyledOther>
        <StyledMap id="map"></StyledMap>
        <StyledMoreButton onClick={() => navi(-1)}>뒤로가기</StyledMoreButton>
      </StyledWrap>
      <div style={{width:"80%",margin:"auto",height:"600px"}}>
        <form onSubmit={submitHandler}>
          <input onChange={contentHandler} type="text" placeholder="후기를 남겨주세요"/>
          <button>후기 남기기!!</button>
        </form>
      </div>
      <CommentList id={id} success={success} />
    </>
    )
    

};
export default FoodDetail;