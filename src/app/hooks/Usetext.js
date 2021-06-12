import {useLocation} from 'react-router-dom';

const Usetext = () => {
  return new URLSearchParams(useLocation().search);
}

export default Usetext;
