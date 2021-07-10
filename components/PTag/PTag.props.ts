import { HTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface PTagProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  appearance?: 'small' | 'medium' | 'big';
  children: ReactNode;
}