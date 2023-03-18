import { atom, selectorFamily } from 'recoil';
import { ResourceType } from 'types/common';

export interface Resource {
  id: number;
  type: ResourceType;
  value: string;
  name: string;
}

export const resourceState = atom<Resource[]>({
  key: 'resourceState',
  default: [
    {
      id: 1,
      type: 'URL',
      value: 'https://www.robinwieruch.de/react-libraries/',
      name: 'https://www.robinwieruch.de/react-libraries/',
    },
    {
      id: 2,
      type: 'URL',
      value: 'https://typed.do/blog-kr/how-to-make-good-usability-product/',
      name: 'https://www.robinwieruch.de/react-libraries/',
    },
  ],
});

export const filteredResourceState = selectorFamily({
  key: 'filteredResourceState',
  get:
    (id: number) =>
    ({ get }) => {
      const resource = get(resourceState);

      return resource.find(item => {
        item.id === id;
      });
    },
});
