import { useEffect, useState } from 'react';
import { EchartsLoader } from './echartsLoader';
import { EchartRosePieChart } from './echartRosePieChart';

interface Props {
  darkMode: boolean;
}

export const Skills = (props: Props) => {
  const { darkMode } = props;
  const [isLoading, setIsLoading] = useState(true);
  const DELAY_MS = 3000;

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
      {isLoading === true && <EchartsLoader darkMode={darkMode} />}
      {isLoading === false && <EchartRosePieChart />}
    </>
  );
};
