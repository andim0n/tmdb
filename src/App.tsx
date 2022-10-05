import './assets/styles/global.scss';
import ItemList from './components/ItemList/ItemList';
import { IItem } from './types/types';
// import { Routes, Navigate, Route } from 'react-router-dom';
// import loadable from '@loadable/component';
// import Index from './pages/Index';

// const Home = loadable(() => import('./pages/Home'));
// const Image = loadable(() => import('./pages/Image'));

const App = (): JSX.Element => {
  const items: IItem[] = [
    { id: 1, title: 'first' },
    { id: 2, title: 'second' },
  ];
  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};
export default App;
