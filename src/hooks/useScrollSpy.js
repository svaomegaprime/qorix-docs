import { useEffect, useState } from 'react';

export function useScrollSpy(ids, offset = 100) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      const scrollTop = window.scrollY;
      const clientHeight = window.innerHeight;
      const scrollHeight = document.documentElement.scrollHeight;

      // If we're at the very top, highlight the first heading
      if (scrollTop < 20 && ids.length > 0) {
        setActiveId(ids[0]);
        return;
      }

      // Clear activeId if we're at the very bottom
      if (scrollTop + clientHeight >= scrollHeight - 20) {
        setActiveId('');
        return;
      }

      const currentSection = ids.reduce((acc, id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the element is above the offset line
          if (rect.top <= offset) {
            return id;
          }
        }
        return acc;
      }, '');

      setActiveId(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [ids, offset]);

  return activeId;
}
