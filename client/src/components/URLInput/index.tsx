import { useState } from 'react';
import { Input, InputContainer } from './style';
import { URLInputProps } from './type';

export default function URLInput({ visible }: URLInputProps) {
  const [url, setUrl] = useState<string>('https://');

  return (
    <InputContainer visible={visible}>
      <Input type="text" value={url} />
    </InputContainer>
  );
}
