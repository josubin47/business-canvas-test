import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import { Button } from './style';
import { ImageButtonProps } from './type';
import { Resource } from 'recoil/resource';

export default function ImageButton({
  resource,
  onAddResource,
}: ImageButtonProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleImageButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleImageInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    const BASE_URL = 'http://localhost:5000';

    if (!files) {
      console.log('선택된 파일 없음');
      return;
    }

    const resources: Resource[] = [];
    let id = Math.max(...resource.map(item => item.id)) + 1;

    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      const obj: Resource = {
        id: id,
        type: 'IMAGE',
        value: files[i].name,
      };
      resources.push(obj);

      formData.append('images', files[i], files[i].name);

      id++;
    }

    axios
      .post(BASE_URL + '/image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data; charset=utf-8',
        },
      })
      .then(res => {
        console.log(res.data);
        onAddResource(resources);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log(resource);
  }, [resource]);

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
