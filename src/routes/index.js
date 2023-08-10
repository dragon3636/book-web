import Home from '@/pages/Home';
import Following from '@/pages/Following';
import Profile from '@/pages/Profile';
import Search from '@/pages/Search';
import { DeffaulLayout, SearchLayout } from '@/Layouts';

// pulbic router
export const publicRouter = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/following',
    component: Following,
  },
  {
    path: '/profile',
    component: Profile,
    layout: null,
  },
  {
    path: '/search',
    component: Search,
    layout: SearchLayout,
  },
];

export const privateRouter = [];
