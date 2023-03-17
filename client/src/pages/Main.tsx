import useFilteredResource from 'hooks/useFilteredResource';
import { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import {
  Resource,
  resourceState,
  filteredResourceState,
} from 'recoil/resource';
import styled from 'styled-components';
import SideBar from '../components/SideBar';
import Viewer from '../components/Viewer';

export default function Main() {
  const [selectedResource, setSelectedResource] = useState<Resource | null>(
    null,
  );

  const [resource, setResource] = useRecoilState<Resource[]>(resourceState);
  const resourceHandler = useSetRecoilState(resourceState);

  // 리소스 선택
  const handleSelectedResource = (id: number) => {
    const item = resource.find(item => item.id === id);
    return setSelectedResource(item ?? null);
  };

  // 리소스 추가
  const handleAddResource = (param: Resource[]) => {
    resourceHandler([...resource, ...param]);
  };

  // 리소스 수정
  const handleUpdateResource = (param: Resource) => {
    const filteredResourceItem = useFilteredResource(param.id);

    if (filteredResourceItem === undefined) {
      return;
    }

    resourceHandler(
      resource.map(item => {
        return item.id === filteredResourceItem.id
          ? { ...item, value: filteredResourceItem.value }
          : item;
      }),
    );
  };

  // 리소스 삭제
  const handleDeleteResource = (id: number) => {
    const filteredResourceItem = useFilteredResource(id);

    if (filteredResourceItem === undefined) {
      return;
    }

    resourceHandler(
      resource.filter(item => item.id !== filteredResourceItem.id),
    );
  };

  useEffect(() => {
    console.log(selectedResource);
  }, [selectedResource]);

  return (
    <FlexContainer>
      <SideBar
        resource={resource}
        selectedResource={selectedResource}
        onAddResource={handleAddResource}
        onDeleteResource={handleDeleteResource}
        onUpdateResource={handleUpdateResource}
        onSelectedResource={handleSelectedResource}
      />
      <Viewer />
    </FlexContainer>
  );
}

const FlexContainer = styled.div`
  display: flex;
  flex: 1;
`;
