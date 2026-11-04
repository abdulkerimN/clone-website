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
const menu=[
{
name:'home',
icon:<HiHome/>
},
{name:'search',
icon:<HiMagnifyingGlass/>
},
{name:'watchlist',
icon:<HiPlus/>
},
{name:'originals',
icon:<HiStar/>
},
{name:'movies',
icon:<HiPlayCircle/>
},
{name:'series',
icon:<HiTv/>
},
{
name:'more',
icon:<HiDotsVertical/>
}]
  return (
    <div>
{/* <h2>alem cinima</h2> */}
<img src={logo} alt="logo" className='w-[80px] object-cover' />
{menu.map((item)=>(
<HeaderItem />
))}
    </div>
  )
}

export default Header
