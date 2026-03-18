"use client"

import { useState } from "react"
import '../app/page.css'

export default function Home() {

  const [files, setFiles] = useState<File[]>([])

  const handleFolder = (event: any) => {
    const selectedFiles = Array.from(event.target.files) as File[]
    setFiles(selectedFiles)
  }

  return (
    <div style={{ padding: "20px" }}>

      <h1>Select Book Folder</h1>

      <input
        type="file"
        multiple
        onChange={handleFolder}
        {...{ webkitdirectory: "true" }}
      />

      <h2>Books Found</h2>

      <ul className="">
        {files.map((file, index) => (
          <li className="flex justify-center border-width: 5px whi ; " key={index}>{file.name}</li>
        ))}
      </ul>

    </div>
  )
}