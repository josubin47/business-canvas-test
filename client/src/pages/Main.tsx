import { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  Resource,
  resourceState,
  filteredResourceState,
} from 'recoil/resource';
import styled from 'styled-components';
import SideBar from '../components/SideBar';
import Viewer from '../components/Viewer';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Main() {
  const [selectedResource, setSelectedResource] = useState<Resource | null>(
    null,
  );

  const [resource, setResource] = useRecoilState<Resource[]>(resourceState);
  const resourceHandler = useSetRecoilState(resourceState);

  // 리소스 선택
  const handleSelectedResource = (id: number | null) => {
    const item = resource.find(item => item.id === id);
    return setSelectedResource(item ?? null);
  };

  // 리소스 추가
  const handleAddResource = (param: Resource[]) => {
    // 랜덤 딜레이
    const delay = Math.floor(Math.random() * 700) + 300;
    // 성공 확률
    const isSuccess = Math.random() < 0.8;

    setTimeout(() => {
      if (isSuccess) {
        resourceHandler([...resource, ...param]);
        toast.success('리소스 등록 성공', {
          position: 'bottom-right',
        });
      } else {
        toast.error('리소스 등록 실패', {
          position: 'bottom-right',
        });
      }
    }, delay);
  };

  // 리소스 수정
  const handleUpdateResource = (param: Resource) => {
    const data = resource.find(item => item.id === param.id);

    if (!data) {
      return;
    }

    resourceHandler(
      resource.map(item => {
        return item.id === data.id ? { ...item, value: data.value } : item;
      }),
    );
  };

  // 리소스 삭제
  const handleDeleteResource = (id: number) => {
    const data = resource.find(item => item.id === id);

    if (!data) {
      return;
    }

    resourceHandler(resource.filter(item => item.id !== data.id));
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
      <Viewer
        selectedResource={selectedResource}
        onSelectedResource={handleSelectedResource}
      />
    </FlexContainer>
  );
}

const FlexContainer = styled.div`
  display: flex;
  flex: 1;
`;
