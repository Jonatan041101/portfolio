'use client';
import { Burger } from '../icons';
import useBurger from '@/hooks/useBurger';

export default function BottomBurger() {
  const { burger, routes, viewRoutes, burgerButtonTop } = useBurger();
  const zIndex = burgerButtonTop ? 1 : 20;

  return (
    <div
      className="burger__bottom"
      style={{
        zIndex,
        right: `${viewRoutes && !burgerButtonTop ? '.3125em' : '0'}`,
      }}
    >
      <div onClick={() => routes(false)}>
        <Burger burger={burger} view={viewRoutes} />
      </div>
    </div>
  );
}
