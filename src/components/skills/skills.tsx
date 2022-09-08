import { EchartsLoader } from './echartsLoader';

interface Props {
  darkMode: boolean;
}

export const Skills = (props: Props) => {
  const { darkMode } = props;
  return (
    <>
      <EchartsLoader darkMode={darkMode} />
    </>
  );
};
