import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './router';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkerAlt, faUser, faChevronDown, faCartShopping, faMagnifyingGlass, faHeart, faStar, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

library.add(fab, faMapMarkerAlt, faUser, faChevronDown, faCartShopping, faMagnifyingGlass, farHeart, faHeart, faStar, faCircleInfo)

function App() {
  return (
    <RouterProvider router={routes}/>
  );
}

export default App;
