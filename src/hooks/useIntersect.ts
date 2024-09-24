import { useEffect, useCallback, useRef } from "react";

type IntersectHandler = (
  entry: IntersectionObserverEntry,
  observer: IntersectionObserver
) => void;

interface Props {
  onIntersect: IntersectHandler;
  options?: IntersectionObserverInit;
}

// 특정 요소가 뷰포트에 진입하거나 교차할 때 onIntersect 콜백을 실행하며, IntersectionObserver를 설정하고 관리하는 역할
export default function useIntersect({ onIntersect, options }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const callback = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) onIntersect(entry, observer);
      });
    },
    [onIntersect]
  );

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(callback, options);
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref, options, callback]);

  return ref;
}
