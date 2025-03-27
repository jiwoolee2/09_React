import styled from "styled-components";

const FooterWrapper = styled.footer`
  position: fixed;
  width : 1000px;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #f8f8f8;
  padding: 15px 0;
  text-align: center;
  color: #555;
  font-size: 14px;
  border-top: 1px solid #ddd;
`;
const FooterText = styled.span`
  margin: 0 10px; /* 좌우 간격 */
  display: inline;
`;

const Footer = () => {
  const obj = {
    footerNum: "487-86-00763",
    footerWay: "서울특별시 마포구 독막로 000",
    footerPr : "이지우"
  };

  return (
    <FooterWrapper>
      <FooterText>사업자등록번호 : {obj.footerNum}</FooterText>
      <FooterText>오시는길 : {obj.footerWay}</FooterText>
      <FooterText>대표자 : {obj.footerPr}</FooterText>
    </FooterWrapper>
  );
};

export default Footer;
