import React from 'react';
import './App.css';
import { BasicTable } from './components/basicTable';
import ColumnHiding from './components/columnHiding';
import ColumnOrder from './components/columnOrder';
import FilteringTable from './components/filteringTable';
import PaginationTable from './components/paginationTable';
import RowSelection from './components/rowSelection';
import SortingTable from './components/sortingTable';


function App() {
  return (
   <div>
     <ColumnHiding />
     {/* <ColumnOrder /> */}
     {/* <RowSelection /> */}
     {/* <PaginationTable /> */}
     {/* <FilteringTable /> */}
     {/* <SortingTable /> */}
     {/* <BasicTable /> */}

   </div>
  );
}

export default App;
