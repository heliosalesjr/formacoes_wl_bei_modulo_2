"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';

/**
 * Marks a section as "viewed" (via SidebarContext) once it scrolls into view.
 * Attach the returned ref to the element that should trigger the mark.
 *
 * @param {string} id - id used by SidebarContext.markAsViewed / isViewed
 * @param {number} [threshold=0.5] - fraction of the element that must be visible (0-1)
 * @returns {React.RefObject} ref to attach to the tracked element
 *
 * @example
 * const ref = useMarkViewedOnVisible('my-section');
 * return <section ref={ref} id="my-section">...</section>;
 */
export function useMarkViewedOnVisible(id, threshold = 0.5) {
  const ref = useRef(null);
  const { markAsViewed } = useSidebar();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed(id);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [markAsViewed, id, threshold]);

  return ref;
}
