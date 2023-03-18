import styled from 'styled-components';

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

export { Button, Title, ViewerContainer, TopBar, Section };
