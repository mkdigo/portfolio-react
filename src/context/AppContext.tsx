import { createContext, useEffect, useState } from 'react';
import { getResumeData } from '../api/getResumeData';
import { TResumeData } from '../types';

type TContext = {
  resumeData: TResumeData | undefined;
};

export const AppContext = createContext<TContext>({} as TContext);

export function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [resumeData, setResumeData] = useState<TResumeData>();

  useEffect(() => {
    getResumeData().then((data) => {
      if (!data) return;
      setResumeData(data);
    });
  }, []);

  return (
    <AppContext.Provider value={{ resumeData }}>{children}</AppContext.Provider>
  );
}
