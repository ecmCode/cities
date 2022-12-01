import cities from 'cities.json';
import {useState, createContext, useContext} from "react";

const List = () => {
  const [country,setCountry] = useState('')

  const sorted = cities.sort((firstItem,secondItem) => firstItem.name.localeCompare(secondItem.name))
  const result = cities.filter(city => city.country === country)
  const countryList = Array(...new Set(cities.map(city => city.country)))
  const sortedCountryList = countryList.sort((firstItem,secondItem) => firstItem.localeCompare(secondItem))
  // console.log(sortedCountryList)

  return( 
    <div className='h-full overflow-y-auto w-full p-10'>
      <div className='flex gap-6 w-full overflow-x-auto'>
        {sortedCountryList.map((item) => 
          <button className='py-2 my-2 px-10 rounded-lg shadow-lg text-fuchsia-100 bg-fuchsia-900 flex justify-around gap-4 align-center' key={item} onClick={e => setCountry(e.target.innerText)}>
            <img
            src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${item}.svg`} className="h-10 mx-2 pointer-events-none"/>
            <span>{item}</span>
          </button>
        )}
      </div>
      {country.length > 0 &&
        <div className='text-center text-3xl my-4'>
          All {result.length} Cities in {country}
        </div>
      }
      
      {sorted.map((item) => item.country === country && 
        <div key={crypto.randomUUID()}>
          <div className='flex justify-between items-center p-2'>
            <a href={`https://www.google.com/maps/place/${item.lat},${item.lng}`}
            target="_blank"
            className="hover:text-fuchsia-100 transition">
              {item.name}
            </a>
            <div className='text-lg'>
              {item.lat}, {item.lng}
            </div>
          </div>
            <hr className='w-full h-1 border-none bg-fuchsia-900'/>
        </div>
      )}
      
    </div>
  )  
}

const Header = () => {
  
  return(
    <header className='p-6 bg-fuchsia-500 bg-opacity-10 w-full text-center text-5xl'>
        <h1>Cities in the world</h1>
    </header>
  )
}

const App = () => {

  return (
    <main className="w-screen h-screen flex justify-center items-center bg-gradient-to-tl from-fuchsia-800 via-fuchsia-400 to-fuchsia-50">
      <section className='flex flex-col justify-start items-center gap-10 bg-fuchsia-300 bg-opacity-30 h-screen w-2/3 m-10 shadow-xl text-zinc-800 text-2xl'>
          <Header />
          <List />
      </section>
    </main>
  )
}

export default App
