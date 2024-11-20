"use client";

import Image from "next/image";
import react, { use, useState } from "react";

export default function Home() {
  const [ isSelected, setSelected] = useState(false)
  const [ itemSelected, setItemSelected ] = useState(new Object())
let nome = "", price: number, id: number

  let array = [
    {
      id: 1,
      name: "Margherita",
      description: "Pomodoro, mozzarella, basilico",
      price: 8.50
    },
    {
      id: 2,
      name: "Diavola", 
      description: "Pomodoro, mozzarella, salame piccante",
      price: 10.00
    },
    {
      id: 3,
      name: "Quattro Formaggi",
      description: "Mozzarella, gorgonzola, parmigiano, fontina",
      price: 11.00
    },
    {
      id: 4,
      name: "Capricciosa",
      description: "Pomodoro, mozzarella, funghi, prosciutto cotto, olive, carciofi",
      price: 12.00
    },
    {
      id: 5,
      name: "Marinara",
      description: "Pomodoro, aglio, origano, olio d'oliva",
      price: 7.50
    },
    {
      id: 6,
      name: "Napoli",
      description: "Pomodoro, mozzarella, acciughe, capperi, olive",
      price: 11.00
    },
    {
      id: 7,
      name: "Bufala",
      description: "Pomodoro, mozzarella di bufala, basilico",
      price: 12.50
    },
    {
      id: 8,
      name: "Ortolana",
      description: "Pomodoro, mozzarella, melanzane, zucchine, peperoni",
      price: 11.50
    }
  ]
  const select = (item: {id: number; name: string; description: string; price: number; }) => {
      setItemSelected(item)
      setSelected(true)
  }
  const aggiungiPizza = (id: number, nome: string, price: number) => {
    array
  }
  const modificaPrezzo = (price: number) => {
    
  }
  const eliminaPizza = () => {
    
  }
  return (
    <div>
      <main className="select-none text-black w-screen h-screen overflow-hidden bg-gray-100">
        <nav className="flex flex-row content-center justify-center text-center h-28 w-[99.5%] p-4 bg-white m-1 rounded-lg shadow-md">
          <Image 
            className="absolute left-4 top-2.5"
            src="/pizza.webp"
            alt="pizza logo"
            width={100}
            height={100}
          />
          <p className="text-center self-center text-5xl font-bold">Gestione Pizze</p>
        </nav>
        <div id="corpo" className="flex flex-row h-full">
          <div className="text-center w-1/4">
            <div className="p-1 m-1 rounded-lg shadow-md bg-white w-1/2 justify-self-center"><p className="text-2xl font-bold">elenco pizze</p></div>
            <div className="max-h-[75%] overflow-y-scroll" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
              <div className="flex flex-col space-y-4 px-4">
                {array.map((item, index) => (
                  <button key={index} className="bg-white rounded-lg shadow-md p-4" onClick={() => select(item)}>
                    <h2 className="text-xl font-bold text-black">{item.name}</h2>
                    <p className="text-gray-600">{item.description}</p>
                    <p className="text-black font-semibold my-1">€{item.price}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center w-3/4">
            <div className="w-1/3 p-1 m-1 rounded-lg shadow-md bg-white justify-self-center w-1/5"><p className="text-2xl font-bold">modifica pizza</p></div>
            <div className="h-[75%] w-[99.5%] px-4 rounded-lg shadow-md bg-white flex flex-col items-center justify-center">
              <div className="flex flex-col space-y-4 w-1/3">
                <p>ID:</p>
                <input 
                  type="text"
                  value={id}
                  placeholder={isSelected ? itemSelected.id.toString() : ""}
                  className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none [&::-webkit-inner-spin-button]:appearance-none"
                  inputMode="decimal" // Mostra tastiera numerica con punto
                  onInput={(e) => {
                    const value = e.currentTarget.value;
                    e.currentTarget.value = value.replace(/[^0-9]/g, '');
                  }}
                />
                <p>Nome:</p>
                <input 
                  type="text" 
                  value={nome}
                  placeholder={isSelected ? itemSelected.name : ""} 
                  className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                />
                <p>Prezzo:</p>
                <input 
                  type="text"
                  value={price}
                  placeholder={isSelected ? itemSelected.price.toString() : ""} 
                  className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none [&::-webkit-inner-spin-button]:appearance-none"
                  inputMode="decimal" // Mostra tastiera numerica con punto
                  onInput={(e) => {
                    const value = e.currentTarget.value;
                    // Limita a un solo punto decimale
                    const parts = value.split('.');
                    if (parts.length > 2) {
                      e.currentTarget.value = parts.slice(0, 2).join('.');
                    }
                    // Rimuove caratteri non numerici e il punto
                    e.currentTarget.value = value.replace(/[^0-9.]/g, '');
                    // Assicura che ci sia solo un punto
                    if ((e.currentTarget.value.match(/\./g) || []).length > 1) {
                      e.currentTarget.value = e.currentTarget.value.replace(/\.+$/, '');
                    }
                  }}
                />
                <div className="flex flex-row space-x-4">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => aggiungiPizza(id, nome, price)}>
                    Aggiungi Pizza
                  </button>
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => modificaPrezzo(price)}>
                    Modifica Prezzo
                  </button>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={eliminaPizza}>
                    Elimina Pizza
                  </button>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}