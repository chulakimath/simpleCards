import React from 'react'

const Background = () => {
    return (
        <>
            <div className='fixed z[-2] w-full h-screen top-0 left-0'>
                <div
                    className='absolute w-full text-center py-10  text-zinc-500 text-xl font-semibold '>
                    Documents
                </div>
                <div
                    className='absolute font-semibold tracking-tighter leading-none text-[8vw] text-zinc-600   top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                    Docs web
                </div>
            </div>

        </>
    )
}

export default Background
