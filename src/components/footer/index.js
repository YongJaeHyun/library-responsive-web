import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  height: 100%;
  border-top: 4px solid #c8c8c8;
`;

const InfoUl = styled.ul`
  display: block;
  padding: 10px;
`;

const CopyrightUl = styled(InfoUl)`
  width: 80%;
  border-top: 1px solid #c8c8c8;
  margin: 0 auto;
`;

const Li = styled.li`
  display: flex;
  justify-content: center;
`;

const Info = styled(Link)`
  padding: 0.4rem;
  font-size: 0.7rem;
`;

const Copyright = styled.p`
  font-size: 0.7rem;
  font-weight: 600;
  color: #4d5156;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <InfoUl>
        <Li>
          <Info to="/">회사소개</Info>
          <Info to="/">인재채용</Info>
          <Info to="/">원고접수</Info>
          <Info to="/">제휴문의</Info>
          <Info to="/">고객센터</Info>
          <Info to="/">개인정보취급방침</Info>
          <Info to="/">이용약관</Info>
        </Li>
      </InfoUl>
      <CopyrightUl>
        <Li>
          <Copyright>Copyright &copy; YongjaeHyun. All Rights Reserved.</Copyright>
        </Li>
      </CopyrightUl>
    </FooterContainer>
  );
};

export default Footer;
