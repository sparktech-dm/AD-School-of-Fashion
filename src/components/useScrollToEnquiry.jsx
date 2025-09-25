import { useNavigate, useLocation } from 'react-router-dom';

export function useScrollToEnquiry() {
  const navigate = useNavigate();
  const location = useLocation();

  function scrollToEnquiry() {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollToEnquiry: true } });
    } else {
      const element = document.getElementById('enquiry');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return scrollToEnquiry;
}
