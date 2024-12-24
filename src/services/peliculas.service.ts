import { Injectable } from "@nestjs/common";
import { Pelicula } from "../Interfaces/peliculas.interface";

@Injectable()
export class PeliculasService{
    private readonly peliculas: Pelicula[] = [];

    create(pelicula: Pelicula){
        this.peliculas.push(pelicula);
    }

    findAll(): Pelicula[]{
        return this.peliculas;
    }
}