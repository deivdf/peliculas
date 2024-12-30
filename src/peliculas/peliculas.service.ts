import { Injectable, Inject } from '@nestjs/common';
import { Pelicula } from 'src/db/schemas/pelicula';
import { db } from 'src/db/dbConect';
import { eq } from 'drizzle-orm';
import { peliculas } from 'src/Interfaces/peliculas.interface';

@Injectable()
export class PeliculasService {

    async getAll(){
        const obtener = await db.select().from(Pelicula).execute();
        return obtener;
    }
    async getOne(id: number){
        const obtenerUno = await db.select().from(Pelicula).where(eq(Pelicula.id, id)).execute();
        return obtenerUno;
    }
    async create(pelicula: any){
       const create = await db.insert(Pelicula).values(pelicula).execute();
       return create;
    }
    async update(id: number, pelicula: Partial<peliculas>){
        const actualizar = await db.update(Pelicula).set(pelicula).where(eq(Pelicula.id, id)).execute();
        return actualizar;
    }
    async delete(id: number){
        const eliminar = await db.delete(Pelicula).where(eq(Pelicula.id, id)).execute();
        return eliminar;
    }
    async updateState(id: number, pelicula: Partial<peliculas>){
       const actualizaPartial = await db.update(Pelicula).set(pelicula).where(eq(Pelicula.id, id)).execute();
       return actualizaPartial;
    }
}
