import React, { useState } from 'react'
import { files } from './data'
import './App.css'

function Folder({ files }) {
    const [expand, setExpand] = useState(false)
    console.log(files)
    return (
        <>
            <div onClick={()=>setExpand(!expand)}>
            {
                    files.isFolder ? (
                        <button
                            className={
                                expand ? 'expand' : ''
                            }
                        >
                            {">"}
                        </button>
                    ) : null
                }
                {files.name}</div>
            <div>
                {
                    files.isFolder && expand && files.children.map((exp) => (
                        <div style={{padding:'20px'}}>
                            <Folder files={exp}/>
                            {/* {exp.name} */}
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Folder