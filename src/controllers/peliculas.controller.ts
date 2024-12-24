import { Controller,Get, Post, Body } from "@nestjs/common";


@Controller('peliculas')
export class PeliculasController{
    @Get()
    finAll(): string{
        return 'Hola mundo';
    }
}