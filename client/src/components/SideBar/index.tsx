import ImageButton from 'components/ImageButton';
import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import ListItem from '../ListItem';
import { SideBarProps } from './type';

export default function SideBar({
  resource,
  onAddResource,
  onUpdateResource,
  onDeleteResource,
}: SideBarProps) {
  const [visible, setVisible] = useState<boolean>(false);
  const [url, setUrl] = useState<string>('https://');

  const handleURLButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setVisible(!visible);
  };

  const handleURLInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUrl(value);
  };

  return (
    <Section>
      <ButtonContainer>
        <Button type="button" onClick={handleURLButtonClick}>
          URL 추가
        </Button>
        <ImageButton resource={resource} onAddResource={onAddResource} />
      </ButtonContainer>
      <InputContainer visible={visible}>
        <Input type="text" value={url} onChange={handleURLInputChange}></Input>
      </InputContainer>
      <ListContainer>
        <ListItem url={'테스트'} />
      </ListContainer>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: #f7f7f7;
  border-right: 1px solid #c4c4c4;
  align-items: center;
`;

const ButtonContainer = styled.div`
  background-color: #ffffff;
  height: 30px;
  border-bottom: 0.2px solid #e5e5e5;
  box-shadow: 0 8px 10px -3px #e5e5e5;
  margin: 0 auto;
  padding: 10px;
`;

const Button = styled.button`
  width: 130px;
  height: 30px;
  background-color: #ffffff;
  border: 1.5px solid #e5e5e5;
  border-radius: 3px;
  margin: 0 5px;
`;

const ListContainer = styled.div`
  display: flex;
  width: 100%;
`;

interface InputContainerProps {
  visible: boolean;
}

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
