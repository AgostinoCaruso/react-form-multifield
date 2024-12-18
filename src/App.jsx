/*
Ampliare l'esercizio precedente aggiungendo, nel form, i campi per immagine, contenuto, categoria (select), tags (lista di checkbox) e uno stato per pubblicare o meno l'articolo.
Utilizzare un unico oggetto per gestire tutti i dati del form.
BONUS:
1. Aggiungere uno useEffect che mostri un alert quando l’utente clicca sull’apposita checkbox per pubblicare un articolo.
*/


import { useState } from 'react';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

const initialPost = {
  title: "",
  author: "",
  status: false,
};

function App() {


  const [formData, setFormData] = useState({ initialPost });
  const [cards, setCards] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e.target);
    setCards([...cards, formData]);

  }
  const handleInput = (e) => {
    console.log(e.target.value);
    setFormData({ ...formData, title: e.target.value });
  }

  const handleRemove = (e) => {
    console.log(e.target.closest("li"));
    const cardId = e.target.closest("li").id;
    const newCards = cards.filter((card, index) => !index == cardId);
    setCards(newCards);
  }

  return (
    <>
      <header className='bg-warning'>
        <h1>Header</h1>
      </header>
      <main>
        <section className='bg-success'>
          <form action="#" onSubmit={handleSubmit}>
            <input
              type="text"
              className=''
              onChange={handleInput}
              value={formData.title}
              placeholder='title'
            />
            <input
              type="text"
              className=''
              onChange={handleInput}
              value={formData.author}
              placeholder='author'
            />
            <input
              type="checkbox"
              className=''
              onChange={handleInput}
              value={formData.status}              
            />
            <label htmlFor=""></label>
          </form>
        </section>
        <section >
          <ul className='d-flex'>
            {cards.map((card, index) => (
              <li key={index} id={index}>
                <div className='mx-3 p-3 bg-danger'>
                  <span>Titolo: {card.title}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main >
    </>
  )
}

export default App