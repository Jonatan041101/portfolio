import { useBearStore } from '@/store/store';
import { useCycle } from 'framer-motion';

export default function useBurger() {
  const {
    handleChangeViewMenuMobile,
    viewMenuMobile,
    burgerButtonTop,
    handleChangeButtonTop,
  } = useBearStore((state) => state);
  const [burger, toogleBurger] = useCycle<boolean>(true, false);
  const closeRoutes = () => {
    document.body.style.overflowY = 'auto';
    toogleBurger();
    handleChangeViewMenuMobile(false);
  };
  const routes = (top: boolean) => {
    viewMenuMobile
      ? (document.body.style.overflowY = 'auto')
      : (document.body.style.overflowY = 'hidden');
    toogleBurger();
    handleChangeButtonTop(top);
    handleChangeViewMenuMobile(!viewMenuMobile);
  };

  return {
    viewRoutes: viewMenuMobile,
    burgerButtonTop,
    burger,
    closeRoutes,
    routes,
    toogleBurger,
  };
}
