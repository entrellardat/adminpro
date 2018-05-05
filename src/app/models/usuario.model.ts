export class Usuario {
    constructor(
        public nombre: string ,
        public email: string ,
        public password : string ,
        public img?: string,
        // despues de un parametro opcional
        // todos tienen que ser opcionales
        public role?: string  ,
        public google? ,
        public _id?: string
    ) 
    {}
}