import './App.css';
import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loading from './components/Loading';
import { routes } from './routes/Routes';
import Header from './components/Header';

function App() {
  return (
    <div className='bg-slate-900 h-full'>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Header />
          <Routes>
            {routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={route.element}
                ></Route>
              );
            })}
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
