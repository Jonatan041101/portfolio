'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { links } from './MenuMobile';
import { useBearStore } from '@/store/store';
export default function LinksPage() {
  const { changePage, page } = useBearStore((state) => state);

  const handleChangePage = (index: number) => {
    changePage(index);
  };
  return (
    <motion.ul className="header__links">
      {links.map((link, index) => (
        <a
          href={link.route}
          key={link.id}
          onClick={() => handleChangePage(index)}
        >
          <li className="header__lis">
            {link.name}
            {page === index && (
              <motion.div className="underline" layoutId="underline" />
            )}
          </li>
        </a>
      ))}
    </motion.ul>
  );
}
