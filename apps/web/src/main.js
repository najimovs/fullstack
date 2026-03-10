import "./main.css"

const charsUL = document.getElementById( "chars" )

fetch( "http://localhost:3000/chars" )
.then( response => response.json() )
.then( characters => {

	for ( const char of characters ) {

		const li = document.createElement( "LI" )

		li.textContent = char

		charsUL.appendChild( li )
	}
} )
