import * as p from 'drizzle-orm/pg-core'
export const peliculasScuema = p.pgSchema('peliculas');
export const Pelicula = peliculasScuema.table('pelicula', {
    id: p.integer().primaryKey().generatedAlwaysAsIdentity(),
    title: p.varchar({length: 255}),
    year: p.varchar({length: 255}),
    rated: p.varchar({length: 255}),
    released: p.varchar({length: 255}),
    runtime: p.varchar({length: 255}),
    genre: p.varchar({length: 255}),
    director: p.varchar({length: 255}),
    writer: p.varchar({length: 255}),
    actors: p.varchar({length: 255}),
    plot: p.varchar({length: 255}),
});