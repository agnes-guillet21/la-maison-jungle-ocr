import { useState } from 'react'
import '../styles/Footer.css'
import QuestionForm from './QuestionForm'

function Footer() {
	const [inputValue, setInputValue] = useState('')

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
			<QuestionForm/>
		</footer>
	)
}

export default Footer