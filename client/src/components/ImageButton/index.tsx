import React, { useEffect, useRef } from 'react';
import { Button } from './style';
import { ImageButtonProps } from './type';
import { Resource } from 'recoil/resource';
import api from 'core/api';

export default function ImageButton({
  resource,
  onAddResource,
}: ImageButtonProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const makeData = (files: FileList) => {
    const resources: Resource[] = [];
    let id = Math.max(...resource.map(item => item.id)) + 1;

    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      const obj: Resource = {
        id: id,
        type: 'IMAGE',
        value: files[i].name,
        name: files[i].name,
      };
      resources.push(obj);
      formData.append('images', files[i], files[i].name);
      id++;
    }

    return { formData: formData, resources: resources };
  };

  const handleImageButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (!files) {
      console.log('선택된 파일 없음');
      return;
    }

    const { formData, resources } = makeData(files);

    await api
      .uploadImage(formData)
      .then(res => {
        resources.forEach(item => onAddResource([item]));
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <input
        type="file"
        multiple
        accept=".png, .jpg"
        ref={inputRef}
        style={{ display: 'none' }}
        onChange={handleFileUpload}
      />
      <Button type="button" onClick={handleImageButtonClick}>
        이미지 추가
      </Button>
    </>
  );
}
