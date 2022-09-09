import { useEffect, useState } from 'react';
import { EchartsLoader, EchartRosePieChart } from './index';

export const Skills = () => {
  const [isLoading, setIsLoading] = useState(true);
  const DELAY_MS = 1500;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);

      return () => {
        clearTimeout(timer);
      };
    }, DELAY_MS);
  }, []);

  return (
    <>
      {isLoading === true && <EchartsLoader />}
      {isLoading === false && <EchartRosePieChart />}
    </>
  );
};
