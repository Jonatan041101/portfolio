'use client';
import React from 'react';
import Logo from './Logo';
import { icons } from '../icons/TechsInformationId';
import BurgerAction from './BurgerAction';
import LinksPage from './LinksPage';
import { useBearStore } from '@/store/store';
import { AnimatePresence } from 'framer-motion';
import MenuMobile from './MenuMobile';
export default function Header() {
  const { viewMenuMobile, handleChangeViewMenuMobile } = useBearStore(
    (state) => state,
  );
  return (
    <header className="header">
      <AnimatePresence>
        {viewMenuMobile && <MenuMobile close={handleChangeViewMenuMobile} />}
      </AnimatePresence>
      <div className="header__div">
        <Logo />

        <ul className="header__ul">
          <LinksPage />
          {icons.map((icon, i) => (
            <li className="header__li" data-icon={icon.color === 0} key={i}>
              <a href={icon.href} target="_blank">
                {icon.icon}
              </a>
            </li>
          ))}
          <BurgerAction />
        </ul>
      </div>
    </header>
  );
}
