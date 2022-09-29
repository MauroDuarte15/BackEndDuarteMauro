class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre,
        this.apellido = apellido,
        this.libros = [libros],
        this.mascotas = mascotas
    }

    getFullName(){
        return `${this.nombre} ${this.apellido}`;
    }

    addMascota(mascota){
        this.mascotas.push(mascota);
        return this.mascotas;
    }

    countMascotas(){
        return this.mascotas.length;
    }

    addBook(nombre, autor){
        const newBook = {"nombre": nombre, "autor": autor};
        this.libros.push(newBook);
        return this.libros;
    }

    getBookNames(){
        const bookNames = [];
       
        for (let index = 0; index < this.libros.length; index++) {
            const element = this.libros[index].nombre;
            bookNames.push(element);
        }

        return bookNames;
    }
};

//constructor
const Usuario1 = new Usuario("jose", "roberto", {nombre: "carretera maldita", autor: "stephen king"}, ["perro"]);

//add methods
Usuario1.addMascota("conejo");
Usuario1.addBook("el pistolero I", "stephen king");

//output
console.log(Usuario1);
console.log(Usuario1.getFullName());
console.log(Usuario1.countMascotas());
console.log(Usuario1.getBookNames());