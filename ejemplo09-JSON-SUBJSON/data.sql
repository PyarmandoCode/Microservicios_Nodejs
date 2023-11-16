insert into authors (idautor,nombreautor,createdAt,UpdatedAt)
values(1,"Juan Perez",now(),now())

insert into books(idbook,titulo,idautor,createdAt,UpdatedAt)
values(1,"Libro1",1,now(),now())

insert into books(idbook,titulo,idautor,createdAt,UpdatedAt)
values(2,"Libro1",1,now(),now())

#Api para listar Autores-Books
http://localhost:3000/api/authoresbooks
http://localhost:3000/api/createauthor
http://localhost:3000/api/createbooks