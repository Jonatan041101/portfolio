import { create, StateCreator } from 'zustand';

interface SliceHeader {
  page: number;
  changePage: (page: number) => void;
}
interface Menu {
  viewMenuMobile: boolean;
  burgerButtonTop: boolean;
  handleChangeViewMenuMobile: (view: boolean) => void;
  handleChangeButtonTop: (top: boolean) => void;
}
const sliceHeader: StateCreator<SliceHeader> = (set) => ({
  page: 0,
  changePage: (page) => {
    set((state) => ({ ...state, page }));
  },
});
const sliceMenu: StateCreator<Menu> = (set) => ({
  viewMenuMobile: false,
  burgerButtonTop: false,
  handleChangeViewMenuMobile: (view) => {
    set((state) => ({ ...state, viewMenuMobile: view }));
  },
  handleChangeButtonTop: (top) => {
    set((state) => ({ ...state, burgerButtonTop: top }));
  },
});
export const useBearStore = create<SliceHeader & Menu>((...set) => ({
  ...sliceHeader(...set),
  ...sliceMenu(...set),
}));
