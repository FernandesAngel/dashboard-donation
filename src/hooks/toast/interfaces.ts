export type ToastTypeProps = 'success' | 'alert' | 'error';
export interface ToastContextData {
  addToast: (message: string, type: ToastTypeProps) => void;
}
