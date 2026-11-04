import React from 'react'
import logo from '../assets/Images/logo.png'

import { 
  HiHome, 
  HiMagnifyingGlass, 
  HiStar, 
  HiPlayCircle, 
  HiTv } from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from './HeaderItem';

const Header = () => {
const menu = [
  { name: 'Home', icon: HiHome },
  { name: 'Search', icon: HiMagnifyingGlass },
  { name: 'Watchlist', icon: HiPlus },
  { name: 'Originals', icon: HiStar },
  { name: 'Movies', icon: HiPlayCircle },
  { name: 'Series', icon: HiTv },
  // { name: 'More', icon: HiDotsVertical }
];
const [toggle, setToggle] = React.useState(false);
  return (
    <div className='flex  items-center p-5 justify-between'>
<div className='flex gap-8 items-center'>
<img src={logo} alt="logo" className='w-[80px] object-cover' />
<div className='hidden md:flex gap-8'>
{menu.map((item)=>(
<HeaderItem  name={item.name} Icon={item.icon} />
))}
</div>
<div className='flex md:hidden gap-8'>
{menu.map((item,index)=>index<3 &&(
<HeaderItem  name={''} Icon={item.icon} />
))}
<div className='md:hidden ' onClick={()=>setToggle(!toggle)}>
<HeaderItem  name={''} Icon={HiDotsVertical} />
{toggle?<div className='absolute mt-3 bg-[#121212] border-[1px] p-3 border-gray-700 px-5 py-5'>
{menu.map((item,index)=>index>2 &&(
<HeaderItem  name={item.name} Icon={item.icon} />
))}
</div>:null}
</div>
</div>
</div>
<img src="https://i.pinimg.com/736x/6f/a3/6a/6fa36aa2c367da06b2a4c8ae1cf9ee02.jpg" className='w-[80px] rounded-full' alt=""  />
    </div>
  )
}

export default Header
