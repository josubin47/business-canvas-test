import React, { useEffect, useState } from 'react';
import { TypedIcon } from 'typed-design-system';
import { ResourceType } from 'types/common';
import { Item, TextField, Button } from './style';
import { ItemProps } from './type';

export default function ListItem({
  resource,
  onUpdateResource,
  onDeleteResource,
  onSelectedResource,
  isSelected,
}: ItemProps) {
  const [value, setValue] = useState<string>('');

  const convertToEmbedUrl = (url: string) => {
    const videoId = url.split('v=')[1];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  const isYoutubeLink = (url: string) => {
    const regex = /^https?:\/\/(www\.)?youtube.com\/watch\?v=/;
    return regex.test(url);
  };

  const isURL = (type: ResourceType) => {
    return type === 'URL';
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    onSelectedResource(resource.id);
  };

  useEffect(() => {
    const { id, type, value } = resource;
    if (isURL(type)) {
      setValue(isYoutubeLink(value) ? convertToEmbedUrl(value) : value);
    } else {
      setValue(value);
    }
  }, [value]);

  return (
    <Item isSelected={isSelected} onClick={handleClick}>
      <TextField>{value}</TextField>
    </Item>
  );
}
