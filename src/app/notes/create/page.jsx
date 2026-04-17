import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <section className=" flex  p-20 justify-center items-center w-1/ bg-[url(/jonatan-pie-h8nxGssjQXs-unsplash.jpg)] bg-cover bg-center bg-no-repeat"> 
        <form className=' backdrop-blur-lg shadow-lg flex flex-col flex-1  p-6  rounded-lg bg-zinc-800/50 font-sans  w-full max-w-xl'>
            <Link href="/notes" className='text-blue-500 hover:underline'>
                &larr; back notes
            </Link>
            <p className='text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-red-400'>Crear Nota</p>
           
            <input type='text' placeholder='Titulo' className='p-2 rounded-md my-4 bg-zinc-700/30 text-white placeholder:text-gray-400'/>
            <textarea placeholder='Contenido' className='p-2 rounded-md my-4 bg-zinc-700/40 text-white placeholder:text-gray-400' rows={10}/>
            <button type='submit' className=' backdrop-blur-lg shadow-lg p-2 bg-blue-500/40  text-white rounded-md bg'>
                save
            </button>
        </form>
    </section>
  )
}

export default page