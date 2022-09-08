import { Grid } from '@mui/material';
import ReactEcharts from 'echarts-for-react';

interface Props {
  darkMode: boolean;
}

/**
 * Refer = https://echarts.apache.org/examples/en/editor.html?c=pie-roseType-simple&theme=dark
 */
export const EchartRosePieChart = (props: Props) => {
  const { darkMode } = props;

  const skillsData = [
    { value: 60, name: 'React' },
    { value: 55, name: 'TypeScript' },
    { value: 50, name: 'Material UI' },
    { value: 45, name: 'Node.js | Express.js' },
    { value: 35, name: 'HTML | CSS | JavaScript' },
    { value: 30, name: 'Data Visualization: ECharts' },
  ];

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
        data: skillsData,
      },
    ],
  };
  return (
    <Grid container>
      <ReactEcharts
        option={option}
        theme={`${darkMode === true ? 'dark' : ''}`}
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
