import { useEffect, useState } from 'react';
import { EchartsLoader, EchartRosePieChart } from './index';

interface Props {
  darkMode: boolean;
}

export const Skills = (props: Props) => {
  /**
   * Alt styles
   */
  let { darkMode } = props;
  darkMode = !darkMode;

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
      {isLoading === false && <EchartRosePieChart darkMode={darkMode} />}
    </>
  );
};
