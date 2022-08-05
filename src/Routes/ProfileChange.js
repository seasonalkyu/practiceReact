import React, {useState} from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Footer from "../components/Footer.js"

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
  height: 805px;
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



function ProfileChange() {
    const [userName, setUserName] = useState("박찬규");
    const [userId, setUserId] = useState("chankyu012");
    const [userWebSite, setUserWebSite] = useState("웹사이트");
    const [userDesc, setUserDesc] = useState("소개");
    const [userEmail, setUserEmail] = useState("ppp@naver.com");
    const [userPhoneNumber, setUserPhoneNumber] = useState("+82 10-0101-2323");
    const [userSex, setUserSex] = useState("밝히고 싶지 않음");
    const [userRecommend, setUserRecommend] = useState(true);

    const handleNameChange = (e) => {
        setUserName(e.target.value);
    };

    const handleIdChange = (e) => {
        setUserId(e.target.value);
    };
    const handleWebSiteChange = (e) => {
        setUserWebSite(e.target.value);
    };
    const handleDescChange = (e) => {
        setUserDesc(e.target.value);
    };
    const handleEmailChange = (e) => {
        setUserEmail(e.target.value);
    };
    const handlePhoneNumberChange = (e) => {
        setUserPhoneNumber(e.target.value);
    };


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
                <UserChangeContainer>
                    <UserProfileBox>
                        <div><UserImg /></div>
                        <div style={{flexGrow: "1", lineHeight: "25px"}}>
                            <h2 style={{height: "22px", marginBottom: "2px", fontSize: "20px"}}>{userId}</h2>
                            <div style={{lineHeight: "0px"}}><ChangeImgButton>프로필 사진 바꾸기</ChangeImgButton></div>
                        </div>
                    </UserProfileBox>
                    <UserChangeBox>
                        {/* 이름 */}
                        <UserChangeSubBox style={{height: "120px"}}>
                            <ChangeClass><label style={{position: "absolute", top: "-15px", right: "25px"}}>이름</label></ChangeClass>
                            <ChangeInputBox>
                                <ChangeInput value={userName} onChange={handleNameChange}/>
                                <div style={{height:"50%", position:"absolute", top:"40px"}}>
                                    <ChangeDesc style={{height: "48px", lineHeight:"120%"}}>사람들이 이름, 별명 또는 비즈니스 이름 등 회원님의 알려진 이름을 사용하여 회원님의 계정을 찾을 수 있도록 도와주세요.</ChangeDesc>
                                    <ChangeDesc style={{height:"16px", lineHeight:"120%"}}>이름은 14일 안에 두 번만 변경할 수 있습니다.</ChangeDesc>
                                </div>
                            </ChangeInputBox>
                        </UserChangeSubBox>
                        {/* 사용자 아이디 */}
                        <UserChangeSubBox style={{height: "104px"}}>
                            <ChangeClass><label style={{position: "absolute", top: "-15px", right: "25px"}}>사용자 이름</label></ChangeClass>
                            <ChangeInputBox>
                                <ChangeInput value={userId} onChange={handleIdChange}/>
                                <div style={{height:"50%", position:"absolute", top:"40px"}}>
                                <ChangeDesc style={{height:"48px", lineHeight:"120%"}}>대부분의 경우 이후 14일 동안 사용자 이름을 다시 {userId}(으)로 변경할 수 있습니다. 더 알아보기</ChangeDesc>
                                </div>
                            </ChangeInputBox>
                        </UserChangeSubBox>
                        {/* 웹사이트 */}
                        <UserChangeSubBox style={{height: "25px"}}>
                            <ChangeClass><label style={{position: "absolute", top: "-15px", right: "25px"}}>웹사이트</label></ChangeClass>
                            <ChangeInputBox><ChangeInput 
                                value={userWebSite}
                                onChange={handleWebSiteChange}/>
                            </ChangeInputBox>
                        </UserChangeSubBox>
                        {/* 소개 */}
                        <UserChangeSubBox style={{height: "52px"}}>
                            <ChangeClass><label style={{position: "absolute", top: "-15px", right: "25px"}}>소개</label></ChangeClass>
                            <ChangeInputBox><ChangeInput 
                                value={userDesc}
                                style={{height:"50px"}}
                                onChange={handleDescChange}/>
                            </ChangeInputBox>
                        </UserChangeSubBox>

                        <UserChangeSubBox style={{height: "74px"}}>
                            <ChangeClass></ChangeClass>
                            <ChangeInputBox>
                                <h2 style={{lineHeight:"120%",height:"18px",marginTop:"10px",fontSize: "14px",fontWeight:"700",color: "rgba(0, 0, 0, 0.45)"}}>개인정보</h2>
                                <ChangeDesc style={{height: "48px",lineHeight:"120%"}}>비즈니스나 반려동물 등에 사용된 계정인 경우에도 회원님의 개인정보를 입력하세요. 공개 프로필에는 포함되지 않습니다.</ChangeDesc>
                            </ChangeInputBox>
                        </UserChangeSubBox>
                        {/* 이메일 */}
                        <UserChangeSubBox style={{height: "25px"}}>
                            <ChangeClass><label style={{position: "absolute", top: "-15px", right: "25px"}}>이메일</label></ChangeClass>
                            <ChangeInputBox><ChangeInput 
                                value={userEmail}
                                onChange={handleEmailChange}/>
                            </ChangeInputBox>
                        </UserChangeSubBox>
                        {/* 전화번호 */}
                        <UserChangeSubBox style={{height: "25px"}}>
                            <ChangeClass><label style={{position: "absolute", top: "-15px", right: "25px"}}>전화번호</label></ChangeClass>
                            <ChangeInputBox><ChangeInput 
                                value={userPhoneNumber}
                                onChange={handlePhoneNumberChange} /></ChangeInputBox>
                        </UserChangeSubBox>
                        {/* 성별 */}
                        <UserChangeSubBox style={{height: "44px", marginBottom: "0"}}>
                            <ChangeClass><label style={{position: "absolute", top: "-15px", right: "25px"}}>성별</label></ChangeClass>
                            <ChangeInputBox><ChangeInput 
                                value={userSex}/></ChangeInputBox>
                        </UserChangeSubBox>
                        
                        <UserChangeSubBox style={{height: "54px"}}>
                            <ChangeClass style={{paddingLeft:"2px"}}><label style={{position: "absolute", top: "-15px", right: "25px"}}>비슷한 계정 추천</label></ChangeClass>
                            <div style={{display:"flex", flexGrow:"1"}}>
                                <div>ㅁ</div>
                                <div style={{width:"190px",fontSize:"14px",fontWeight:"600",lineHeight:"120%"}}>팔로우할 만한 비슷한 계정을 추천할 때 회원님의 계정을 포함합니다.[?]</div>
                            </div>
                        </UserChangeSubBox>
                        <UserChangeSubBox style={{height: "40px"}}>
                            <ChangeClass></ChangeClass>
                            <button>제출</button>
                        </UserChangeSubBox>
                    </UserChangeBox>
                </UserChangeContainer>
            </UserChange>
         </ProfileChangeContainer>
         <Footer/>
      </Wrapper>
    </Layout>
    </div>;
  }

export default ProfileChange;

const UserChange= styled.div`
  padding: 5px 20px 0px 20px;
  margin: -1px;
  font-size: 16.5px;
  width: 75%;
  position: relative;
  display: right;
  flex-direction: column;
  border: 1px solid lightgray;
  height: 800px;
  line-height: 310%;
`

const UserChangeContainer = styled.div`
    width: 100%;
    height: 100%;

    box-sizing: border-box;

    display: flex;
    flex-direction: column;

    //border 1px solid #000;
`


/////////////////
/// 프로필 사진과 이름
const UserProfileBox = styled.div`
    width: 100%;
    height: 40px;

    margin-top: 32px;

    display: flex;

    //border 1px solid #000;
`

const UserImg = styled.div`
    width: 38px;
    height: 38px;
    
    margin-left: 90px;
    margin-right: 25px;

    border-radius: 50%;     
    background-image: url("https://content.presspage.com/uploads/2379/1920_ocean-sunset-195865.jpg?10000");
`

const ChangeImgButton = styled.button`
    padding: 0 0;
    border: none;
    background-color: rgba(0,0,0,0);

    font-size: 14px;
    font-weight: 700;
    color: #0095f6;

    cursor: pointer;
`

////////////
// 프로필 편집 Form

const UserChangeBox = styled.div`
    width: 100%;
    margin-top: 14px;

    flex-grow: 1;

    box-sizing: border-box;

    display: flex;
    flex-direction: column;

    //border 1px solid #000;
`

const UserChangeSubBox = styled.div`
    width: 100%; 
    margin-bottom: 13px;

    display: flex;

    //border: 1px solid #000;
`

const ChangeClass = styled.div`
    width: 130px;
    height: 100%;
    padding-right: 25px;
    padding-left: 0px;

    position: relative;

    text-align: right;
    font-weight: 550;

    
    //border: 1px solid #000;
`

const ChangeInputBox = styled.div`
    width: 355px;
    height: 100%;

    position: relative;
`

const ChangeInput = styled.input`
    width: 280px;
    height: 28px;
    padding: 0 10px;

    
    position: absolute;
    top: -3px;
    
`

const ChangeDesc = styled.div`
    width: 280px;

    font-size: 12px;
    color: rgba(0, 0, 0, 0.4);
    
    //border: 1px solid #000;
`
/* 줄간격 조절하기
https://tagilog.tistory.com/191
*/
