import React, { useState } from 'react';
import { ResourceType } from 'types/common';
import { Input, InputContainer } from './style';
import { URLInputProps } from './type';

export default function URLInput({
  visible,
  toggleVisible,
  resource,
  onAddResource,
}: URLInputProps) {
  const [url, setUrl] = useState<string>('https://');

  const convertToEmbedUrl = (url: string) => {
    const videoId = url.split('v=')[1];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  const isYoutubeLink = (url: string) => {
    const regex = /^https?:\/\/(www\.)?youtube.com\/watch\?v=/;
    return regex.test(url);
  };

  const addURL = () => {
    onAddResource([
      {
        id: Math.max(...resource.map(item => item.id)) + 1,
        type: 'URL',
        value: isYoutubeLink(url) ? convertToEmbedUrl(url) : url,
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
