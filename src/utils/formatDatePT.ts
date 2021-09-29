import { format, parseISO } from 'date-fns';

export function dateFormat(date: string): string {
  return format(parseISO(date), 'dd/MM/yyyy HH:mm');
}
