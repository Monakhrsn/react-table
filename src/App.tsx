import React from 'react';
import './App.css';
import { BasicTable } from './components/basicTable';
import ColumnHiding from './components/columnHiding';
import ColumnOrder from './components/columnOrder';
import FilteringTable from './components/filteringTable';
import PaginationTable from './components/paginationTable';
import RowSelection from './components/rowSelection';
import SortingTable from './components/sortingTable';
import StickyTable from './components/stickyTable';


function App() {
  return (
   <div>
     <StickyTable /> 
   </div>
  );
}

export default App;
