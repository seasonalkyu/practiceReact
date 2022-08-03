import React from "react";
import styled from "styled-components";

const StoryWrapper = styled.div`
  display: flex;
  justify-content: start;
  width: 60%;
  margin: 0 auto;
`;

const StoryContainer = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid lightgray;
  padding: 0 20px;
  height: 110px;
  background-color: #ffffff;
  border-radius: 10px;
`;

const StoryCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  background-color: yellow;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  line-height: center;
`;

const StoryName = styled.div`
  line-height: center;
  text-align: center;
  margin-top: 10px;
  width: 60px;
  height: 10px;
  font-size: 12px;
  white-space: nowrap;
`;

const NextButton = styled.div`
  position: absolute;
  background-color: white;
  right: 15px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  text-align: center;
  line-height: 25px;
  font-size: 25px;
  border: 1px solid lightgray;
`;

function Story() {
  return (
    <StoryWrapper>
      <StoryContainer>
        <div>
          <StoryCircle />
          <StoryName>친구1</StoryName>
        </div>

        <div>
          <StoryCircle />
          <StoryName>친구2</StoryName>
        </div>

        <div>
          <StoryCircle />
          <StoryName>친구3</StoryName>
        </div>

        <div>
          <StoryCircle />
          <StoryName>친구4</StoryName>
        </div>

        <div>
          <StoryCircle />
          <StoryName>친구5</StoryName>
        </div>
        <NextButton>&gt;</NextButton>
      </StoryContainer>
    </StoryWrapper>
  );
}

export default Story;
