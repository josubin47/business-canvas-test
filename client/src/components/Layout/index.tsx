import styled from 'styled-components';
import { LayoutProps } from './type';

export default function Layout({ children }: LayoutProps) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.main`
  display: flex;
  height: 100%;
`;
