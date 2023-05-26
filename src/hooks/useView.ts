import { useBearStore } from '@/store/store';
import React, { useEffect, useRef } from 'react';

export default function useView(page: number) {
  const { changePage } = useBearStore((state) => state);
  const pageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const options = {
      threshold: 0.8, // Por defecto, el valor es 0, lo que significa que se activa cuando cualquier parte del elemento es visible
    };
    const observer = new IntersectionObserver((entry) => {
      if (entry[0].isIntersecting) {
        changePage(page);
      }
    }, options);
    if (pageRef.current) {
      observer.observe(pageRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return {
    pageRef,
  };
}
