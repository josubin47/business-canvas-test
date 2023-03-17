import { Resource } from 'recoil/resource';

export interface URLInputProps {
  visible: boolean;
  toggleVisible: () => void;
  resource: Resource[];
  onAddResource: (param: Resource[]) => void;
}

export interface InputContainerProps {
  visible: boolean;
}
