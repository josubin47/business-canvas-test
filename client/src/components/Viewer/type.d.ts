import { Resource } from 'recoil/resource';

export interface ViewerProps {
  selectedResource: Resource | null;
  onSelectedResource: (id: number | null) => void;
}
