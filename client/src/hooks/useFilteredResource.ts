import { useRecoilValue } from 'recoil';
import { filteredResourceState } from 'recoil/resource';

export default function useFilteredResource(id: number) {
  return useRecoilValue(filteredResourceState(id));
}
