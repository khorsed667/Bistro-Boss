import React from 'react';

const Paginaton = ({item, itemsPerPage, setCurrentPage, currentPage}) => {

    const page = [];

    for(let i=1; i<= Math.ceil(item.length / itemsPerPage); i++){
        page.push(i);
    }

    return (
        <div className='my-5 mx-auto'>
            {
                page.map(num => <button onClick={()=>setCurrentPage(num)} className={`btn m-5 font-semibold ${ currentPage == num ? 'bg-main text-white' : ''}`} key={num}>{num}</button>)
            }
        </div>
    );
};

export default Paginaton;