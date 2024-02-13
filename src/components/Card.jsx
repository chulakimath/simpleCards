import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { motion } from 'framer-motion';
const Card = ({ data, reference }) => {
    return (
        <motion.div
            drag dragConstraints={reference}
            whileDrag={{ scale: 1.1 }}
            dragElastic={0.2}
            dragTransition={{ bounceStiffness: 100, bounceDamping: 20 }}
            className='relative w-60 h-72  rounded-[45px] bg-zinc-900/90 text-white py-10 px-8 overflow-hidden flex-shrink-0'>
            <FaRegFileAlt />
            <p className='text-sm mt-5 font-semibold leading-tight'>{data.description}</p>
            <div className='foot absolute w-full bottom-0 left-0'>
                <div className='flex items-center justify-between mb-3  px-10  py-3'>
                    <h5>{data.fileSize}</h5>
                    <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                        {data.close ? <MdClose size='1.2em' color='white' /> : <MdOutlineFileDownload size='1.2em' color='white' />}
                    </span>
                </div>

                {data.tagDetails.isOpen &&
                    (<div className={`tag w-full py-4 ${data.tagDetails.tagColor === 'blue' ? 'bg-blue-600' : 'bg-green-600'}  flex items-center justify-center`}>
                        <h3 className='text-sm font-semibold'>{data.tagDetails.tagTitle}</h3>
                    </div>)
                }


            </div>
        </motion.div>
    )
}

export default Card
