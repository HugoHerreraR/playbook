const pullrequest = {
    title: "Actualización",
    author: "Hugo",
    branchName: "Desarrollo",
    dateCreated: "15/05/2022",
    status: "use git add <file>... to include in what will be committed",
    repositoryNameAssociated:"Programación Orientada a objetos",

    getStatus: function(){
        return this.status
    },
    getTitleAndAutor: function(){
        return `Titulo: ${this.title} autor: ${this.author}`
    }
    
}

console.log("Estatus: " + pullrequest.getStatus());
console.log(pullrequest.getTitleAndAutor());