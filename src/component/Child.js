import React  from 'react'


function Child(props){

	return(
		<div>
		<button onClick={() => props.greetHandler('Child')}>GreetParent</button>
		</div>

		)
}

export default Child