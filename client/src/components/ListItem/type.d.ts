import { Resource } from 'recoil/resource';

export interface ItemProps {
  resource: Resource;
  onUpdateResource: (param: Resource) => void;
  onDeleteResource: (id: number) => void;
  onSelectedResource: (id: number | null) => void;
  isSelected: boolean;
}

export interface ItemStyleProps {
  isSelected: boolean;
}

export { ItemProps, ItemStyleProps };
