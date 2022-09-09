import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import ReactEcharts from 'echarts-for-react';

/**
 * Refer = https://echarts.apache.org/examples/en/editor.html?c=pie-roseType-simple&theme=dark
 */
export const EchartRosePieChart = () => {
  const DELAY_MS = 1500;

  const [data, setData] = useState([
    { value: 0, name: 'React' },
    { value: 0, name: 'TypeScript' },
    { value: 0, name: 'Node.js | Express.js' },
    { value: 0, name: 'UI Kit: Material UI' },
    { value: 0, name: 'Data Visualization: ECharts' },
  ]);

  const makeRandomData = () => {
    return [
      { value: Math.floor(Math.random() * 100 + 40), name: 'React' },
      { value: Math.floor(Math.random() * 100 + 40), name: 'TypeScript' },
      { value: Math.floor(Math.random() * 100 + 40), name: 'Node.js | Express.js' },
      { value: Math.floor(Math.random() * 100 + 40), name: 'UI Kit: Material UI' },
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
    const timer = setInterval(() => {
      setData(makeRandomData());
    }, DELAY_MS);

    return () => {
      clearInterval(timer);
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
