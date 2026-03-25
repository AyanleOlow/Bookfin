"use client"

import { useState } from "react"

export default function Footer() {



  return (
    <div className="p-6 mt-11  bg-gray-800 text-white">

        <div className="flex justify-center gap-3 flex-col mb-4">
            <p>home</p>
            <p>about</p>
            <p>contact</p>
            <p>privacy</p>
            <p>terms</p>
        </div>
        <div className="">
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
        </div>
        <div className="text-center mt-4 ">
            <p className="text-sm">&copy; 2026   Book Reader. All rights reserved.</p>
        </div>


    </div>
  )
}