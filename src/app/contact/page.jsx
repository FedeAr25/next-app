import React from 'react'

function page() {
  return (
    <main className='min-h-screen w-full flex items-center justify-center py-20 px-6 bg-[url(/nextjs-cover-jpg-webp.webp)] bg-cover bg-center bg-no-repeat'>
     <div className="w-full max-w-lg bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl">
        
        <div className="mb-8 text-center sm:text-left">
          <h2 className="text-3xl font-bold text-white mb-2">Contáctanos</h2>
          <p className="text-gray-200">Cuéntanos en qué podemos ayudarte.</p>
        </div>

        <form className="flex flex-col gap-5">
  
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-200 ml-1">Nombre Completo</label>
            <input 
              type="text" 
              placeholder="Juan Pérez"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>


          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-200 ml-1">Correo Electrónico</label>
            <input 
              type="email" 
              placeholder="juan@ejemplo.com"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
          </div>


          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-200 ml-1">Mensaje</label>
            <textarea 
              rows={4}
              placeholder="Escribe tu mensaje aquí..."
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
            ></textarea>
          </div>


          <button 
            type="submit"
            className="mt-1 w-full py-3 px-6 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all active:scale-95 shadow-lg shadow-blue-500/20"
          >
            Enviar Mensaje
          </button>
        </form>

      </div>


    </main>
  )
}

export default page