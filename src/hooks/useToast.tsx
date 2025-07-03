import { useCallback } from "react";
import { toast as sonnerToast, Toaster, ToastOptions } from "sonner";

export function useToast() {
  const toast = useCallback((message: string, options?: ToastOptions) => {
    return sonnerToast(message, options);
  }, []);

  const success = useCallback((message: string, options?: ToastOptions) => {
    return sonnerToast.success(message, options);
  }, []);

  const error = useCallback((message: string, options?: ToastOptions) => {
    return sonnerToast.error(message, options);
  }, []);

  const dismiss = useCallback((toastId?: string) => {
    sonnerToast.dismiss(toastId);
  }, []);

  return {
    toast,
    success,
    error,
    dismiss,
  };
}

export { Toaster, ToastOptions };
