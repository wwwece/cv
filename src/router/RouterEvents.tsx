import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useStore } from '../store';

const RouterEvents = () => {
  const {
    eventsStore: { triggerEvent },
  } = useStore();

  const location = useLocation();

  useEffect(() => {
    triggerEvent('navigate', { path: location.pathname });
  }, [location, triggerEvent]);

  return null;
};

export default RouterEvents;
