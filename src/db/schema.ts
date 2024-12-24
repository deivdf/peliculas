import {integer, pgTable, varchar} from 'drizzle-orm/pg-core'

export const Pelicula = pgTable("peliculas", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    title: varchar({length: 255}),
    year: varchar({length: 255}),
    rated: varchar({length: 255}),
    released: varchar({length: 255}),
    runtime: varchar({length: 255}),
    genre: varchar({length: 255}),
    director: varchar({length: 255}),
    writer: varchar({length: 255}),
    actors: varchar({length: 255}),
    plot: varchar({length: 255}),
})