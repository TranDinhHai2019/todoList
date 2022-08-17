// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {MdDoneOutline} from 'react-icons/md'

function App() {

    const [list, setList] = useState('')
    const [lists, setLists] = useState(() => {
    const listsArray = JSON.parse(localStorage.getItem('toDos'))
    return listsArray;
  })
  // function add item
  const hadelAddList = () => {
    if (!list){
      alert('Empty!');
      return;
    }
    setLists(prev => {
      const newLists = [...prev, list]
      const jsonLists = JSON.stringify(newLists)
      localStorage.setItem('toDos', jsonLists)
      return newLists
    })
    setList('')
  }
  // function remove item
  function handelRemove(itemList) {
    const newLists = lists.filter((item) => item !== itemList)
    setLists(newLists)
    localStorage.setItem('toDos', JSON.stringify(newLists))
    return newLists
  }

  // 
  const handelDone = () => {

  }


  return (
    <div className='wrapper'>
      <div className='todoList'>
        <div className='todoListInput'>
          <input
            className='todoList__input'
            value={list}
            onChange={e => setList(e.target.value)}
          ></input>
          <button className='todoList__add--button' onClick={hadelAddList} >Add</button>

        </div>

        <ul className='todoList__lists'>
          {
            lists.map((itemList, index) => (
              <li className='todoList__item' key={index} >{itemList}
                <button className='todoList__remove' onClick={() => handelRemove(itemList)}>Remove</button>
                <button onClick = {handelDone} className='todoList__done'>Done</button>
                <MdDoneOutline
                className='todoList__done--icon-none'
                />
              </li>
            ))
          }
        </ul>
      </div>
    </div>


  )
}

export default App;
