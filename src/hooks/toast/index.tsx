import React, { createContext, useCallback, useContext } from 'react';
import { toast } from 'react-toastify';
import { ToastContextData, ToastTypeProps } from './interfaces';

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

export const ToastProvider: React.FC = ({ children }) => {
  const addToast = useCallback((message: string, type: ToastTypeProps) => {
    switch (type) {
      case 'success':
        return toast.success(message, {
          className: 'black-background',
        });
      case 'error':
        return toast.error(message, {
          className: 'black-background',
        });
      case 'alert':
        return toast.warn(message, {
          className: 'black-background',
        });
      default:
        return toast(message, {
          className: 'black-background',
        });
    }
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  return context;
}
