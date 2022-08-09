import React, {useState} from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Website() {
    const [tabStatus, setTabStatus] = useState("active");

    const handleTabClick = (e) => {
  // pageSelection을 posts로 바꾼다
  if(e.target.textContent === "활성")
  setTabStatus("active");
else if(e.target.textContent === "만료됨")
  setTabStatus("expired");
else if(e.target.textContent === "삭제됨")
  setTabStatus("deleted");
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
                        <UserChangeContentTab status={tabStatus}>
                          <div
                            status={tabStatus}
                            onClick={handleTabClick}><span>활성</span></div>
                          <div status={tabStatus}
                            onClick={handleTabClick}><span>만료됨</span></div>
                           <div status={tabStatus}
                            onClick={handleTabClick}><span>삭제됨</span></div>
                        
                      </UserChangeContentTab> 
                      {
                          ((tabStatus === "active")
                          && ( <>
                            <div>
                              회원님의 Instagram 계정에 연결한 앱과 웹사이트입니다. 이 앱과 웹사이트는 회원님의 공유하기로 선택한 비공개 정보에 액세스할 수 있습니다.
                            </div>
                            <div>Instagram 계정에 액세스하도록 허용한 앱이 없습니다.</div>
                          </>))
                          || ( 
                        (tabStatus === "expired")
                        && <>
                        <div>회원님이 Instagram 계정에 연결했지만 최근 90일 동안 사용하지 않은 앱과 웹사이트입니다. 이 앱과 웹사이트는 회원님의 비공개 정보에 더 이상 액세스할 수 없지만 활성 상태일 때 회원님이 공유한 정보는 계속 보유할 수 있습니다. '비공개' 정보는 회원님이 Instagram 계정으로 로그인할 때 공유하도록 선택한 경우에만 앱에서 액세스할 수 있는 정보(예: 이메일 주소)를 의미합니다.</div>
                        <div>Instagram 계정에 대한 액세스 권한을 보유한 앱 중 만료된 앱이 없습니다.</div>
                        </>)
                        || (
                        (tabStatus === "deleted")
                        && <>
                        <div>회원님의 Instagram 계정에 더 이상 연결되어 있지 않은 앱과 웹사이트입니다. 이 앱과 웹사이트는 회원님의 비공개 정보에 더 이상 액세스할 수 없지만 활성 상태일 때 회원님이 공유한 정보는 계속 보유할 수 있습니다. '비공개' 정보는 회원님이 Instagram 계정으로 로그인할 때 공유하도록 선택한 경우에만 앱에서 액세스할 수 있는 정보(예: 이메일 주소)를 의미합니다. 앱에 회원님의 정보 삭제를 요청할 수 있습니다. 정보 삭제를 요청하려면 해당 앱의 개인정보처리방침에 명시된 자세한 내용과 연락처 정보를 검토하세요. 앱에 연락하는 경우 사용자 ID가 필요할 수 있습니다.</div>
                        <div>Instagram 계정에 대한 액세스 권한을 보유한 앱 중 삭제된 앱이 없습니다.</div>
                        </>)}
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
    line-height: 150%;
    &>div {
      margin-top: 20px;
        :last-child {
            color: rgba(var(--f52,142,142,142),1);
    }

`


const UserChangeContentTab= styled.div`
    display:flex;


    &>div {
        flex: 1;
        padding: 14px 0px;
        display: flex;
        justify-content: center;
        
        font-size: 16px;
        line-height: 16px;

        cursor: pointer;

        border-bottom: 1px solid rgba(var(--f52,142,142,142),1);
    }

    &>div>span {
        display: inline-block;
        height: 18px;
    }
`
  