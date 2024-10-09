import React, {useRef,useState}from 'react'
import Card from './Card'
import { MdDescription } from 'react-icons/md'

function Foreground() {

  const ref=useRef(null); 
 

  const data = [
    {
      desc: "Hello Everyone!",
      filesize: ".9mb",
      close: true,
      tag: { 
        isOpen: true, 
        tagTitle: "Download Now", 
        tagColor: "green" 
      },
    },
    {
      desc: "Hello Everyone!",
      filesize: ".9mb",
      close: true,
      tag: { 
        isOpen: true, 
        tagTitle: "Upload", 
        tagColor: "blue" 
      },
    },
    {
      desc: "Hello Everyone!",
      filesize: ".9mb",
      close: true,
      tag: { 
        isOpen: false, 
        tagTitle: "Download Now", 
        tagColor: "green" 
      },
    },
  ];
  
  
  return (
    <div ref={ref} className='w-full h-full flex-shrink-0 fixed top-0 left-0 z-[3] flex gap-10 flex-wrap '>
        {/* <Card/> */}
        {data.map((item,index)=>(
          <Card data={item} reference={ref}/>
        ))}
    </div >
      
  )
}

export default Foreground
