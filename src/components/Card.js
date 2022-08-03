import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  width: 55%;
  margin: 30px auto;
`;

const CardContainer = styled.div`
  width: 50%;
  height: 65vh;
  border: 1px solid lightgray;
  padding: 20px 0;
  background-color: #ffffff;
  border-radius: 10px;
  position: relative;
`;

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: gray;
`;

const HeadInfo = styled.div`
  display: flex;
  align-items: center;
  & span {
    margin-left: 10px;
    font-weight: 700;
    font-size: 14px;
  }
`;

const Icon = styled.div`
  width: 20px;
  & svg {
    display: flex;
    overflow: visible;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 70%;
  margin-top: 20px;
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  background-color: gray;
`;

const MainIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  padding-top: 20px;
`;

const MainIconContainer = styled.div`
  display: flex;
  align-items: center;
`;

const MainIcon = styled.div`
  width: 22px;
  margin: 0 5px;
`;

const InputIcon = styled.div`
  width: 30px;
`;

const InputContainer = styled.div`
  position: absolute;
  bottom: 0;
  height: 40px;
  width: 100%;
  border-top: 1px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  & input {
    outline: none;
    border: none;
    width: 75%;
    padding: 5px 10px;
    &::placeholder {
      color: lightgray;
    }
  }
  & button {
    background-color: transparent;
    border: none;
    font-size: 16px;
    color: #b3dffc;
  }
`;

function Card() {
  return (
    <CardWrapper>
      <CardContainer>
        <HeadContainer>
          <HeadInfo>
            <Avatar />
            <span>이름</span>
          </HeadInfo>
          <Icon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200C94.93 200 120 225.1 120 256zM280 256C280 286.9 254.9 312 224 312C193.1 312 168 286.9 168 256C168 225.1 193.1 200 224 200C254.9 200 280 225.1 280 256zM328 256C328 225.1 353.1 200 384 200C414.9 200 440 225.1 440 256C440 286.9 414.9 312 384 312C353.1 312 328 286.9 328 256z" />
            </svg>
          </Icon>
        </HeadContainer>
        <ImageContainer>
          <Image />
        </ImageContainer>
        <MainIconWrapper>
          <MainIconContainer>
            <MainIcon>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
              </svg>
            </MainIcon>
            <MainIcon>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M256 32C114.6 32 .0272 125.1 .0272 240c0 49.63 21.35 94.98 56.97 130.7c-12.5 50.37-54.27 95.27-54.77 95.77c-2.25 2.25-2.875 5.734-1.5 8.734C1.979 478.2 4.75 480 8 480c66.25 0 115.1-31.76 140.6-51.39C181.2 440.9 217.6 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32z" />
              </svg>
            </MainIcon>
            <MainIcon>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M501.6 4.186c-7.594-5.156-17.41-5.594-25.44-1.063L12.12 267.1C4.184 271.7-.5037 280.3 .0431 289.4c.5469 9.125 6.234 17.16 14.66 20.69l153.3 64.38v113.5c0 8.781 4.797 16.84 12.5 21.06C184.1 511 188 512 191.1 512c4.516 0 9.038-1.281 12.99-3.812l111.2-71.46l98.56 41.4c2.984 1.25 6.141 1.875 9.297 1.875c4.078 0 8.141-1.031 11.78-3.094c6.453-3.625 10.88-10.06 11.95-17.38l64-432C513.1 18.44 509.1 9.373 501.6 4.186zM369.3 119.2l-187.1 208.9L78.23 284.7L369.3 119.2zM215.1 444v-49.36l46.45 19.51L215.1 444zM404.8 421.9l-176.6-74.19l224.6-249.5L404.8 421.9z" />
              </svg>
            </MainIcon>
          </MainIconContainer>
          <MainIcon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M336 0h-288C21.49 0 0 21.49 0 48v431.9c0 24.7 26.79 40.08 48.12 27.64L192 423.6l143.9 83.93C357.2 519.1 384 504.6 384 479.9V48C384 21.49 362.5 0 336 0zM336 452L192 368l-144 84V54C48 50.63 50.63 48 53.1 48h276C333.4 48 336 50.63 336 54V452z" />
            </svg>
          </MainIcon>
        </MainIconWrapper>
        <InputContainer>
          <InputIcon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M256 352C293.2 352 319.2 334.5 334.4 318.1C343.3 308.4 358.5 307.7 368.3 316.7C378 325.7 378.6 340.9 369.6 350.6C347.7 374.5 309.7 400 256 400C202.3 400 164.3 374.5 142.4 350.6C133.4 340.9 133.1 325.7 143.7 316.7C153.5 307.7 168.7 308.4 177.6 318.1C192.8 334.5 218.8 352 256 352zM208.4 208C208.4 225.7 194 240 176.4 240C158.7 240 144.4 225.7 144.4 208C144.4 190.3 158.7 176 176.4 176C194 176 208.4 190.3 208.4 208zM304.4 208C304.4 190.3 318.7 176 336.4 176C354 176 368.4 190.3 368.4 208C368.4 225.7 354 240 336.4 240C318.7 240 304.4 225.7 304.4 208zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z" />
            </svg>
          </InputIcon>
          <input placeholder="댓글 달기..." />
          <button>게시</button>
        </InputContainer>
      </CardContainer>
    </CardWrapper>
  );
}

export default Card;
