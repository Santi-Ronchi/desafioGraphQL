class Recordatorio {
    
	constructor(id, { titulo, descripcion }, timesamp) {
		this.id = id;
		this.titulo = titulo;
		this.descripcion = descripcion;
		this.timesamp = timesamp;
		this.leido = false;
	}
}

module.exports = Recordatorio;