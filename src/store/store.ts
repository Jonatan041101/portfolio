import { create, StateCreator } from 'zustand';

interface SliceHeader {
  page: number;
  changePage: (page: number) => void;
}

const sliceHeader: StateCreator<SliceHeader> = (set) => ({
  page: 0,
  changePage: (page) => {
    set((state) => ({ ...state, page }));
  },
});

export const useBearStore = create<SliceHeader>((...set) => ({
  ...sliceHeader(...set),
}));
