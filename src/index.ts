import { ApolloServer } from 'apollo-server';
import { schema } from './schema';
import { context } from './context';

export const server = new ApolloServer({
	cors: {
		origin: "*",
		credentials: true
	},
	schema,
	context,
});

const port = 4000;

server.listen({port}).then(({ url }) => (
	console.log(`Server is ready at ${url}`)
));
