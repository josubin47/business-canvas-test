import ImageViewer from 'components/ImageViewer';
import URLViewer from 'components/URLViewer';
import React from 'react';
import { ViewerProps } from './type';
import { Button, Title, ViewerContainer, TopBar, Section } from './style';

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
