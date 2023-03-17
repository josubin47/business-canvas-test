import { useEffect, useState } from 'react';
import { ResourceType } from 'types/common';
import { Item } from './style';
import { ItemProps } from './type';

export default function ListItem({ resource }: ItemProps) {
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

  useEffect(() => {
    const { id, type, value } = resource;
    if (isURL(type)) {
      setValue(isYoutubeLink(value) ? convertToEmbedUrl(value) : value);
    } else {
      setValue(value);
    }
  }, [value]);

  return <Item>{value}</Item>;
}
