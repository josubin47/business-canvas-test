import styled from 'styled-components';
//import { LayoutProps } from './type';

export default function SideBar() {
  return (
    <Section>
      <ButtonContainer>
        <Button>URL 추가</Button>
        <Button>이미지 추가</Button>
        <ListContainer></ListContainer>
      </ButtonContainer>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex: none;
  width: 20%;
  min-width: 250px;
  background-color: #f7f7f7;
  border-right: 1px solid #c4c4c4;
`;

const ButtonContainer = styled.div`
  background-color: #ffffff;
  height: 20px;
  width: 100%;
  border-bottom: 0.2px solid #e5e5e5;
  box-shadow: 0 8px 5px -3px #e5e5e5;
  padding: 10px;
`;

const Button = styled.button`
  width: 50%;
  height: 100%;
`;

const ListContainer = styled.div``;
