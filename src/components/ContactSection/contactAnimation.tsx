import { useState, useEffect } from 'react';
import ReactEcharts from 'echarts-for-react';

/**
 * Refer = https://echarts.apache.org/examples/en/editor.html?c=pie-roseType-simple&theme=dark
 */
export const ContactAnimation = () => {
  const DELAY_MS = 1500;

  const [data, setData] = useState([
    { value: 0, name: '' },
    { value: 0, name: '' },
    { value: 0, name: '' },
    { value: 0, name: '' },
    { value: 0, name: '' },
    { value: 0, name: '' },
    { value: 0, name: '' },
    { value: 0, name: '' },
    { value: 0, name: '' },
    { value: 0, name: '' },
  ]);

  const makeRandomData = () => {
    return [
      { value: Math.floor(Math.random() * 100 + 40), name: '' },
      { value: Math.floor(Math.random() * 100 + 40), name: '' },
      { value: Math.floor(Math.random() * 100 + 40), name: '' },
      { value: Math.floor(Math.random() * 100 + 40), name: '' },
      { value: Math.floor(Math.random() * 100 + 40), name: '' },
      { value: Math.floor(Math.random() * 100 + 40), name: '' },
      { value: Math.floor(Math.random() * 100 + 40), name: '' },
      { value: Math.floor(Math.random() * 100 + 40), name: '' },
      { value: Math.floor(Math.random() * 100 + 40), name: '' },
      { value: Math.floor(Math.random() * 100 + 40), name: '' },
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
        minWidth: '100vw',
      }}
    />
  );
};
