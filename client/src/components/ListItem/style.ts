import styled, { css } from 'styled-components';
import { ItemStyleProps } from './type';

const Item = styled.div`
  background-color: #ffffff;
  width: 85%;
  border-radius: 12px;
  margin: 13px;
  padding: 10px;
  position: relative;
  white-space: normal;
  height: 100px;

  :hover {
    border: 1px solid gray;
  }

  ${({ isSelected }: ItemStyleProps) => css`
    border: ${isSelected ? '1px solid #0D99FF' : ''};
  `}
`;

const TextField = styled.div`
  width: 100%;
  word-wrap: break-word;

  white-space: nowrap;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  white-space: normal;
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 120px;
`;

const Button = styled.button`
  margin: 5px;
`;

export { Item, Button, TextField, ButtonContainer };
