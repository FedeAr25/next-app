import React from 'react'
import Link from 'next/link'

function AboutPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[url(/nextjs-cover-jpg-webp.webp)] bg-cover bg-center bg-no-repeat py-20 px-6">
      
    
      <div className="max-w-4xl w-full bg-black/40 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-16 shadow-2xl">
        
        <div className="flex flex-col gap-10">

          <section className="text-center md:text-left">
            <span className="text-blue-400 font-mono text-sm uppercase tracking-[0.3em] mb-4 block">Unite a nuestra historia</span>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-none">
              CREANDO  
              <br/>
               <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-emerald-400"> Y UNIENDO NUESTRAS IDEAS.</span>
            </h1>
          </section>

       
          <section className="grid md:grid-cols-2 gap-8 items-start">
            <p className="text-xl text-gray-200 font-light leading-relaxed">
              No solo escribimos notas; diseñamos  una app para que expreses tus opiniones. 
              Nuestra misión es simplificar la comunicacion con toda nuesta comunidad para que nos expresemos libremente y seamos todos uno.
            </p>
            
            <div className="space-y-6 ">
              <div className="flex items-start gap-4">
                <div className="h-6 w-6 rounded-full bg-blue-500/20 border border-blue-500 flex items-center justify-center mt-1">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                </div>
                <div>
                  <h3 className="text-white font-bold">Comunicacion</h3>
                  <p className="text-gray-400 text-sm">Webs ultra rápidas para el alcance de todos.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-6 w-6 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center mt-1">
                  <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                </div>
                <div>
                  <h3 className="text-white font-bold">Diseño</h3>
                  <p className="text-gray-400 text-sm">Intuitivo y facil de usar.</p>
                </div>
              </div>
            </div>
          </section>
   
        </div>
      </div>
    </main>
  )
}

export default AboutPage