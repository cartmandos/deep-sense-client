import { RouterProvider } from 'react-router-dom';

import Router from './lib/navigation/Router';

const App = () => {
  return <RouterProvider router={Router} />;
};

export default App;
