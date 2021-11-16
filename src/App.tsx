import React from 'react';
import './App.css';
import { BasicTable } from './components/basicTable';
import FilteringTable from './components/filteringTable';
import SortingTable from './components/sortingTable';


function App() {
  return (
   <div className='App'>
     <FilteringTable />
     {/* <SortingTable /> */}
     {/* <BasicTable /> */}

   </div>
  );
}

export default App;
