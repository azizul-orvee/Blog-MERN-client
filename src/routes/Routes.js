import { lazy } from 'react';
import EditPost from '../components/EditPost';

const CreateData = lazy(() => import('../pages/CreateData'));
const Home = lazy(() => import('../pages/Home'));

export const routes = [
  {
    name: 'Home',
    path: '/',
    element: <Home />,
  },
  {
    name: 'CreateData',
    path: '/createdata',
    element: <CreateData />,
  },
  {
    name: 'EditPost',
    path: 'edit/:id',
    element: <EditPost />,
  },
];
