const issue = {
    title: "Objetos",
    repositoryNameAssociated:"Programación Orientada a objetos",
    status:"Activo",
    numberOfComments: 7,
    labels: 10,
    author: "Hugo",
    dateCreated: '10/05/2022',   
    lastUpdated: '10/05/2022',

    getTitleAndAuthor: function(){
        return this.title + this.author
    },
    getGeneralInfo: function(){
        return `Creado: ${this.dateCreated} Ultima fecha de actualización: ${this.lastUpdated}`
    }
}

console.log("Nombre del repositorio: " + issue.repositoryNameAssociated);
console.log("Titulo y nombre del autor: " + issue.getTitleAndAuthor());
console.log("Información general: " + issue.getGeneralInfo());