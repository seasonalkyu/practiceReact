import React, {useState} from "react";
import styled, {css} from "styled-components";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Website() {
    const [tabStatus, setTabStatus] = useState("active");

    const handleTabClick = (e) => {

    }
    return <div>
      <Layout>
        <Wrapper>
          <ProfileChangeContainer>
            <Option>
                <Link to = {"/ProfileChange"} style={{ textDecoration: 'none', color: 'black' }}>
                <p> 프로필 편집 </p>
                </Link>
                <Link to = {"/PasswordChange"} style={{ textDecoration: 'none', color: 'black' }}>
                <p> 비밀번호 변경 </p>
                </Link>
                <Link to = {"/Website"} style={{ textDecoration: 'none', color: 'black' }}>
                <p> 웹 및 앱사이트 </p>
                </Link>
                <Link to = {"/EmailSettings"} style={{ textDecoration: 'none', color: 'black' }}>
                <p> 이메일 알림 </p>
                </Link>
                <Link to = {"/PushNotice"} style={{ textDecoration: 'none', color: 'black' }}>
                <p> 푸시 알림 </p>
                </Link>
                <Link to = {"/ContactManagement"} style={{ textDecoration: 'none', color: 'black' }}>
                <p> 연락처 관리 </p>
                </Link>
                <Link to = {"/Help"} style={{ textDecoration: 'none', color: 'black' }}>
                <p> 도움말 </p>
                </Link>
            </Option>
            <UserChange>
                <div>
                    <UserChangeTitleBox><h1>앱 및 웹사이트</h1></UserChangeTitleBox>
                    <UserChangeContentBox>
                        <UserChangeContentTab status="true">
                            <div
                                status={tabStatus}
                                onClick={handleTabClick}><span>활성</span></div>
                            <div><span>만료됨</span></div>
                            <div><span>삭제됨</span></div>
                        </UserChangeContentTab>
                        <div>회원님의 Instagram 계정에 연결한 앱과 웹사이트입니다. 이 앱과 웹사이트는 회원님의 공유하기로 선택한 비공개 정보에 액세스할 수 있습니다.</div>
                        <div>Instagram 계정에 액세스하도록 허용한 앱이 없습니다.</div>
                    </UserChangeContentBox>
                </div>
            </UserChange>
          </ProfileChangeContainer>
          <Footer />
        </Wrapper>
      </Layout>
    </div>
  };


  
  export default Website;



const Wrapper = styled.div`
  background-color: #fafafa;
  width: 100%;
  height: 100vh;
  padding: 10vh 0;
  margin: 0 auto;
`;

const ProfileChangeContainer = styled.div`
  margin: auto;
  margin-top: 50px;
  width: 65%;
  position: relative;
  display: flex;
  border: 1px solid lightgray;
  height: 800px;
  background-color: #ffffff;
  line-height: 300%;
  border-radius: 4px;
`;

const Option= styled.div`
  padding: 3.5px 0px 2px 30px;
  margin: -1px;
  font-size: 16.5px;
  width: 25%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: left;
  height: 800px;
  line-height: 310%;
`;

const UserChange= styled.div`
  padding: 0px 20px 0px 20px;
  margin: -1px;
  font-size: 16.5px;
  width: 75%;
  position: relative;
  border: 1px solid lightgray;
  height: 800px;
  line-height: 310%;
  flex-direction: column;
  border: 1px solid lightgray;
  height: 800px;
  line-height: 310%;

  dispaly:flex;
  flex-direction: column;

  &>div {
    width: 100%;
    height: 319px;

    display: flex;
    flex-direction: column;

    // border: 2px solid #000;
  }
`;

const UserChangeTitleBox= styled.div`
    height: 32px;
    margin-top: 68px;
    margin-left: 30px;

    line-height: 32px;
    // border: 1px solid #000;

    & h1 {
        font-size: 28px;
    }
`

const UserChangeContentBox= styled.div`
    height: 163px;
    padding: 23px 24px 35px 25px;

    //border: 1px solid #000;

    &>div {
        :last-child {
            color: rgba(var(--f52,142,142,142),1);
    }

`

const contentTabOn = css`
    color: #000;
`

const contentTabOff = css`

`

const UserChangeContentTab= styled.div`
    display:flex;

    ${props => props.status && contentTabOn}

    &>div {
        flex: 1;
        padding: 14px 0px;
        display: flex;
        justify-content: center;
        
        font-size: 16px;
        line-height: 16px;

        cursor: pointer;

        border-bottom: 1px solid #000;
    }

    &>div>span {
        display: inline-block;
        height: 18px;
    }
`
  