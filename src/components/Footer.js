import React from "react";
import styled from "styled-components";

const FooterStyle = styled.div`
    width: 100%;
    height: 80px;
    padding: 0px 16px;
    @media (max-width: 850px) {
        height: 105px;
    }
    margin-bottom: auto;
    text-align: center;
    background-color: #fafafa;
    line-height: 20px;
    margin-top: 20px;
`;

const FooterItem = styled.div`
    display: inline-block;
    margin: 0 8px 12px 8px;
    font-size : 12.1px;
    color: gray;
    cursor: pointer;
`

function Footer() {
    return ( <FooterStyle>
        <FooterItem>Meta</FooterItem>
        <FooterItem>소개</FooterItem>
        <FooterItem>블로그</FooterItem>
        <FooterItem>채용</FooterItem>
        <FooterItem>정보</FooterItem>
        <FooterItem>도움말</FooterItem>
        <FooterItem>API</FooterItem>
        <FooterItem>개인정보처리방침</FooterItem>
        <FooterItem>약관</FooterItem>
        <FooterItem>인기 계정</FooterItem>
        <FooterItem>해시태그</FooterItem>
        <FooterItem>위치</FooterItem>
        <FooterItem>Instagram Lite</FooterItem>
        <FooterItem>연락처 업로드 & 비사용자</FooterItem>
        <br/>
        <FooterItem>한국어</FooterItem>
        <FooterItem style={{cursor: "text"}}>© 2022 Instagram from Meta</FooterItem>
    </FooterStyle>);
}

export default Footer;