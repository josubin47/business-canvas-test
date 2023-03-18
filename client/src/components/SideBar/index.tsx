import ImageButton from 'components/ImageButton';
import URLInput from 'components/URLInput';
import { useState } from 'react';
import ListItem from '../ListItem';
import {
  ButtonContainer,
  Section,
  Button,
  ListContainer,
  ListContent,
} from './style';
import { SideBarProps } from './type';

export default function SideBar({
  resource,
  selectedResource,
  onAddResource,
  onUpdateResource,
  onDeleteResource,
  onSelectedResource,
}: SideBarProps) {
  const [visible, setVisible] = useState<boolean>(false);

  const toggleVisible = () => setVisible(!visible);

  const isSelected = (id: number) => {
    return selectedResource !== null && selectedResource?.id === id;
  };

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
        <ListContent>
          {[...resource]
            .sort((a, b) => {
              return b.id - a.id;
            })
            .map(item => (
              <ListItem
                key={item.id}
                resource={item}
                isSelected={isSelected(item.id)}
                onSelectedResource={onSelectedResource}
                onDeleteResource={onDeleteResource}
                onUpdateResource={onUpdateResource}
              />
            ))}
        </ListContent>
      </ListContainer>
    </Section>
  );
}
