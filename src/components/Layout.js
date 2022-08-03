import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  z-index: 50;
  background-color: #ffffff;
  height: 60px;
  width: 100%;
  border-bottom: 1px solid gray;
`;

const NavContainer = styled.div`
  width: 50%;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & input {
    margin-left: 200px;
    width: 268px;
    height: 25px;
    outline: none;
    border: 1px solid #dbdbdb;
    background-color: #efefef;
    text-indent: 5%;
    padding: 5px;
    border-radius: 5px;
    font-size: 15px;
    box-sizing: content-box;
  }
`;

const Logo = styled.img`
  width: 100px;
  height: 30px;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 280px;
  align-items: center;
  justify-content: space-around;

  & img {
    width: 25px;
    height: 25px;
  }
  & svg {
    width: 25px;
    height: 25px;
  }
`;

function Layout({ children }) {
  return (
    <>
      <Wrapper>
        <NavContainer>
          <Logo
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
            alt="logo"
          />

          <input placeholder="검색" />
          <ButtonContainer>
            <Link to={"/"}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/20/20176.png"
                alt="homeIcon"
              />
            </Link>
            <Link to={"/direct"}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M511.1 63.1v287.1c0 35.25-28.75 63.1-64 63.1h-144l-124.9 93.68c-7.875 5.75-19.12 .0497-19.12-9.7v-83.98h-96c-35.25 0-64-28.75-64-63.1V63.1c0-35.25 28.75-63.1 64-63.1h384C483.2 0 511.1 28.75 511.1 63.1z" />
              </svg>
            </Link>
            <Link to={"/"}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/875/875068.png"
                alt="postIcon"
              />
            </Link>
            <Link to={"/"}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M288 256C288 273.7 273.7 288 256 288C238.3 288 224 273.7 224 256C224 238.3 238.3 224 256 224C273.7 224 288 238.3 288 256zM0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM325.1 306.7L380.6 162.4C388.1 142.1 369 123.9 349.6 131.4L205.3 186.9C196.8 190.1 190.1 196.8 186.9 205.3L131.4 349.6C123.9 369 142.1 388.1 162.4 380.6L306.7 325.1C315.2 321.9 321.9 315.2 325.1 306.7V306.7z" />
              </svg>
            </Link>
            <Link to={"/"}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png"
                alt="heartIcon"
              />
            </Link>
            <Link to={"/profile"}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c39.77 0 72 32.24 72 72S295.8 272 256 272c-39.76 0-72-32.24-72-72S216.2 128 256 128zM256 448c-52.93 0-100.9-21.53-135.7-56.29C136.5 349.9 176.5 320 224 320h64c47.54 0 87.54 29.88 103.7 71.71C356.9 426.5 308.9 448 256 448z" />
              </svg>
            </Link>
          </ButtonContainer>
        </NavContainer>
      </Wrapper>
      {children}
    </>
  );
}

export default Layout;
