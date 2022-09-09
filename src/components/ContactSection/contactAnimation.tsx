import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import ReactEcharts from 'echarts-for-react';

/**
 * Refer = https://echarts.apache.org/examples/en/editor.html?c=pie-roseType-simple&theme=dark
 */
export const ContactAnimation = () => {
  const DELAY_MS = 1500;

  const [data, setData] = useState([
    { value: 100, name: 'React' },
    { value: 100, name: 'TypeScript' },
    { value: 100, name: 'Node.js | Express.js' },
    { value: 100, name: 'UI Kit: Material UI' },
    { value: 100, name: 'Data Visualization: ECharts' },
  ]);

  const makeRandomData = () => {
    return [
      { value: Math.random(), name: 'React' },
      { value: Math.random(), name: 'TypeScript' },
      { value: Math.random(), name: 'Node.js | Express.js' },
      { value: Math.random(), name: 'UI Kit: Material UI' },
      { value: Math.random(), name: 'Data Visualization: ECharts' },
    ];
  };

  const option = {
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
    const timer = setInterval(() => {
      setData(makeRandomData());
    }, DELAY_MS);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <ReactEcharts
      option={option}
      theme={'dark'}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        minWidth: '10vw',
      }}
    />
  );
};
