import React from 'react'

const HeaderItem = ({name,Icon}) => {
  return (
    <div className='text-white mb-3 flex items-center gap-3 text-[30px] font-semibold cursor-pointer hover:underline underline-offset-8'>
      <Icon />
      <h2 className=''>{name}</h2>
    </div>
  )
}

export default HeaderItem
