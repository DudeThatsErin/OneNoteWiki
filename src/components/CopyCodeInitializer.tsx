'use client';

import { useEffect, useState } from 'react';
import { initializeCopyButtons } from '@/utils/copyCode';

export function CopyCodeInitializer() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    // Delay initialization to ensure hydration is complete
    const timer = setTimeout(() => {
      const cleanup = initializeCopyButtons();
      return cleanup;
    }, 100);

    return () => clearTimeout(timer);
  }, [isMounted]);

  // Temporarily disable periodic re-initialization since we're using CodeBlock components
  // useEffect(() => {
  //   if (!isMounted) return;
    
  //   const reinitialize = () => {
  //     setTimeout(() => {
  //       initializeCopyButtons();
  //     }, 200);
  //   };

  //   // Listen for navigation events
  //   window.addEventListener('popstate', reinitialize);
    
  //   // Also reinitialize periodically to catch dynamic content
  //   const interval = setInterval(reinitialize, 2000);

  //   return () => {
  //     window.removeEventListener('popstate', reinitialize);
  //     clearInterval(interval);
  //   };
  // }, [isMounted]);

  return null;
}
