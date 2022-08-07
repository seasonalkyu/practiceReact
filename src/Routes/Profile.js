import React, {useState} from "react";
import styled, {css} from "styled-components";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import Footer from "../components/Footer"
import PopUp from "../components/PopUp";



const SelectionStatus = {
    POSTS : "posts",
    SAVED : "saved",
    TAGGED : "tagged"
}

const borderInvalid = css`
`
const borderValid = css`
  border-top: 1px solid #000;
  color: #000;
`


const Wrapper = styled.div`
  background-color: #fafafa;
  width: 100vw;
  padding-top: 80px;
  margin: 0 auto;
`;

const Container = styled.div`
  width: 90%;
  max-width: 900px;
  min-width: 750px;
  

  box-sizing: border-box;
  padding-top: 10px;
  margin: 0 auto;
  position: relative;

  display: flex;
  flex-direction: column;

  //border: 1px solid #000;
`;
const ProfileBox = styled.div`
    width: 100%;
    height: 152px;
    margin-bottom: 44px;
    background-color: ;

    display: flex;
`;

const ProfileImg = styled.div`
    flex: 0.1 0 150px;
    margin-right: 30px;
    & div {
        width: 150px;
        height: 150px;
          
        border-radius: 85px;
        background-size: cover;
        text-align: center;
        background-image: url("https://content.presspage.com/uploads/2379/1920_ocean-sunset-195865.jpg?10000");
    }
`;

const ProfileName = styled.div`
    flex: 1 0 280px;
  word-spacing: 8px;
  


  text-align: left;
  
  font-size: 27px;
  font-weight: 600;
  opacity: 0.6;
  
  line-height : 170%;
`;

//
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
            ${({ status }) => status === "posts" && (borderValid)} 
            ${({ status }) => status === SelectionStatus.POSTS && (borderInvalid)}
        }
        
        &:nth-child(2) {
            ${({ status }) => status === SelectionStatus.SAVED && borderValid}
            ${({ status }) => status != SelectionStatus.SAVED && borderInvalid}
        }
        
        &:nth-child(3) {
            ${({ status }) => status === SelectionStatus.TAGGED && borderValid}
            ${({ status }) => status != SelectionStatus.TAGGED && borderInvalid}
            
        }
    }
`

const SelectionItem = styled.a`
    font-size: 12px;
    color: #8E8E8E;
    vertical-align: center;
    letter-spacing: 1px;
    font-weight: 600;

`

const PostBox = styled.div`
  width: 100%;
  height: 70%;
  margin: 0 auto;
  
// text-align: center;

/* display: flex; */
/* justify-content: center; */
// flex-wrap: wrap;

//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
//   grid-auto-rows: 20px;
//   grid-gap: 40px;
  
`;

const FeedBox = styled.div`
    width: 100%;
    height: 100%;
    display: flex;

    & div {
        box-sizing: border-box;
        width: 33.33333%;
        //min-height: 100px;
        margin-right:28px;

        // &:last-of-type {
        //     margin-right: 0px;
        // }

        &:nth-child(3n) {
            margin-right: 0px;
        }
    }
`

const FeedImg = styled.img`
  //background-size: cover;
  //background-image: url("https://content.presspage.com/uploads/2379/1920_ocean-sunset-195865.jpg?10000");
  content: url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Square_definition.svg/180px-Square_definition.svg.png");
  width: 100%;
  height: 100%;
  object-fit: cover;

  cursor: pointer;
`;

const FollowContainer = styled.div`
  font-size: 18px;
  word-spacing: 10px;
  
`;

// pop up
const PopUpStatus = {
    TRUE : true,
    FALSE : false
}


function Profile() {

    const [pageSelection, setPageSelection] = useState("posts");
// pop up
    const [editPopUp, setEditPopUp] = useState(false);

// pop up
    const handleEditPopUp = (isEnable) => {
        if(isEnable === true) {
            setEditPopUp(true);
            document.body.style.overflow = "hidden";
        }
        else {
            setEditPopUp(false);
            document.body.style.overflow = "unset";
        }
/* 모달창 팝업시 뒷배경 스크롤 막기
    https://velog.io/@kbing14/React-%EB%AA%A8%EB%8B%AC%EC%B0%BD-%ED%8C%9D%EC%97%85%EC%8B%9C-%EB%92%B7%EB%B0%B0%EA%B2%BD-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EB%A7%89%EA%B8%B0
*/
    }

    const handlePageSelection = (e) => {
        // pageSelection을 posts로 바꾼다
        if(e.target.textContent === "게시물")
            setPageSelection("posts");
        else if(e.target.textContent === "저장됨")
            setPageSelection("saved");
        else if(e.target.textContent === "태그됨")
            setPageSelection("tagged");
    }

    return (<Layout>

        <Wrapper id="Wrapper">
            <Container id="Container">
                <ProfileBox>
                    <ProfileImg><div></div></ProfileImg>
                    <ProfileName>
                        <span> utae1102 </span>
                        <Link to = {"/ProfileChange"}>
                            <button  style={{fontSize: "15px"}}> 프로필 편집 </button>
                        </Link>
                        <span onClick={() => {handleEditPopUp(true)}}> ⚙︎ </span>
                            {editPopUp && <PopUp onClose={handleEditPopUp} />}
                        <FollowContainer>
                            <span> 게시물5 </span>
                            <span> 팔로워100 </span>
                            <span> 팔로우100 </span>
                        </FollowContainer>
                        <p style={{ fontSize: "18px"}}>김우태</p> 
                    </ProfileName>
                </ProfileBox>
                <SelectionBox>
                    <div status={pageSelection}><SelectionItem onClick={handlePageSelection}>게시물</SelectionItem></div>
                    <div status={pageSelection}><SelectionItem onClick={handlePageSelection}>저장됨</SelectionItem></div>
                    <div status={pageSelection}><SelectionItem onClick={handlePageSelection}>태그됨</SelectionItem></div>
                </SelectionBox>
                {
                    (pageSelection === SelectionStatus.POSTS)
                    &&
                        <PostBox>
                            <FeedBox>
                                <div><FeedImg/></div>
                                <div><FeedImg/></div>
                                <div><FeedImg/></div>
                            </FeedBox>
                            <FeedBox>
                                <div><FeedImg/></div>
                                <div><FeedImg/></div>
                            </FeedBox>
                            
                        </PostBox>
                    ||  (pageSelection === SelectionStatus.SAVED)
                        && <div> saved </div>
                    ||  (pageSelection === SelectionStatus.TAGGED)
                        && <div> tagged </div>
                }
        </Container> 
       </Wrapper>
       <Footer/>
    </Layout>)
    
   
  
  
}

export default Profile;