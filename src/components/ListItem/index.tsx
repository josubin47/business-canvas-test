import { Item } from './style';
import { ItemProps } from './type';

export default function ListItem({ url }: ItemProps) {
  return <Item>{url}</Item>;
}
