import { Injectable } from '@nestjs/common';
export type Pelicula = {
    id: number;
    nombre: string;
    director: string;
}

@Injectable()
export class PeliculasService {
    getAll(): Pelicula{
        return {
            id: 1,
            nombre: 'pelicula1',
            director: 'director1'

        };
    }
    create(pelicula: any){
        return 'creando pelicula';
    }
    update(){
        return 'actualizando pelicula';
    }
    delete(){
        return 'eliminando pelicula';
    }
    updateState(){
        return 'actualizando parcialmente pelicula';
    }
}
