import React, { useRef } from 'react';
import Card from './Card';


const Foreground = () => {
    const ref=useRef(null);
    const data = [
        {
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
        fileSize: '0.5mb',
        close: false,
        tagDetails: {
            isOpen: true,
            tagTitle: 'Upload now',
            tagColor: 'green'
        }
    },{
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
        fileSize: '0.5mb',
        close: false,
        tagDetails: {
            isOpen: false,
            tagTitle: 'Download now',
            tagColor: 'blue'
        }
    },{
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
        fileSize: '0.5mb',
        close: false,
        tagDetails: {
            isOpen: true,
            tagTitle: 'Download now',
            tagColor: 'green'
        }
    }]
    return (
        <>
            <div ref={ref} className='w-full h-full fixed z-[3] top-0 left-0 flex gap-5 flex-wrap p-5'>
                {data.map((item, index) => (
                    <Card key={index} data={item} reference={ref}/>
                ))}

            </div>
        </>
    )
}

export default Foreground
