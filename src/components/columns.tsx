import { format } from 'date-fns';
import  ColumnFilter from './columnFilter'

export const COLUMNS = [
    {
        Header: 'Id',
        Footer: 'id',
        accessor: 'id',
        Filter: ColumnFilter,
        disableFilters : true
    },
    {
        Header: 'First Name',
        Footer: 'First Name',
        accessor: 'first_name',
    },
    {
        Header: 'Last Name',
        Footer: 'last Name',
        accessor: 'last_name',
    },
    {
        Header: 'Date of Birth',
        Footer: 'Date of Birth',
        accessor: 'date_of_birth',
        Cell: ({value}) => { return format(new Date(value), 'dd/MM/yyy')},
    },
    {
        Header: 'Country',
        Footer: 'Country',
        accessor: 'country',
    },
    { 
        Header: 'Phone',
        Footer: 'Phone',
        accessor: 'phone',
     }
]

export const GROUPED_COLUMNS = [
    { 
        Header: 'Id',
        Footer: 'id',
        accessor: 'id'
    }, 
    {
        Header: 'Name',
        Footer: 'Name',
        columns: [
            {
                Header: 'First Name',
                Footer: 'first-name',
                accessor: 'first-name'
            },
            {
                Header: 'Last Name',
                Footer: 'last-name',
                accessor: 'last-name'
            },
        ]
    },
    {
        Header: 'Info',
        Footer: 'Info',
        columns: [
            {
                Header: 'Date of Birth',
                Footer: 'date_of_birth',
                accessor: 'date_of_birth'
            },
            {
                Header: 'Country',
                Footer: 'country',
                accessor: 'country'
            },
            {
                Header: 'Phone',
                Footer: 'phone',
                accessor: 'phone'
            }
        ]

    }
]