import styled from 'styled-components';

const Item = styled.div`
  background-color: #ffffff;
  width: 85%;
  border-radius: 12px;
  margin: 13px;
  padding: 10px;
  position: relative;
  white-space: normal;
  height: 100px;
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

const Button = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 10px;
  width: 50px;
`;

export { Item, Button, TextField };
