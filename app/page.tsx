"use client"

import { useState } from "react"

export default function Home() {

  const [files, setFiles] = useState<File[]>([])

 const handleFolder = (event: any) => {
  const selectedFiles = Array.from(event.target.files) as File[]

  const allowedFiles = selectedFiles.filter(file =>
    file.name.endsWith(".epub") || file.name.endsWith(".pdf")
  )

  setFiles(allowedFiles)
}

  return (
    <div className="p-6 w-full min-h-screen bg-gray-900 text-white">

      <h1 className="text-2xl font-bold mb-4">Select Book Folder</h1>

      <input
        type="file"
        multiple
        onChange={handleFolder}
        {...{ webkitdirectory: "true" }}
        className="border-2 text-align-center border-gray-700 rounded-lg p-2 cursor-pointer bg-gray-800 hover:bg-gray-700 transition"
        
      />

      <h2 className="text-xl mb-4">Books Found</h2>

      <div className="flex flex-wrap gap-6">

        {files.map((file, index) => {
          const isPDF = file.name.endsWith(".pdf") 

          return (
            <div
              key={index}
              className="w-48 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transition p-3 flex flex-col items-center"
            >

              
              <div className="w-full h-56 bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden">

                {isPDF ? (
                  <span className="text-4xl">📚</span>
                ) : (
                  <span className="text-4xl">📖</span>
                )}

              </div>

              
              <p className="mt-3 text-sm text-center ">
                {file.name}
              </p>

            </div>
          )
        })}

      </div>

    </div>
  )
}