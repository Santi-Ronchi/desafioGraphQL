const express = require("express");
const graphqlHTTP = require("express-graphql");
const buildSchema = require("graphql");
const Agenda = require("./controller/agendaController");
const agenda = new Agenda();


const schema = buildSchema(`
input RecordatorioInput {
  titulo: String,
  descripcion: String,
}

type Recordatorio{
  id: ID!,
  titulo: String,
  descripcion: String,
  timestamp: String,
  leido: Boolean
}

type Query {
 getRecordatorios: [Recordatorio],
}

type Mutation {
  createRecordatorio(datos: RecordatorioInput): Recordatorio,
  actualizarRecordatorio(id: ID!): Recordatorio,
  deleteLeidos: [Recordatorio]
}
`);

function createRecordatorio() {
    return agenda.createRecordatorio();
}
function getRecordatorios() {
    return agenda.getRecordatorios();
}
function actualizarRecordatorio(id) {
    return agenda.actualizarRecordatorio(id);
}
function deleteLeidos() {
    return agenda.deleteLeidos();
}

const app = express();
app.use(
	"/graphql",
	graphqlHTTP({
		schema: schema,
		rootValue: {
			createRecordatorio,
			getRecordatorios,
			actualizarRecordatorio,
			deleteLeidos,
		},
		graphiql: true,
	})
);
app.use(express.static("public"));
const PORT = 8080;
app.listen(PORT, () => {
	const msg = `Servidor corriendo en puerto: ${PORT}`;
	console.log(msg);
});