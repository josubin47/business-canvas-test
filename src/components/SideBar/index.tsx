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
  width: 300px;
  background-color: #f7f7f7;
  border-right: 1px solid #c4c4c4;
`;

const ButtonContainer = styled.div`
  background-color: #ffffff;
  height: 30px;
  width: 100%;
  border-bottom: 0.2px solid #e5e5e5;
  box-shadow: 0 8px 10px -3px #e5e5e5;
  display: flex;
  justify-content: center;
  align-items: center;
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

const ListContainer = styled.div``;
