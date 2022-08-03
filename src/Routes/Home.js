import React from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Layout from "../components/Layout";
import Story from "../components/Story";

const Wrapper = styled.div`
  background-color: #fafafa;
  width: 100%;
  height: 100vh;
  padding: 10vh 0;
  margin: 0 auto;
`;

function Home() {
  return (
    <Layout>
      <Wrapper>
        <Story />
        {[1, 2, 3, 4, 5, 6].map((card) => (
          <Card key={card} />
        ))}
      </Wrapper>
    </Layout>
  );
}

export default Home;
