import { TResumeData } from '../types';

export async function getResumeData(): Promise<TResumeData | null> {
  const response = await fetch('/data.json');
  if (!response.ok) return null;
  const data = await response.json();
  if (!data) return null;
  return data;
}
