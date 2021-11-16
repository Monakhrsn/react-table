import React from 'react';
import './App.css';
import { BasicTable } from './components/basicTable';
import FilteringTable from './components/filteringTable';
import PaginationTable from './components/paginationTable';
import SortingTable from './components/sortingTable';


function App() {
  return (
   <div className='App'>
     <PaginationTable />
     {/* <FilteringTable /> */}
     {/* <SortingTable /> */}
     {/* <BasicTable /> */}

   </div>
  );
}

export default App;
