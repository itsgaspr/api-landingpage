import { useCallback, useEffect, useRef, useState } from "react";

const SUCCESS_DISMISS_MS = 5000;

export function useFormStatus(dismissMs = SUCCESS_DISMISS_MS) {
  const [status, setStatus] = useState(null);
  const timerRef = useRef(null);

  const clearStatus = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setStatus(null);
  }, []);

  useEffect(
    () => () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    },
    []
  );

  const showStatus = useCallback(
    (next) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }

      setStatus(next);

      if (next?.type === "success") {
        timerRef.current = setTimeout(() => {
          setStatus(null);
          timerRef.current = null;
        }, dismissMs);
      }
    },
    [dismissMs]
  );

  const showSuccess = useCallback(
    (message, resetForm) => {
      resetForm?.();
      showStatus({ type: "success", message });
    },
    [showStatus]
  );

  return { status, showStatus, showSuccess, clearStatus };
}
