import React, { useState } from "react";
import { animated, useTransition } from "react-spring";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  AiFillCaretDown,
  AiFillCloseCircle,
  AiFillSetting,
  AiFillGift,
  AiFillTrophy,
} from "react-icons/ai";

const Container = styled.div`
  background-color: #cdf0ea;
  height: 100vh;
  width: 10vw;
  text-align: center;
`;

const Button = styled.button`
  padding: 10px;
`;

const Box = styled.div`
  padding: 40px;
  margin-top: 20px;
  min-height: 200px;
  width: 100%;
`;

const Icon = styled(Link)`
  width: 100px;
  height: 100px;
  margin: 0 auto;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;
`;
const Item = styled(animated.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MyBox = () => {
  const [visible, setVisible] = useState(false);
  const [items, setItems] = useState([]);
  const transition = useTransition(items, {
    from: { x: 0, y: 600, opacity: 0 },
    enter: (item) => (next) =>
      next({ x: 0, y: item.y, opacity: 1, delay: 300 }),
    leave: { x: 0, y: 600, opacity: 0 },
  });
  return (
    <Container>
      <Button
        onClick={() =>
          setItems(
            items.length
              ? []
              : [
                  { y: 50, content: <AiFillSetting size="30px" /> },
                  { y: 100, content: <AiFillTrophy size="30px" /> },
                  { y: 150, content: <AiFillGift size="30px" /> },
                ]
          )
        }
      >
        {items.length ? (
          <AiFillCloseCircle size="30px" />
        ) : (
          <AiFillCaretDown size="30px" />
        )}
      </Button>
      <Box>
        {transition((style, item) =>
          item ? (
            <Item style={style}>
              <Link to="">{item.content}</Link>
            </Item>
          ) : (
            ""
          )
        )}
      </Box>
    </Container>
  );
};
