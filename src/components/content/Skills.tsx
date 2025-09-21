import { logoImg } from '@/constants'
import React from 'react'

export default function Skills() {
    return (
        <div className='flex gap-4'>
            {logoImg.map((logo, idx) => <img className='w-56' key={idx} src={logo.imgPath} alt="" />)}
        </div>
    )
}
