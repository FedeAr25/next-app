import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

 export default function page() {

    
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-[url(/jonatan-pie-h8nxGssjQXs-unsplash.jpg)] bg-cover bg-center bg-no-repeat h-screen">
      <main className="flex flex- w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start bg-[url(/jonatan-pie-h8nxGssjQXs-unsplash.jpg)] bg-cover bg-center bg-no-repeat">

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
       
         
        
        
        <section className=' backdrop-blur-lg w-full h-64 my-8 p-6 rounded-lg flex flex-col bg-zinc-800/50  text-white justify-between shadow-lg'>
            <div>
                <h1 className='font-semiboud text-lg'>Componentes {}</h1>
                <p>No hay notas para mostrar</p>
            </div>
            <Link href="/notes/1" className='self- text-sm text-blue-500 hover:underline mt-4'>
                Ver nota
            </Link>
        </section>

        <section className=' backdrop-blur-lg w-full h-64 my-8 p-6 rounded-lg flex flex-col bg-zinc-800/50  text-white justify-between shadow-lg'>
            <div>
                <h1 className='font-semiboud text-lg'>rutas</h1>
                <p>No hay notas para mostrar</p>
            </div>
            <Link href="/notes/2" className='self- text-sm text-blue-500 hover:underline mt-4'>
                Ver nota
            </Link>
        </section>

         <section className=' backdrop-blur-lg w-full h-64 my-8 p-6 rounded-lg flex flex-col bg-zinc-800/50  text-white justify-between shadow-lg'>
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

