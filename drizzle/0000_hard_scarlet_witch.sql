CREATE TABLE "peliculas" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "peliculas_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"title" varchar(255),
	"year" varchar(255),
	"rated" varchar(255),
	"released" varchar(255),
	"runtime" varchar(255),
	"genre" varchar(255),
	"director" varchar(255),
	"writer" varchar(255),
	"actors" varchar(255),
	"plot" varchar(255)
);
