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
  const [resource, setResource] = useRecoilState<Resource[]>(resourceState);
  const resourceHandler = useSetRecoilState(resourceState);

  const filteredResource = (id: number) => {
    return useRecoilValue(filteredResourceState(id));
  };

  // 리소스 추가
  const handleAddResource = (param: Resource[]) => {
    resourceHandler([...resource, ...param]);
  };

  // 리소스 수정
  const handleUpdateResource = (param: Resource) => {
    const filteredResourceItem = filteredResource(param.id);

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
    const filteredResourceItem = filteredResource(id);

    if (filteredResourceItem === undefined) {
      return;
    }

    resourceHandler(
      resource.filter(item => item.id !== filteredResourceItem.id),
    );
  };

  return (
    <FlexContainer>
      <SideBar
        resource={resource}
        onAddResource={handleAddResource}
        onDeleteResource={handleDeleteResource}
        onUpdateResource={handleUpdateResource}
      />
      <Viewer />
    </FlexContainer>
  );
}

const FlexContainer = styled.div`
  display: flex;
  flex: 1;
`;
