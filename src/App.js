import {Route, Routes} from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Join from './pages/Join';
import {Provider} from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from './stores/Store';
import Login from './pages/Login';
import Post from './pages/Post';
import BoardList from './pages/BoardList';
import Board from './pages/Board';

function App() {
  const persiststore = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persiststore}>
        <Routes>
          <Route element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/join' element={<Join/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/post' element={<Post/>}/>
            <Route path='/board-list' element={<BoardList/>}/>
            <Route path='/board/:id' element={<Board/>}/>
          </Route>
        </Routes>
      </PersistGate>
    </Provider>
  );
};

export default App;
