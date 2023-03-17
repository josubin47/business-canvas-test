import ImageButton from 'components/ImageButton';
import URLInput from 'components/URLInput';
import useFilteredResource from 'hooks/useFilteredResource';
import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import ListItem from '../ListItem';
import { SideBarProps } from './type';

export default function SideBar({
  resource,
  onAddResource,
  onUpdateResource,
  onDeleteResource,
}: SideBarProps) {
  const [visible, setVisible] = useState<boolean>(false);

  const toggleVisible = () => setVisible(!visible);

  return (
    <Section>
      <ButtonContainer>
        <Button
          type="button"
          onClick={e => {
            toggleVisible();
          }}
        >
          URL 추가
        </Button>
        <ImageButton resource={resource} onAddResource={onAddResource} />
      </ButtonContainer>
      <URLInput
        visible={visible}
        toggleVisible={toggleVisible}
        resource={resource}
        onAddResource={onAddResource}
      />
      <ListContainer>
        {[...resource]
          .sort((a, b) => {
            return b.id - a.id;
          })
          .map(item => (
            <ListItem key={item.id} resource={item} />
          ))}
      </ListContainer>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: #f7f7f7;
  border-right: 1px solid #c4c4c4;
  align-items: center;
`;

const ButtonContainer = styled.div`
  background-color: #ffffff;
  height: 30px;
  border-bottom: 0.2px solid #e5e5e5;
  box-shadow: 0 8px 10px -3px #e5e5e5;
  margin: 0 auto;
  padding: 10px;
`;

const Button = styled.button`
  width: 130px;
  height: 30px;
  background-color: #ffffff;
  border: 1.5px solid #e5e5e5;
  border-radius: 3px;
  margin: 0 5px;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
