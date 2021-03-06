import React from "react";
import { useTransition, animated } from "react-spring";
import styled from "styled-components";
import { FcNext } from "react-icons/fc";

const slides = [
  {
    id: 0,
    url: "https://images.unsplash.com/photo-1657040298696-282743ad6406?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
  },
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1656941551037-ff1381f5aeba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8YWV1NnJMLWo2ZXd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1656453169670-26dc71a63fe8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfGFldTZyTC1qNmV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1657040298696-282743ad6406?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
  },
];

const SlideBtn = styled.button`
  background: none;
  outline: none;
`;
const Container = styled.div`
  width: 90vw;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ImgWrapper = styled(animated.div)`
  height: 500px;
  width: 500px;
  background-image: url(${(props) => props.img});
  color: white;
  margin: 20px;
`;

export const SlideImage = () => {
  const [index, setIndex] = React.useState(0);
  const handleClick = () => {
    setIndex((index) => (index + 1) % 4);
  };
  const transition = useTransition(index, {
    from: { opacity: 0, x: -1000 },
    enter: { opacity: 1, x: 0 },
    leave: { opacity: 0, x: 1000 },
  });
  return (
    <Container>
      <div>
        {transition((props, item) => {
          return (
            <div>
              <ImgWrapper
                key={index}
                img={slides[item].url}
                style={{
                  // backgroundImage: `url(${item.url})`,
                  ...props,
                }}
              ></ImgWrapper>
            </div>
          );
        })}
      </div>
      <SlideBtn onClick={() => handleClick()}>
        <FcNext />
      </SlideBtn>
    </Container>
  );
};
