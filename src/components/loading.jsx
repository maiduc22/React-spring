import React from "react";
import { useSpring, animated, useSprings } from "react-spring";
import { AiOutlineLoading } from "react-icons/ai";
import styled from "styled-components";

const Container = styled(animated.div)`
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 10px;
`;
const Content = styled.h1`
  font-weight: 600;
  letter-spacing: 5px;
`;
const text = [
  {
    value: ".",
    delay: 0,
    opacity: 1,
  },
  {
    value: ".",
    delay: 60,
    opacity: 0.2,
  },
  {
    value: ".",
    delay: 120,
    opacity: 1,
  },
];
export const Loading = () => {
  const Iconprops = useSpring({
    loop: true,
    delay: 0,
    from: { rotateZ: 0 },
    to: { rotateZ: 360 },
    config: { duration: 1000 },
  });
  const springs = useSprings(
    text.length,
    text.map((item) => ({
      loop: true,
      delay: item.delay,
      from: { y: 2 },
      to: {
        y: 8,
      },
    }))
  );
  return (
    <div
      className="container"
      style={{
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#9DD6DF",
      }}
    >
      <Container
        style={{ marginRight: "20px", color: "#9DD6DF", ...Iconprops }}
      >
        <AiOutlineLoading size="40px" />
      </Container>
      <>
        <Content>Loading</Content>
        {springs.map((styles, index) => (
          <animated.span
            style={{
              fontWeight: 600,
              letterSpacing: "5px",
              fontSize: "36px",
              ...styles,
            }}
          >
            {text[index].value}
          </animated.span>
        ))}
      </>
    </div>
  );
};
