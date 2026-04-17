import React from 'react'
import Link from 'next/link'

function AboutPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[url(/nextjs-cover-jpg-webp.webp)] bg-cover bg-center bg-no-repeat py-20 px-6">
      
    
      <div className="max-w-4xl w-full bg-black/40 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-16 shadow-2xl">
        
        <div className="flex flex-col gap-10">

          <section className="text-center md:text-left">
            <span className="text-blue-400 font-mono text-sm uppercase tracking-[0.3em] mb-4 block">Descubre nuestra historia</span>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-none">
              CREANDO EL 
              <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">FUTURO DIGITAL.</span>
            </h1>
          </section>

       
          <section className="grid md:grid-cols-2 gap-8 items-start">
            <p className="text-xl text-gray-200 font-light leading-relaxed">
              No solo escribimos código; diseñamos soluciones que impulsan negocios. 
              Nuestra misión es simplificar la complejidad tecnológica a través de interfaces intuitivas y un rendimiento excepcional.
            </p>
            
            <div className="space-y-6 ">
              <div className="flex items-start gap-4">
                <div className="h-6 w-6 rounded-full bg-blue-500/20 border border-blue-500 flex items-center justify-center mt-1">
                  <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                </div>
                <div>
                  <h3 className="text-white font-bold">Rendimiento</h3>
                  <p className="text-gray-400 text-sm">Webs ultra rápidas optimizadas para SEO y conversión.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-6 w-6 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center mt-1">
                  <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                </div>
                <div>
                  <h3 className="text-white font-bold">Diseño</h3>
                  <p className="text-gray-400 text-sm">Estética moderna que respeta la identidad de tu marca.</p>
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