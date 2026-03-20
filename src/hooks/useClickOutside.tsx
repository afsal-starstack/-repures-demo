import { useEffect } from 'react';

export function useClickOutside(
  refs: any, // Simple approach
  handler: () => void
) {
  useEffect(() => {
    const refsArray = Array.isArray(refs) ? refs : [refs];
    
    const handleClickOutside = (event: MouseEvent) => {
      const isOutside = refsArray.every((ref: any) => 
        ref.current && !ref.current.contains(event.target as Node)
      );
      
      if (isOutside) {
        handler();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [refs, handler]);
}