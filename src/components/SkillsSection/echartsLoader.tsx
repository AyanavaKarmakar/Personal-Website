import { Grid } from '@mui/material';
import ReactEcharts from 'echarts-for-react';

/**
 * Refer = https://echarts.apache.org/examples/en/editor.html?c=graphic-loading&theme=dark
 */
export const EchartsLoader = () => {
  const option = {
    graphic: {
      elements: [
        {
          type: 'group',
          left: 'center',
          top: 'center',
          children: new Array(7).fill(0).map((val, i) => ({
            type: 'rect',
            x: i * 20,
            shape: {
              x: 0,
              y: -40,
              width: 10,
              height: 80,
            },
            style: {
              fill: '#5470c6',
            },
            keyframeAnimation: {
              duration: 1000,
              delay: i * 200,
              loop: true,
              keyframes: [
                {
                  percent: 0.5,
                  scaleY: 0.3,
                  easing: 'cubicIn',
                },
                {
                  percent: 1,
                  scaleY: 1,
                  easing: 'cubicOut',
                },
              ],
            },
          })),
        },
      ],
    },
  };
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
