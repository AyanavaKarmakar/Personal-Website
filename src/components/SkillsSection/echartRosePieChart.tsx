import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import ReactEcharts from 'echarts-for-react';

/**
 * @see https://echarts.apache.org/examples/en/editor.html?c=pie-roseType-simple&theme=dark
 */
export const EchartRosePieChart = () => {
  const DELAY_MS = 1500;
  const INTERVAL_MS = 1500;

  const [data, setData] = useState([{ value: 0, name: 'Next.js' }]);

  const makeRandomData = () => {
    return [
      { value: Math.floor(Math.random() * 100 + 40), name: 'Next.js' },
      { value: Math.floor(Math.random() * 100 + 40), name: 'TypeScript | JavaScript' },
      { value: Math.floor(Math.random() * 100 + 40), name: 'Firebase' },
      { value: Math.floor(Math.random() * 100 + 40), name: 'React Native + Expo' },
      { value: Math.floor(Math.random() * 100 + 40), name: 'Node.js | Express.js' },
      { value: Math.floor(Math.random() * 100 + 40), name: 'UI: TailwindCSS + daisyUI' },
      { value: Math.floor(Math.random() * 100 + 40), name: 'Data Visualization: ECharts' },
    ];
  };

  const option = {
    legend: {
      top: 'top',
    },
    series: [
      {
        name: 'Skills Chart',
        type: 'pie',
        radius: [50, 250],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8,
        },
        data: data,
      },
    ],
  };

  useEffect(() => {
    const dataUpdateTimerOne = setTimeout(
      () =>
        setData([
          { value: 0, name: 'Next.js' },
          { value: 1, name: 'TypeScript | JavaScript' },
        ]),
      DELAY_MS
    );

    const dataUpdateTimerTwo = setTimeout(
      () =>
        setData([
          { value: 1, name: 'Next.js' },
          { value: 1, name: 'TypeScript | JavaScript' },
          { value: 2, name: 'Firebase' },
        ]),
      DELAY_MS * 2
    );

    const dataUpdateTimerThree = setTimeout(
      () =>
        setData([
          { value: 2, name: 'Next.js' },
          { value: 2, name: 'TypeScript | JavaScript' },
          { value: 2, name: 'Firebase' },
          { value: 3, name: 'React Native + Expo' },
        ]),
      DELAY_MS * 3
    );

    const dataUpdateTimerFour = setTimeout(
      () =>
        setData([
          { value: 3, name: 'Next.js' },
          { value: 3, name: 'TypeScript | JavaScript' },
          { value: 3, name: 'Firebase' },
          { value: 3, name: 'React Native + Expo' },
          { value: 4, name: 'Node.js | Express.js' },
        ]),
      DELAY_MS * 4
    );

    const dataUpdateTimerFive = setTimeout(
      () =>
        setData([
          { value: 4, name: 'Next.js' },
          { value: 4, name: 'TypeScript | JavaScript' },
          { value: 4, name: 'Firebase' },
          { value: 4, name: 'React Native + Expo' },
          { value: 4, name: 'Node.js | Express.js' },
          { value: 5, name: 'UI: TailwindCSS + daisyUI' },
        ]),
      DELAY_MS * 5
    );

    const dataUpdateTimerSix = setTimeout(
      () =>
        setData([
          { value: 5, name: 'Next.js' },
          { value: 5, name: 'TypeScript | JavaScript' },
          { value: 5, name: 'Firebase' },
          { value: 5, name: 'React Native + Expo' },
          { value: 5, name: 'Node.js | Express.js' },
          { value: 5, name: 'UI: TailwindCSS + daisyUI' },
          { value: 6, name: 'Data Visualization: ECharts' },
        ]),
      DELAY_MS * 6
    );

    const dataUpdateTimerFinal = setTimeout(
      () =>
        setData([
          { value: 0, name: 'Next.js' },
          { value: 0, name: 'TypeScript | JavaScript' },
          { value: 0, name: 'Firebase' },
          { value: 0, name: 'React Native + Expo' },
          { value: 0, name: 'Node.js | Express.js' },
          { value: 0, name: 'UI: TailwindCSS + daisyUI' },
          { value: 0, name: 'Data Visualization: ECharts' },
        ]),
      DELAY_MS * 7
    );

    const randomValueGenerator = setTimeout(() => {
      const timer = setInterval(() => {
        setData(makeRandomData());
      }, INTERVAL_MS);
    }, DELAY_MS * 7 + 500);

    return () => {
      clearTimeout(dataUpdateTimerOne);
      clearTimeout(dataUpdateTimerTwo);
      clearTimeout(dataUpdateTimerThree);
      clearTimeout(dataUpdateTimerFour);
      clearTimeout(dataUpdateTimerFive);
      clearTimeout(dataUpdateTimerSix);
      clearTimeout(dataUpdateTimerFinal);
    };
  }, []);

  return (
    <Grid container>
      <ReactEcharts
        option={option}
        theme="dark"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          minWidth: '100vw',
          backgroundColor: '#E0FFFF',
        }}
      />
    </Grid>
  );
};
