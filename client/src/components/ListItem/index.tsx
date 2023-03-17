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

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    onSelectedResource(resource.id);
  };

  useEffect(() => {
    setValue(resource.value);
  }, [value]);

  return (
    <Item isSelected={isSelected} onClick={handleClick}>
      <TextField>{value}</TextField>
    </Item>
  );
}
