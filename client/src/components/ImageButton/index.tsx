import React, { useRef } from 'react';
import styled from 'styled-components';
import { Button } from './style';

export default function ImageButton() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleImageButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleImageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // todo
  };

  return (
    <>
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
    </>
  );
}
