"use client";
import { useEffect, useRef } from 'react';
import { useSidebar } from '@/contexts/SidebarContext';

/**
 * Marks a section as "viewed" (via SidebarContext) once it scrolls into view.
 * Attach the returned ref to the element that should trigger the mark.
 *
 * The requested threshold is the fraction of the element's own area that must
 * intersect the viewport. For an element taller than ~2x the viewport, that
 * ratio is mathematically unreachable (max reachable ratio = viewportHeight /
 * elementHeight) — the checkmark would then never fire. To avoid needing a
 * hand-picked threshold per tall section, the effective threshold is clamped
 * to the element's actual max-reachable ratio (with a safety margin) at mount
 * time, so long sections still trigger while short ones keep the requested
 * threshold unchanged.
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
    const node = ref.current;
    if (!node) return;

    const maxReachableRatio = window.innerHeight / node.getBoundingClientRect().height;
    const effectiveThreshold = Math.min(threshold, maxReachableRatio * 0.8);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markAsViewed(id);
        }
      },
      { threshold: effectiveThreshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [markAsViewed, id, threshold]);

  return ref;
}
