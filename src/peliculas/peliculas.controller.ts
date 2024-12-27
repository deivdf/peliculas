import { Controller, Get } from '@nestjs/common';
import { PeliculasService } from './peliculas.service';

@Controller()
export class PeliculasController {
    peliculasService: PeliculasService;
    constructor(peluclasService: PeliculasService){
       this.peliculasService = peluclasService;
    }
    @Get('/peliculas')
    getAllPeliculas(){
        return this.peliculasService.getAll();
    }
}
