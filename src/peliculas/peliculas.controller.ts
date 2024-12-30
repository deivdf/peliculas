import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { PeliculasService } from './peliculas.service';
import { peliculas } from 'src/Interfaces/peliculas.interface';

@Controller('/peliculas')
export class PeliculasController {
    peliculasService: PeliculasService;
    constructor(peluclasService: PeliculasService){
       this.peliculasService = peluclasService;
    }
    @Get()
    getAllPeliculas(@Query() query: any){
        return this.peliculasService.getAll();
    }
    @Get('/:id')
    getOnePelicula(@Param('id') id: number){
        return this.peliculasService.getOne(id);
    }
    @Post()
    createPelicula(@Body() pelicula: peliculas){
        console.log(pelicula);
        return this.peliculasService.create(pelicula);
    }
    @Put('/:id')
    updatePelicula(@Param('id') id: number, @Body() pelicula: Partial<peliculas>){
        return this.peliculasService.update(id, pelicula);
    }
    @Delete('/:id')
    deletePelicula(@Param('id') id: number){
        return this.peliculasService.delete(id)
    }
    @Patch('/:id')
    updatePartialPelicula(@Param('id') id: number, @Body() pelicula: Partial<peliculas>){
        return this.peliculasService.updateState(id, pelicula);
    }
}
