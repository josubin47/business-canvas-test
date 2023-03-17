import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';
import { LayoutProps } from './type';

export default function Layout({ children }: LayoutProps) {
  return (
    <Wrapper>
      <ToastContainer />
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.main`
  display: flex;
  height: 100%;
`;
