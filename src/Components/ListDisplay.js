
import React from 'react'
import  ViewList from './ViewList'


export default function List({setInput, setAllList, allList, input}) {

  return (
    <div className="view-list">
      {
        allList.map(list => (
          <ViewList 
          setAllList={setAllList}
          allList = {allList}
          key={list.id} 
          list = {list}
          setInputText = {setInput}
          inputText ={input}
          />
        ))    
      }    
    </div>
  )
}