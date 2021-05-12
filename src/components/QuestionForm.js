import { useState } from 'react'

function QuestionForm() {
    const [inputValue, setInputValue] = useState('')

	function handleInput(e) {
		setInputValue(e.target.value)
	}

	function handleBlur() {
		if (!inputValue.includes('@')) {
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
		}
	}
    return (
        <div>
           <input
				placeholder='Entrez votre mail'
				onChange={handleInput}
				value={inputValue}
				onBlur={handleBlur}
			/>
                <button onClick={() => alert(inputValue)}>Envoie 🚨</button>
        </div>
    )
}




export default QuestionForm