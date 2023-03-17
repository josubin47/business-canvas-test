import React, { useState } from 'react';
import { Input, InputContainer } from './style';
import { URLInputProps } from './type';

export default function URLInput({
  visible,
  toggleVisible,
  resource,
  onAddResource,
}: URLInputProps) {
  const [url, setUrl] = useState<string>('https://');

  const addURL = () => {
    onAddResource([
      {
        id: Math.max(...resource.map(item => item.id)) + 1,
        type: 'URL',
        value: url,
      },
    ]);
    toggleVisible();
    setUrl('https://');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addURL();
      console.log('handleKeyDown');
    }
  };

  return (
    <InputContainer visible={visible}>
      <Input
        type="text"
        value={url}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </InputContainer>
  );
}
