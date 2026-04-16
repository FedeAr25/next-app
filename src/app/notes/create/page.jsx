import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <section className="flex p-20 justify-center items-center w-full "> 
        <form className='flex flex-col flex-1 p-6  rounded-lg bg-zinc-800 font-sans'>
            <Link href="/notes" className='text-blue-500 hover:underline'>
                &larr; back notes
            </Link>
            <p className='text-white  text-lg font-semibold border-b border-gray-600 pb-2'>Crear Nota</p>
           
            <input type='text' placeholder='Titulo' className='p-2 rounded-md my-4 bg-zinc-700 text-white placeholder:text-gray-400'/>
            <textarea placeholder='Contenido' className='p-2 rounded-md my-4 bg-zinc-700 text-white placeholder:text-gray-400' rows={10}/>
            <button type='submit' className='p-2 bg-blue-500 p-2 text-white rounded-md bg'>
                save
            </button>
        </form>
    </section>
  )
}

export default page