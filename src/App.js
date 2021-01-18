import React from 'react'
import './App.css'
import ComponentC from './component/ComponentC'

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
	return (
		<div className="App">
			<UserContext.Provider value={'Dinesh'}>
        <ChannelContext.Provider value={'Kumar'}>
					<ComponentC />
				</ChannelContext.Provider>
			</UserContext.Provider>
		</div>
	)
}

export default App