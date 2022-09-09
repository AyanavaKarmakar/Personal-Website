import { useState, useEffect } from 'react';
import ReactEcharts from 'echarts-for-react';

/**
 * Refer = https://echarts.apache.org/examples/en/editor.html?c=pie-roseType-simple&theme=dark
 */
export const ContactAnimation = () => {
  const DELAY_MS = 1500;

  const [data, setData] = useState([
    { value: 100, name: '' },
    { value: 100, name: '' },
    { value: 100, name: '' },
    { value: 100, name: '' },
    { value: 100, name: '' },
    { value: 100, name: '' },
    { value: 100, name: '' },
    { value: 100, name: '' },
    { value: 100, name: '' },
    { value: 100, name: '' },
  ]);

  const makeRandomData = () => {
    return [
      { value: Math.random(), name: '' },
      { value: Math.random(), name: '' },
      { value: Math.random(), name: '' },
      { value: Math.random(), name: '' },
      { value: Math.random(), name: '' },
      { value: Math.random(), name: '' },
      { value: Math.random(), name: '' },
      { value: Math.random(), name: '' },
      { value: Math.random(), name: '' },
      { value: Math.random(), name: '' },
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
