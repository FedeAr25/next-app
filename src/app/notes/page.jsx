import React from 'react'
import Link from 'next/link'

 export default function page() {

    
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

        <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            notas
          </h1>
           <Link
            href="/notes/create"
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
          >
            Create Note
            </Link>
        </div>
       
         
        
        
        <section className='w-full h-64 my-8 p-6 rounded-lg flex flex-col bg-zinc-800  text-white justify-between'>
            <div>
                <h1 className='font-semiboud text-lg'>Componentes {}</h1>
                <p>No hay notas para mostrar</p>
            </div>
            <Link href="/notes/1" className='self- text-sm text-blue-500 hover:underline mt-4'>
                Ver nota
            </Link>
        </section>

        <section className='w-full h-64 my-8 p-6 rounded-lg flex flex-col bg-zinc-800  text-white justify-between'>
            <div>
                <h1 className='font-semiboud text-lg'>rutas</h1>
                <p>No hay notas para mostrar</p>
            </div>
            <Link href="/notes/2" className='self- text-sm text-blue-500 hover:underline mt-4'>
                Ver nota
            </Link>
        </section>

         <section className='w-full h-64 my-8 p-6 rounded-lg flex flex-col bg-zinc-800  text-white justify-between'>
            <div>
                <h1 className='font-semiboud text-lg'>layouts</h1>
                <p>No hay notas para mostrar</p>
            </div>
            <Link href="/notes/3" className='self- text-sm text-blue-500 hover:underline mt-4'>
                Ver nota
            </Link>
        </section>
   
   
   

  
      </main>
    </div>
  )
}

