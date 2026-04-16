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
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

        <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            {nota.title}
          </h1>
        
        </div>

       <p className='text-justify text-sm text-gray-600 dark:text-gray-400 mt-4'
       >{nota.content}</p>
       
         
        
        
        <section className='w-full h-64 my-8 p-6 rounded-lg flex flex-col bg-zinc-800  text-white justify-between'>
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
