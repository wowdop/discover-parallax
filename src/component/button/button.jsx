import * as S from "./button.style";

const Button = ({ children, color, onClick, number }) => {
  return <S.Button onClick={() => onClick(number)}>{children}</S.Button>;
};

export default Button;
