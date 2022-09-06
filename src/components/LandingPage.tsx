import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LandingPageLoadingAnimation } from './LandingPageLoadingAnimation';

/**
 * Refer = https://reactrouter.com/en/main/hooks/use-navigate#usenavigate
 */
export const LandingPage = () => {
  const navigate = useNavigate();
  const REDIRECT_DELAY_MS = 5000;

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, REDIRECT_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  return <LandingPageLoadingAnimation />;
};
