import { Resource } from 'recoil/resource';

export interface SideBarProps {
  resource: Resource[];
  onAddResource: (param: Resource[]) => void;
  onUpdateResource: (param: Resource) => void;
  onDeleteResource: (id: number) => void;
}

export { SideBarProps };
