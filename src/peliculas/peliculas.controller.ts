import { Body, Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { PeliculasService } from './peliculas.service';
import { Pelicula } from 'src/db/schemas/pelicula';

@Controller('/peliculas')
export class PeliculasController {
    peliculasService: PeliculasService;
    constructor(peluclasService: PeliculasService){
       this.peliculasService = peluclasService;
    }
    @Get()
    getAllPeliculas(){
        return this.peliculasService.getAll();
    }
    @Post()
    createPelicula(@Body() pelicula: any){
        console.log(pelicula);
        return this.peliculasService.create(pelicula);
    }
    @Put()
    updatePelicula(){
        return this.peliculasService.update();
    }
    @Delete()
    deletePelicula(){
        return this.peliculasService.delete();
    }
    @Patch()
    updatePartialPelicula(){
        return this.peliculasService.updateState();
    }
}
