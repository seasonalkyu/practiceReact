import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Footer from "../components/Footer.js"
import { Link } from "react-router-dom";
import EmailSettingsContainer from '../components/EmailSettingsContainer';

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
  display: right;
  flex-direction: column;
  border: 1px solid lightgray;
  height: 800px;
  line-height: 310%;
`;



function EmailSettings() {
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
                <Link to = {"/Profile"} style={{ textDecoration: 'none', color: 'black' }}>
                <p> 웹 및 앱사이트 </p>
                </Link>
                <Link to = {"/EmailSettings"} style={{ textDecoration: 'none', color: 'black' }}>
                <p> 이메일 알림 </p>
                </Link>
            </Option>
            <UserChange>
                <EmailSettingsContainer></EmailSettingsContainer>
            </UserChange>
          </ProfileChangeContainer>
          <Footer/>
        </Wrapper>
      </Layout>
    </div>
  };


  
  export default EmailSettings;
  