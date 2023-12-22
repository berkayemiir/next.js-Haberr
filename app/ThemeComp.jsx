"use client"
import React,{useState,useEffect} from 'react'
import {useTheme} from 'next-themes'
import {CiDark,CiLight} from 'react-icons/ci'

const ThemeComp = () => {
    const [mounted, setMounted] = useState(false)
    const {stystemTheme, theme, setTheme } = useTheme()


    useEffect(() => {
        setMounted(true)
      }, [])

      const themeMode= theme==="system" ? stystemTheme:theme
  return (
    <div>
      {
        mounted &&(
            themeMode==="dark"?
            <CiLight onClick={()=> setTheme("light")} className='cursor-pointer text-orange-300' size={30}/>:
            <CiDark  onClick={()=> setTheme("dark")}className='cursor-pointer     text-orange-300' size={30}/>
            )
      }
    </div>
  )
}

export default ThemeComp