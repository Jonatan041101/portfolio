'use client';
import React from 'react';
import { Burger } from '../icons';
import useBurger from '@/hooks/useBurger';

export default function BurgerAction() {
  const { burger, routes, burgerButtonTop } = useBurger();
  const zIndex = burgerButtonTop ? 20 : 1;
  return (
    <li className="header__burger">
      <button
        onClick={() => routes(true)}
        className="header__btn"
        style={{
          zIndex,
        }}
      >
        <Burger burger={burger} />
      </button>
    </li>
  );
}
