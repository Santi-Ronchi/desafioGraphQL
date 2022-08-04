const crypto = require("crypto");
const Recordatorio = require("./recordController")


class Agenda {
    constructor(id, recordatorios) {
        this.id = crypto.randomBytes(10).toString("hex");;
        this.recordatorios = [];
    }

    getRecordatorios() {
        return this.recordatorios;
    }

    createRecordatorio({ datos }) {
        const id = crypto.randomBytes(10).toString("hex");
        const nuevoRecordatorio = new Recordatorio(
            id,
            datos,
            Date().toLocaleString()
        );
        this.recordatorios.push(nuevoRecordatorio);
        console.log(this.recordatorios);
        return nuevoRecordatorio;
    }

    actualizarRecordatorio({ id }) {
        let recordatorioAct;
        this.recordatorios.forEach((recordatorio) => {
            if (this.recordatorio.id === id) {
                this.recordatorio.leido = true;
                recordatorioAct = recordatorio;
            }
        });
        return recordatorioAct;
    }

    deleteLeidos() {
        this.recordatorios = this.recordatorios.filter((recordatorio) => recordatorio.leido == false);
        return this.recordatorios;
    }

}

module.exports = Agenda;