import React, {useState} from 'react'


function HookCounterclass (){
  const [name, setName] = useState({firstName:'',lastName:''})
  return(
    <form>

    <input type="text" value={name.fistName} onChange={e => setName({...name,firstName:e.target.value})}/>

      <input type="text" value={name.lastName} onChange={e => setName({...name ,lastName:e.target.value})}/>

    <h2>Your first name is:{name.firstName}</h2>
    <h2>Your first name is:{name.lastName}</h2>

    <div><h3>{name.firstName}{name.lastName}</h3></div>
    </form>
  )
  
}
export default HookCounterclass;