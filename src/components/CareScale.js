  
function theFunction(scaleValue, careType) {
	let text = "";
	let text2 = "";
	switch(scaleValue){
		case 1 : text = 'peu';
		break;
		case 2 : text = 'modérérement';
		break;
		case 3 : text = 'beaucoup';
		break;
	}

	switch(careType) {
		case "light" : text2 = 'de lumiere';
		break;
		case "water" : text2 = ' d\' eau';
		break;
	}
	alert(`cette plante requiert ${text} ${text2}`)
}

/*
correction proposée
const quantityLabel = {
	1: 'peu',
	2:'modérérement',
	3:'beaucoup'
}
*/
function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType = 
				careType === 'light' ? '☀️' : '💧'

	return (
		<div
		onClick={() => theFunction(scaleValue, careType)
			/*
			correction suite
			alert(
				`Cette plante requiert ${quantityLabel[scaleValue]} ${
					careType === 'light' ? 'de lumière' : "d'arrosage"
				}`
			)*/
		}
		>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale