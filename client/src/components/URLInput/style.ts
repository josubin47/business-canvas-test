import { InputContainerProps } from './type';
import styled, { css } from 'styled-components';

const InputContainer = styled.div`
  ${({ visible }: InputContainerProps) => css`
    top: ${visible ? '42px' : 0};
    display: ${visible ? 'flex' : 'none'};
  `}
  width: 270px;
  height: 30px;
  position: absolute;
  background-color: #ffffff;
  border: 1.5px solid #e5e5e5;
  transition: all 0.5s ease-in-out;
  border-radius: 3px;
  box-shadow: 1px 1px 5px #e5e5e5;
  z-index: 1;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  height: 18px;
  background-color: #f0f0f0;
  border: 1.5px solid #e5e5e5;
  width: 95%;
  border-radius: 3px;
`;

export { InputContainer, Input };
