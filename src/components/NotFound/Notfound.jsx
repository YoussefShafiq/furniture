import React from 'react'
import errorImg from '../../assets/images/404new.gif'

export default function Notfound() {
    return (
        <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
            <img src={errorImg} alt="" />
        </div>
    )
}
