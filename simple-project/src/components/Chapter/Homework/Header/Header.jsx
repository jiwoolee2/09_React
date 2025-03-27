import styled from "styled-components";

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #f8f8f8;
  padding: 15px 0;
  text-align: right;
  color: #555;
  font-size: 14px;
  border-bottom: 1px solid #ddd;
  z-index: 1000; 
`;

const HeaderText = styled.a`
  margin: 0 10px; 
  cursor: pointer;
  display: inline;
  color: inherit;
`;

const Header = () => {
  
  return (
    <HeaderWrapper>
      <HeaderText href="">Login</HeaderText>
      <HeaderText href="">Logout</HeaderText>
      <HeaderText href="">Signup</HeaderText>
      <HeaderText href="">Mypage</HeaderText>
    </HeaderWrapper>
  );
};

export default Header;
