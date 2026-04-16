import React from 'react'
import Link from 'next/link'

export default async function page({params}) {
  
  const { id } = await params

  const nota = {
    id:1,
    title:'componentes',
    content:'este es el contenido de la nota 1', 
    video:'<video src="https://www.youtube.com/watch?v=ysz5S6PUM-U" controls></video>'
}
  
  
    return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black bg-[url(/photo-1538370965046-79c0d6907d47.avif)] bg-cover bg-center bg-no-repeat h-screen">
      <main className="  w-full max-w-xl bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-2xl">

        <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl  bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-violet-500 font-extrabold tracking-tight">
            {nota.title}
          </h1>
        
        </div>

       <p className='text-justify text-sm text-gray-600 dark:text-gray-400 mt-4'
       >{nota.content}</p>
       
         
        
        
        <section className=' backdrop-blur-2xl w-full h-lg my-10 p-6 rounded-lg flex flex-col bg-zinc-800/80  text-white justify-between'>
            <p className='font-semiboud text-lg'>Ejemplo Arrays</p>
            <pre>                               
                <code className='text-sm '>
                    {`
[{id:1, title:'Componentes', content:'No hay nota 1'},
{id:2, title:'Rutas', content:'No hay nota 2'},
{id:3, title:'Layouts', content:'No hay nota 3'}
                        ]
                    `}        
                </code>
            </pre>
        </section>

     
   

  
      </main>
    </div>
  )
}
