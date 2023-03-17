import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ImageViewerProps } from './type';

export default function ImageViewer({ fileName }: ImageViewerProps) {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    if (!fileName) {
      return;
    }
    const BASE_URL = 'http://localhost:5000';

    const fetchImage = async () => {
      try {
        const response = await axios.get(BASE_URL + `/image/${fileName}`, {
          responseType: 'blob',
        });
        const url = URL.createObjectURL(response.data);
        setImageUrl(url);
      } catch (error) {
        console.log(error);
      }
    };
    fetchImage();

    return () => {
      URL.revokeObjectURL(imageUrl);
    };
  }, [fileName]);

  return <img src={imageUrl} alt={fileName} />;
}
