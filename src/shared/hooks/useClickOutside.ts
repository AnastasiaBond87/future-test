import { useCallback, useEffect, useRef, useState } from 'react';

export default function useClickOutside<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [isOpen, setOpen] = useState(false);

  const handleClickOutside: EventListener = useCallback(
    (event) => {
      const { target } = event;

      if (target instanceof HTMLElement && ref.current && !ref.current.contains(target) && isOpen) {
        setOpen(false);
      }
    },
    [isOpen]
  );

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);

  return {
    ref,
    isOpen,
    setOpen,
  };
}
