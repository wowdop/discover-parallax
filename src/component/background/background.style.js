import styled from "styled-components";

const positionMap = [
  { x: 0, y: -50 },
  { x: -350, y: -90 },
  { x: -750, y: -10 },
];

export const Background = styled.div`
  border: 2px solid lightgrey;
  background-image: url("/poza_proiect.jpeg");
  padding-top: 33%;
  background-size: 200%;
  background-repeat: no-repeat;
  background-position: ${({ n = 0 }) =>
    `${positionMap[n].x}px ${positionMap[n].y}px`};
  transition: 250ms;
`;
