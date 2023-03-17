import { Resource } from 'recoil/resource';

export interface SideBarProps {
  resource: Resource[];
  selectedResource: Resource | null;
  onAddResource: (param: Resource[]) => void;
  onUpdateResource: (param: Resource) => void;
  onDeleteResource: (id: number) => void;
  onSelectedResource: (id: number | null) => void;
}

export { SideBarProps };
