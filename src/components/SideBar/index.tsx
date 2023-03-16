import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';

export default function SideBar() {
  const [visible, setVisible] = useState<boolean>(false);
  const [url, setUrl] = useState<string>('https://');
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleURLButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setVisible(!visible);
  };

  const handleURLInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setUrl(value);
  };

  const handleImageButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleImageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // todo
  };

  return (
    <Section>
      <ButtonContainer>
        <Button type="button" onClick={handleURLButtonClick}>
          URL 추가
        </Button>
        <input
          type="file"
          multiple
          accept=".png, .jpg"
          ref={inputRef}
          style={{ display: 'none' }}
          onChange={handleImageInputChange}
        />
        <Button type="button" onClick={handleImageButtonClick}>
          이미지 추가
        </Button>
      </ButtonContainer>
      <InputContainer visible={visible}>
        <Input type="text" value={url} onChange={handleURLInputChange}></Input>
      </InputContainer>
      <ListContainer>
        <ListItem>abcd</ListItem>
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

const ListItem = styled.div`
  background-color: #ffffff;
  height: 100px;
  width: 100%;
  border-radius: 12px;
  margin: 13px;
  padding: 10px;
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
