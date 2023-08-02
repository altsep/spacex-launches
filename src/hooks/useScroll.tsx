import { useEffect, useState } from 'react';

const useScroll = (cb: () => void, isFetching: boolean) => {
  const initialHeight = window.innerHeight;

  const [scrollbarVisible, setScrollbarVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;

      if (scrolledToBottom && !isFetching) {
        cb();
      }

      setScrollbarVisible(initialHeight < document.body.offsetHeight);
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [cb, initialHeight, isFetching]);

  return scrollbarVisible;
};

export { useScroll };
