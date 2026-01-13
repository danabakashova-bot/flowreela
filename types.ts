
export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export enum FormStatus {
  IDLE = 'idle',
  SUBMITTING = 'submitting',
  SUCCESS = 'success'
}

export interface StatItem {
  label: string;
  value: string;
}
