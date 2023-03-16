import styled from 'styled-components';
import { LayoutProps } from './type';

export default function Layout({ children }: LayoutProps) {
  const Wrapper = styled.main``;

  return <Wrapper>{children}</Wrapper>;
}
