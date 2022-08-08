import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import PopUp from "../components/PopUp";

const SelectionStatus = {
  POSTS : "posts",
  SAVED : "saved",
  TAGGED : "tagged"
}

function Profile() {
  // pop up
  const [pageSelection, setPageSelection] = useState("posts");
  const [editPopUp, setEditPopUp] = useState(false);

  // pop up
  const handleEditPopUp = (isEnable) => {
    if (isEnable === true) {
      setEditPopUp(true);
      document.body.style.overflow = "hidden";
    } else {
      setEditPopUp(false);
      document.body.style.overflow = "unset";
    }
   
  };

  const handlePageSelection = (e) => {
    // pageSelection을 posts로 바꾼다
    if(e.target.textContent === "게시물")
        setPageSelection("posts");
    else if(e.target.textContent === "저장됨")
        setPageSelection("saved");
    else if(e.target.textContent === "태그됨")
        setPageSelection("tagged");
}

  return (
    <div>
      {editPopUp && <PopUp onClose={handleEditPopUp} />}
      <Layout>
        <Wrapper>
          <Container>
            <ProfileBox>
              <ProfileImg />
              <ProfileName> 
                <span> utae1102 </span>
                <Link to={"/ProfileChange"}>
                  <button style={{ fontSize: "15px", cursor: "pointer", height: "27px", verticalAlign: "6px"}}> 프로필 편집 </button>
                </Link>
                <span style={{fontSize: "35px", cursor: "pointer", marginLeft: "15px"}}
                  onClick={() => {
                    handleEditPopUp(true);
                  }}
                >
                  ⚙︎
                </span>

                <FollowContainer>
                  <span> 게시물5 </span>
                  <span> 팔로워100 </span>
                  <span> 팔로우100 </span>
                </FollowContainer>
                <p style={{ fontSize: "18px" }}>김우태</p>
              </ProfileName>
            </ProfileBox>
            <SelectionBox>
                    <div status={pageSelection}><SelectionItem onClick={handlePageSelection}>게시물</SelectionItem></div>
                    <div status={pageSelection}><SelectionItem onClick={handlePageSelection}>저장됨</SelectionItem></div>
                    <div status={pageSelection}><SelectionItem onClick={handlePageSelection}>태그됨</SelectionItem></div>
                </SelectionBox>
                {
                    ((pageSelection === SelectionStatus.POSTS)
                    && (<PostBox>
                      <p style={{margin: "30px 0 10px 0", fontSize: "12px", color: "gray"}}>
                        저장한 내용은 회원님만 볼 수 있습니다. 
                        <NewCollection>+ 새 컬렉션</NewCollection>
                      </p>
                  
                      
                            <FeedBox>
                                <div><FeedImg/></div>
                                <div><FeedImg/></div>
                                <div><FeedImg/></div>
                            </FeedBox>
                            <FeedBox>
                                <div><FeedImg/></div>
                                <div><FeedImg/></div>
                                
                            </FeedBox>
                            
                        </PostBox>) )
                    || (
                    (pageSelection === SelectionStatus.SAVED)
                    &&  <PostBox>
                      <p style={{margin: "30px 0 10px 0", fontSize: "12px", color: "gray"}}>
                        저장한 내용은 회원님만 볼 수 있습니다. 
                        <NewCollection>+ 새 컬렉션</NewCollection>
                      </p>
                          <FeedBox>
                               <div><FeedImg/></div>
                               <div><FeedImg/></div>
                                                      
                          </FeedBox>
                        </PostBox>
                    )

                    || (
                    (pageSelection === SelectionStatus.TAGGED)
                    && <PostBox>
                     <p style={{margin: "30px 0 10px 0", fontSize: "12px", color: "gray"}}>
                      저장한 내용은 회원님만 볼 수 있습니다. 
                      <NewCollection>+ 새 컬렉션</NewCollection>
                     </p>
                        <FeedBox>
                             <div><FeedImg/></div>
                   
                                                    
                        </FeedBox>
                      </PostBox>
                    )
                }
            
          </Container>
          <Footer/>
        </Wrapper>
      </Layout>
    </div>
  );
}

export default Profile;

const Wrapper = styled.div`
  background-color: #fafafa;
  width: 100%;
  height: 93vh;
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
  line-height: 170%;
`;

const PostBox = styled.div`
  width: 100%;
  height: 70%;
  margin: 0 auto;
`;

const FollowContainer = styled.div`
  font-size: 18px;
  word-spacing: 10px;
`;

const SelectionBox = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    border-top: 1.2px solid rgba(0, 0, 0, 0.2);
    & div {
        width: 57px;
        height: 52px;
    
        margin-right: 60px;
        // &:not(:last-of-type) {
        &:last-of-type {
            margin-right: 0px;
        }
        display: flex;
        align-items: center;
        cursor: pointer;
        &:nth-child(1) {
            ${({ status }) => status === "posts" } 
            ${({ status }) => status === SelectionStatus.POSTS}
        }
        
        &:nth-child(2) {
            ${({ status }) => status === SelectionStatus.SAVED}
            ${({ status }) => status !== SelectionStatus.SAVED}
        }
        
        &:nth-child(3) {
            ${({ status }) => status === SelectionStatus.TAGGED}
            ${({ status }) => status !== SelectionStatus.TAGGED}
            
        }
    }
`

const SelectionItem = styled.div`
    font-size: 12px;
    color: #8E8E8E;
    vertical-align: center;
    letter-spacing: 1px;
    font-weight: 600;
`

const FeedBox = styled.div`
    content-align: center;
    width: 100%%;
    height: 1000%;
    display: flex;
    justify-content: flex-start;   
`

const FeedImg = styled.img`
  //background-size: cover;
  //background-image: url("https://content.presspage.com/uploads/2379/1920_ocean-sunset-195865.jpg?10000");
  content: url("https://static.hubzum.zumst.com/hubzum/2019/02/25/10/054889f91efb4d89abcb42317c298504_780x0c.jpg");
  width: 280px;
  height: 280px;
  object-fit: cover;
  cursor: pointer;
  border-spacing: 0 20px 0 0;
  border-width: 5px;
  margin: 0 30px 0 0;
`;

const NewCollection = styled.div`
    font-size: 14px;
    font-weight: 550;
    color: #0095f6;
    cursor: pointer;
    float: right;
    margin: -8px 0 0 0;
`