import { Injectable, Inject } from '@nestjs/common';
import { Pelicula } from 'src/db/schemas/pelicula';
import { db } from 'src/db/dbConect';
import { eq } from 'drizzle-orm';
import { peliculas } from 'src/Interfaces/peliculas.interface';


@Injectable()
export class PeliculasService {

    getAll(){
        return db.select().from(Pelicula).execute();
    }
    create(pelicula: any){
        return db.insert(Pelicula).values(pelicula).execute();
    }
     update(id: number, pelicula: Partial<peliculas>){
       
        return db.update(Pelicula).set(pelicula).where(eq(Pelicula.id, id)).execute();
    }
    delete(id: number){
        return db.delete(Pelicula).where(eq(Pelicula.id, id)).execute();
    }
    updateState(){
        return 'actualizando parcialmente pelicula';
    }
}
