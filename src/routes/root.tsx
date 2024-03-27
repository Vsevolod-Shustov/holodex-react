import { Outlet } from "react-router-dom";
import '../App.css'
import Header from '../components/Header';

export default function Root() {
  return (
    <div className='app dark'>
      <div className='styles-wrapper dark:bg-slate-900 dark:text-slate-100'>
        <Header></Header>
        <main>
          <Outlet></Outlet>
        </main>
      </div>
    </div>
  );
}