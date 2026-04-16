import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <main className="flex flex-1 w-full  flex-col items-center justify-between py-32 px-16 bg-[url(/jonatan-pie-h8nxGssjQXs-unsplash.jpg)] bg-cover bg-center bg-no-repeat sm:items-start">
      
        
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          
          <div className="  px-20  rounded-lg trasparent">   
             <h1 className="max-w-2xl bg-linear-to-r from-green-500 to-violet-500 bg-clip-text text-5xl font-extrabold text-transparent b ">
            Bienvenido a mi aplicación de notas con Next.js
          </h1>
          <p className="max-w-md text-xl leading-6 text-zinc-600 dark:text-zinc-400">
            Aplicando todo lo aprendido en la clase de programacion 3{" "}
            /</p>

          </div>
         
        </div>

      </main>
    </div>
  );
}
