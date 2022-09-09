import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import ReactEcharts from 'echarts-for-react';

/**
 * Refer = https://echarts.apache.org/examples/en/editor.html?c=pie-roseType-simple&theme=dark
 */
export const ContactAnimation = () => {
  const DELAY_MS = 1500;

  const [data, setData] = useState([
    { value: 100, name: 'Full Name' },
    { value: 100, name: 'Email ID' },
    { value: 100, name: 'Message' },
  ]);

  const makeRandomData = () => {
    return [
      { value: Math.random(), name: 'Full Name' },
      { value: Math.random(), name: 'Email ID' },
      { value: Math.random(), name: 'Message' },
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
      theme={'light'}
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
