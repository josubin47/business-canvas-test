import styled from 'styled-components';
import SideBar from '../components/SideBar';
import Viewer from '../components/Viewer';

export default function Main() {
  return (
    <FlexContainer>
      <SideBar />
      <Viewer />
    </FlexContainer>
  );
}

const FlexContainer = styled.div`
  display: flex;
  flex: 1;
`;
