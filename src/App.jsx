
import { useState, useEffect } from 'react';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

const initialPost = {
  title: "",
  author: "",
  status: false,
};

function App() {


  const [formData, setFormData] = useState( initialPost );
  const [cards, setCards] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e.target);
    setCards([...cards, formData]);
    setFormData(initialPost);
  }

  //qui tiene traccia di tutti i cambiamenti dentro gli input form in base al tipo
  const handleChangeInput = (e) => {
    const { type, name, value, checked } = e.target;

    const key = name;
    const val = type == "checkbox" ? checked : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: val,
    }));

  }


  const handleRemove = (e) => {
    console.log(e.target.closest("li"));
    const cardId = e.target.closest("li").id;
    const newCards = cards.filter((card, index) => index != cardId);
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
              name="title"
              className=''
              onChange={handleChangeInput}
              value={formData.title}
              placeholder='title'
            />
            <input
              type="text"
              name="author"
              className=''
              onChange={handleChangeInput}
              value={formData.author}
              placeholder='author'
            />
            <label htmlFor="">Pubblicato?</label>
            <input
              type="checkbox"
              name="status"
              className=''
              onChange={handleChangeInput}
              checked={formData.status}
            />
            <button type='submit' className='bg-primary'>Invia</button>
          </form>
        </section>

        <section >
          <ul className='d-flex flex-wrap'>
            {cards.map((card, index) => (
              <li key={index} id={index} className='d-flex my-2'>
                <div className='mx-3 p-3 bg-danger d-flex flex-column'>
                  <span>Titolo: {card.title}</span>
                  <span>Autore: {card.author}</span>
                  <span>Pubblicato: {card.status ? "pubblicato" : "bozza"}</span>
                  <span onClick={handleRemove} className='btn-delete text-center'>X</span>
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