import React, { useMemo } from 'react'
import DataTable from 'react-data-table-component';
import styled from 'styled-components';



function Table_Tareo() {

  const handleButtonClick = () => {
		
		console.log('clicked');
	};

  const columns= useMemo( ()=>[
    {
      title:"Nombres",
      selector:"nombres",
      sortable:true
    },
    {
      title:"Apellidos",
      selector:"apellidos",
      sortable:true
    },
    {
      title:"DNI",
      selector:"dni",
      sortable:true
    },
    {
      title:"Tareo",
      cell: () => <button onClick={handleButtonClick}>Registrar</button>,
				ignoreRowClick: true,
				allowOverflow: true,
				button: true,
    },
    {
      title:"Licencia con goce",
      cell: () => <button onClick={handleButtonClick}>Registrar</button>,
				ignoreRowClick: true,
				allowOverflow: true,
				button: true,
    },
    {
      title:"Licencia sin goce",
      cell: () => <button onClick={handleButtonClick}>Registrar</button>,
				ignoreRowClick: true,
				allowOverflow: true,
				button: true,
    }
    , {
      title:"Horas extras",
      cell: () => <button onClick={handleButtonClick}>Registrar</button>,
				ignoreRowClick: true,
				allowOverflow: true,
				button: true,
    }
   

  ],
  [],);

  const tabla=[
    {nombres:"Brando", apellidos:"Pinto Checya", dni:70471667},
    {nombres:"Brenda", apellidos:"Checya Pinto", dni:70472216},

  ];

  return (
    <DataTable
    title="Registros"
    data={tabla}
    col
    columns={columns}
    />
  )
}

export  {Table_Tareo}