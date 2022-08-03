import React from 'react';
import styled from "styled-components";

const FooterStyle = styled.div`
 text-align: center;

 background-color:  #ffffff;
`;

function Footer() {
    return <div>
    <FooterStyle>
      Meta 소개 블로그 채용 정보 도움말 API 개인정보처리방침 약관 인기 계정 해시태그 위치 Instagram Lite 연락처 업로드 & 비사용자
    </FooterStyle>
    </div>
  };

export default Footer;
