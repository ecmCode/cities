import { SiTailwindcss, SiReact, SiVite } from 'react-icons/si';


function App() {

  return (
    <main className="w-screen h-screen flex justify-center items-center bg-gradient-to-br from-cyan-800 to-cyan-400">
      <section className='flex flex-col justify-center items-center gap-10 bg-cyan-300 bg-opacity-50 rounded-lg h-2/3 w-full md:w-1/2 m-10 drop-shadow-md text-zinc-800 text-2xl'>
        <div className='flex flex-col lg:flex-row gap-2'>
          React
          <a href="https://reactjs.org/">
            <SiReact className='text-5xl mx-2 hover:text-cyan-100 transition'/>          
          </a>
          + Vite
          <a href="https://vitejs.dev/">
            <SiVite className='text-5xl mx-2 hover:text-cyan-100 transition'/>  
          </a>
          + Tailwind CSS
          <a href="https://tailwindcss.com/">
            <SiTailwindcss className='text-5xl mx-2 hover:text-cyan-100 transition'/>
          </a>
          </div>
        <div className='text-center text-3xl'>test</div>
      </section>
    </main>
  )
}

export default App
