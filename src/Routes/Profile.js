import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Footer from "/Users/gim-utae/wootae/src/components/Footer.js"



const Wrapper = styled.div`
  background-color: #fafafa;
  width: 100%;
  height: 100vh;
  padding: 10vh 0;
  margin: 0 auto;
`;

const Container = styled.div`
  box-sizing: border-box;
  padding-top: 10px;
  margin: 0 auto;
  position: relative;
  width: 100%;
  height: auto;
  /* height: 100%; */
  max-width: 900px;
  min-width: 900px;

`;
const ProfileBox = styled.div`
  display: block;
  width: 100%;
  height: 280px;
  background-color: ;
`;

const ProfileImg = styled.div`
  top: 400px;
  width: 150px;
  height: 150px;
  margin-top: -50px;
  margin-left: 00px; 
  border-radius: 85px;
  background-size: cover;
  left: 50%;
  transform: translate(50%, 50%);
  text-align: center;
  background-image: url("https://content.presspage.com/uploads/2379/1920_ocean-sunset-195865.jpg?10000");
`;

const ProfileName = styled.div`
  word-spacing: 8px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: left;
  top: 100px;
  font-size: 27px;
  font-weight: 600;
  opacity: 0.6;
  margin-top: 10px;
  line-height : 170%;
`;

const PostBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  grid-auto-rows: 20px;
  grid-gap: 40px;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  top: 420px;
  width: 980px;
  /* display: flex; */
  height: 130%;
  /* display: block; */
  /* justify-content: center; */
  padding: 50px 200px;
  flex-wrap: wrap;
  
`;

const FeedImg = styled.div`
  width: 300px;
  height: 300px;
  margin-left: 50px; 
  background-size: cover;
  left: 50%;
  background-image: url("https://content.presspage.com/uploads/2379/1920_ocean-sunset-195865.jpg?10000");
`;

const FollowContainer = styled.div`
  font-size: 18px;
  word-spacing: 10px;
  
`;


function Profile() {
  return <div>
    <Layout>
      <Wrapper>
        <Container>
          <ProfileBox>
            <ProfileImg/>
            <ProfileName>
              <span> utae1102 </span>
                <Link to = {"/ProfileChange"}>
                 <button  style={{fontSize: "15px"}}> 프로필 편집 </button>
                </Link>
              <span> ⚙︎ </span>
            <FollowContainer>
              <span> 게시물5 </span>
              <span> 팔로워100 </span>
              <span> 팔로우100 </span>
            </FollowContainer>
              <p style={{ fontSize: "18px"}}>김우태</p> 
            </ProfileName>
          </ProfileBox>
              <hr style={{ marginTop: "0", width: "100%", zIndex: "100" }}></hr>
            <PostBox>
              <p>게시물</p>
              <p>저장됨</p>
              <p>태그됨</p>
              <FeedImg/>
            </PostBox>
        </Container> 
       </Wrapper>
       <Footer/>
    </Layout>
      
   

  </div>;
  
  
}

export default Profile;
