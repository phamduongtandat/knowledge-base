import React, { useState } from 'react'
import checkLogin from './../../utils/checkLogin';
import { useDispatch, useSelector } from 'react-redux';
import { getHome } from '../../redux/filterSlice';


function BlogFilterOpt() {
    const dispatch = useDispatch()
    const isAll = useSelector(state => state.filter.isAll)
    //let blogFilter = JSON.parse(localStorage.getItem('blogFilter')) || isAll || 'all'
    console.log(' isAll:', isAll)
    const optionList = [

        { label: 1, name: 'all', },
        { label: 2, name: 'only-me', },


    ]

    const handleSelect = (label) => {
        console.log(' label:', label)
        if (label === 1) {
            dispatch(getHome('all'))

        }
        if (label === 2) {
            dispatch(getHome('only-me'))
        }

    }

    return (
        <div className="relative kb-shadow-white-bg w-36 rounded-lg ">

            {optionList.map(({ label, name }) => {
                return <div
                    key={label}
                    className="flex  justify-start items-center gap-3 pl-7 py-3 rounded-lg hover:bg-kb-neutral-50/50 "
                // onClick={() => { handleSelect(label) }}
                >
                    <input type="checkbox" checked={isAll === name} onChange={() => { handleSelect(label) }} />
                    <div className="l3-b text-kb-neutral-300">{name}</div>
                </div>
            })}

        </div>
    )
}

export default BlogFilterOpt
