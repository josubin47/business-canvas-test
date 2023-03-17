import { atom, selectorFamily } from 'recoil';
import { ResourceType } from 'types/common';

interface ResourceState {
  id: number;
  type: ResourceType;
  value: string;
}

export const resourceState = atom<ResourceState[]>({
  key: 'resource',
  default: [
    {
      id: 0,
      type: 'URL',
      value: 'https://www.robinwieruch.de/react-libraries/',
    },
    {
      id: 1,
      type: 'URL',
      value: 'https://typed.do/blog-kr/how-to-make-good-usability-product/',
    },
  ],
});
