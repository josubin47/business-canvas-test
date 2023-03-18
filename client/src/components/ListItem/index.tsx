import React, { useEffect, useState } from 'react';
import { Item, TextField, Button, ButtonContainer } from './style';
import { ItemProps } from './type';

export default function ListItem({
  resource,
  onUpdateResource,
  onDeleteResource,
  onSelectedResource,
  isSelected,
}: ItemProps) {
  const [name, setName] = useState<string>('');
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleItemClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onSelectedResource(resource.id);
  };

  const handleUpdateItem = () => {
    onUpdateResource({ ...resource, name: resource.name });
  };

  const handleDeleteItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onDeleteResource(resource.id);
  };

  // 수정 핸들러
  const handleEditingButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsEditing(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setName(e.target.value);
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setIsEditing(false);
    handleUpdateItem();
  };

  useEffect(() => {
    setName(resource.name);
  }, []);

  return (
    <Item isSelected={isSelected} onClick={handleItemClick}>
      <TextField>
        {isEditing ? (
          <input
            type="text"
            value={name}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onClick={e => e.stopPropagation()}
          />
        ) : (
          <span>{name}</span>
        )}
      </TextField>
      <ButtonContainer>
        <Button type="button" onClick={handleEditingButtonClick}>
          수정
        </Button>
        <Button type="button" onClick={handleDeleteItem}>
          삭제
        </Button>
      </ButtonContainer>
    </Item>
  );
}
