import React , { Component } from 'react'

function Namelist(){
	const persons=[
	{
		id=1,
		name:'dinesh',
		age:23,
		skill:'react'

	},
	{
		id=2,
		name:'kumar',
		age:23,
		skill:'angular'

	},
	{
		id=3,
		name:'dineshkumar',
		age:23,
		skill:'webdevelopment'

	},
	]
	const personList= persons.map(person => <person key={person.name} person={person} />)
	return
	<div>{personList}</div>

}

export default Namelist