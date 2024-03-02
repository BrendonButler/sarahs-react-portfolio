import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useIsHomePage(): boolean {
  const location = useLocation();
  const [isHomePage, setIsHomePage] = useState<boolean>(sessionStorage.getItem('isHomePage') === 'true' || location.pathname === '/');

  useEffect(() => {
    setIsHomePage(location.pathname === '/');
  }, [isHomePage, location]);

  return isHomePage;
}