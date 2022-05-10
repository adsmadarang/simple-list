import React from 'react'

export default function ListInput({setInput, setAllList, allList, input}) {

  const hasText = input && input.trim();

  const inputHandler = (e) => {
    setInput(e.target.value)
  }

  const submitEventHandler = (e) => {
    e.preventDefault ()
        setAllList([...allList, 
          {
            text: input,
            id: new Date()
          }])
        setInput('')
  }

  return (
    <div className='input-bar'>
        <form>
          <input 
            name='text'
            type="text" 
            className={(!hasText) ? "border" : null}
            placeholder='Add to list'
            onChange={inputHandler} 
            value={input}
            />
          <button onClick={submitEventHandler} type='submit'>Add</button>
        </form>
    </div>
  )
}