import { useEffect } from 'react';

const useScrollObserver = (changeMenu) => {
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.id === 'about-us') {
            changeMenu(0);
          } else if (entry.target.id === 'cooperation') {
            changeMenu(1);
          } else if (entry.target.id === 'offer') {
            changeMenu(2);
          } else if (entry.target.id === 'portfolio') {
            changeMenu(3);
          } else if (entry.target.id === 'contact') {
            changeMenu(5);
          }
        }
      });
    };

    let threshold;
    const observer = new IntersectionObserver(observerCallback, { threshold });

    const observeSections = () => {
      const sections = document.querySelectorAll('.observer-navbar');
      sections.forEach(section => {
        section.offsetHeight > 500 ? threshold = 0.3 : threshold = 0.1;
        observer.observe(section);
      });
    };

    observeSections();

    const observerMutation = new MutationObserver((mutations) => {
      mutations.forEach(mutation => {
        if (mutation.type === 'childList') {
          observeSections();
        }
      });
    });

    observerMutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      observerMutation.disconnect();
    };
  }, [changeMenu]);
};

export default useScrollObserver;
