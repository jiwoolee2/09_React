import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const NavbarWrapper = styled.nav`
  position: fixed;
  top: 50px; 
  left: 0;
  width: 100%;
  background-color: #e9ecef;
  padding: 10px 0;
  text-align: center;
  color: #333;
  font-size: 15px;
  border-bottom: 1px solid #ccc;
  z-index: 999; 
`;

const NavbarText = styled.a`
  margin: 0 15px;
  cursor: pointer;
  transition: color 0.2s;
  color: inherit;

  &:hover {
    color: #ffa600;
  }
`;


const Navbar = () => {
  const navi = useNavigate();
  return (
    <NavbarWrapper>
      <NavbarText onClick={()=>navi("/")}>Home</NavbarText>
      <NavbarText onClick={()=>navi("/chap01")}>Chap01</NavbarText>
      <NavbarText onClick={()=>navi("/chap02")}>Chap02</NavbarText>
      <NavbarText onClick={()=>navi("/chap03")}>Chap03</NavbarText>
      <NavbarText onClick={()=>navi("/memo")}>오후실습</NavbarText>
      <NavbarText onClick={()=>navi("/foods")}>부산맛집보기</NavbarText>
      <NavbarText onClick={()=>navi("/matGyp")}>경기도맛집보기</NavbarText>
      <NavbarText onClick={()=>navi("/")}>내일실습</NavbarText>
      <NavbarText onClick={()=>navi("/")}>지도보기</NavbarText>
      
    </NavbarWrapper>
  );
};

export default Navbar;
