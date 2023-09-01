export interface Equipos{
    id: number,
    nombre: string,
    estadio: string,
    sitioWeb: string,
    nacionalidad: string,
    fundacion: Date,
    entrenador: string,
    capacidad: Number,
    valor: number
}

export interface ResponseEquipos{
    content:Equipos[],
    pageable:Pageable,
    empty:boolean,
    first:boolean,
    last:boolean,
    number:number,
    numberOfElements:number,
    size:number,
    totalElements:number,
    totalPages:number
}

export interface Pageable{
		pageSize: number,
		pageNumber: number,
		offset: number,
		unpaged: boolean,
		paged: boolean
}
