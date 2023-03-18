import ImageViewer from 'components/ImageViewer';
import URLViewer from 'components/URLViewer';
import React from 'react';
import styled from 'styled-components';
import { ViewerProps } from './type';

export default function Viewer({
  selectedResource,
  onSelectedResource,
}: ViewerProps) {
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onSelectedResource(null);
  };

  return (
    <Section>
      {selectedResource !== null && (
        <>
          <TopBar>
            <Title>{selectedResource.value}</Title>
            <Button onClick={handleButtonClick}>닫기</Button>
          </TopBar>
          <ViewerContainer>
            {selectedResource.type === 'URL' ? (
              <URLViewer url={selectedResource?.value} />
            ) : (
              <ImageViewer fileName={selectedResource?.value} />
            )}
          </ViewerContainer>
        </>
      )}
    </Section>
  );
}

const Section = styled.section`
  flex: 1;
  flex-direction: column;
  height: 100vh;
`;

const TopBar = styled.section`
  background-color: #ffffff;
  height: 50px;
  border-bottom: 0.2px solid #e5e5e5;
  box-shadow: 0 8px 10px -3px #e5e5e5;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ViewerContainer = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  height: calc(100% - 100px);
`;

const Title = styled.div`
  margin-left: 10px;
`;

const Button = styled.button`
  margin-right: 10px;
`;
