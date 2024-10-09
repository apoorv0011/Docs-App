import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"


function Card({data,reference}) {
  return (
        <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={.2} dragTransition={{bounceStiffness:100,bounceDamping:5}} className='relative w-40 h-56 bg-zinc-900/90 px-4 py-5 rounded-[38px] text-white  overflow-hidden'>
          <FaRegFileAlt />
          <p className='relative text-xs mt-5 leading-tight font-semibold'>{data.desc} </p>
          <div className="footer absolute bottom-8 w-full h-10   left-0 ">
            <div className='flex items-center justify-between px-6 mb-3'>
              <h5>{data.filesize}</h5>
              <span className='w-6 h-6 bg-zinc-600 rounded-full flex items-center justify-center'>
              {data.close?<IoMdClose/>:<MdOutlineFileDownload size=".7em" color='#fff'/>}
              </span>
            </div>
            {
              data.tag.isOpen && (
                <div className={`tag w-full py-3 ${data.tag.tagColor==="blue"?"bg-blue-600":"bg-green-600"} flex items-center justify-center`}>
              <h3 className='text-xs'>{data.tag.tagTitle}</h3>
            </div>
              )
            }
            
          </div>
        </motion.div>
  )
}

export default Card 
