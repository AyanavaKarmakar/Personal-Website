import { ProjectTransition } from './index';

interface Props {
  darkMode: boolean;
}

export const Projects = (props: Props) => {
  const { darkMode } = props;

  return (
    <>
      <ProjectTransition darkMode={darkMode} />
    </>
  );
};