import { Resource } from 'recoil/resource';

export interface ImageButtonProps {
  resource: Resource[];
  onAddResource: (param: Resource[]) => void;
}

export { ImageButtonProps };
