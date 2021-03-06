import React, { useState } from "react";
import { Data } from "./Data";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";

const Header = styled.h1`
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 2.5rem;
  font-family: serif;
  color: black;
  text-align-last: center;
  line-height: 2.5rem;
  padding: 1rem 4rem;
  @media (min-width: 768px) {
    font-size: 3rem;
    line-height: 3rem;
  }
  @media (min-width: 968px) {
    font-size: 4rem;
    line-height: 4rem;
    padding: 0 2rem;
  }
`;

const Title = styled.h1`
  text-align: center;
  color: black;
  font-weight: bold;
  font-size: 1.3rem;
  padding-bottom: 5rem;
  font-family: sans-serif;
`;

const FaqSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 90%;
  @media (min-width: 768px) {
    width: 65%;
  }
  @media (min-width: 968px) {
    width: 50%;
  }
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #d6d6d6;
  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    font-family: gdsherpa, Helvetica, Arial, sans-serif;
    padding: 2.5rem 0;
  }

  span {
  }
`;

const Dropdown = styled.div`
  display: flex;
  justify-content: flex-start;
  p {
    color: black;
    font-weight: 500;
  }
`;

const Faq = () => {
  const [clicked, setClicked] = useState(false);
  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: "black", size: "25px" }}>
      <Header>
        Millions of customers rely on our domains to get their
        ideas online.
      </Header>
      <Title>Frequently Asked Questions</Title>
      <FaqSection>
        <Container>
          {Data.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1>{item.question}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </FaqSection>
    </IconContext.Provider>
  );
};

export default Faq;
