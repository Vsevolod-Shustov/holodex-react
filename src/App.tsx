import './App.css'
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className='app dark'>
      <div className='styles-wrapper dark:bg-slate-900 dark:text-slate-100'>
        <Header></Header>
        <div className='content p-4 '>
          <Home></Home>
        </div>
      </div>
    </div>
  )
}

export default App