import './App.scss'
import Container from './components/Container'
import Converter from './components/Converter'

function App() {
	return (
		<div className='App'>
			<Container borderRadius='25px'>
				<Converter convertFrom='pounds' convertTo='euros' />
			</Container>
		</div>
	)
}

export default App
