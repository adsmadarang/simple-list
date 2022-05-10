import React, { useState } from 'react'

export default function ViewList({list, setInput, setAllList, allList, input}) {

    const [update, setUpdate]=useState('')
    const [isEdit, setIsEdit] = useState(false)
    
    const editHandler = () => {
        setIsEdit(true)
    }
    
    const deleteHandler = () => {
        setAllList(allList.filter(result => result.id !== list.id))
    }
    
    const editOnchange = (e) => {
        setUpdate(e.target.value)
    }

    const saveHandler = (id) => {
        allList.map(result => {
            if(result.id === id){
                result.text= update
            }
        })
        setIsEdit(false)
    
    }

    const cancelHandler = () => {
        setIsEdit(false)
    }

  return (
    <>
    {
        (isEdit === false) 
        ?
        <>
            <div className='edit-list'>
                <div>{list.text}</div>
                <div>
                    <button onClick={editHandler}
                    className='btn-edit'>Edit</button>
                    <button onClick={deleteHandler} className='btn-delete'>Delete</button>
                </div>
            </div>
        </>
        :   
        <form>
            <div className='edit-list'>
                <div>   
                    <input  
                        type ="text" 
                        name ='edit-text' 
                        defaultValue={list.text}
                        className ="input-text"
                        id = {list.id}
                        onChange={editOnchange}
                        autoFocus
                    />
                </div>
                <div>
                    <button onClick={ e => saveHandler(list.id)} type="submit" className='btn-save'>Save</button>
                    <button onClick={cancelHandler} className='btn-cancel'>Cancel</button>
                </div>
            </div>
        </form>
    }    
    </>
  )
}
