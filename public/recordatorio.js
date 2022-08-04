function createRecordatorio() {

    const graphqlQuery = {
        "operationName": "createRecordatorio",
        "query": `mutation createRecordatorio {
                    createRecordatorio (datos: {
                        titulo: "${document.getElementById ('txtTituloRecordatorio').value}",
                        descripcion: "${document.getElementById ('txtDescripcionRecordatorio').value}"
                    }) {
                        titulo
                    }
                }`
    }

    const options = {
        headers: {
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(graphqlQuery)
    }

    console.log(document.getElementById ('txtTituloRecordatorio').value);

    fetch('/graphql', options)
        .then(data=> data.json() )
        .then(json=> console.log(json))
        .catch(err=>console.log('fetch() failed'))
}