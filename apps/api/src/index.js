import fastify from "fastify"

const PORT = parseInt( process.env.API_PORT || 3_000 )
const app = fastify( { logger: true } )

app.get( "/", () => {

	return {
		ok: true,
	}
} )

app.listen( { port: PORT } )
