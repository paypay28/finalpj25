INSERT INTO author(fName,lName)VALUES('Angie','Thomas');

INSERT INTO author(fName.lName)
VALUES
    ('Colleen','Hoover',)
    ('Haper','Lee',)
    ('John', 'Green',)
    ('J.R.R', 'Tolkien',)
    ('Rebecca','Yarrons',)
    ('Suzanne','Collins',)
    ('F.Scoot','Fitzgerald',)
    ('Lois','Lowry',)
    ('S.E.', 'Hinton',)
;

INSERT INTO  book(book)
VALUES
    ('The Hate You Give'),
    ('It Ends With Us'),
    ('To Kill a Mocking Bird'),
    ('The Fault In Ours Stars'),
    ('The Hobbit'),
    ('Fourth Wing'),
    ('The Hunger Games'),
    ('The Great Gastsby'),
    ('The Giver'),
    ('The Outsiders'),
    ;

INSERT INTO publisher(publisher)
VALUES
    ('Blazer + Bray'),
    ('Atria Books'),
    ('Harper Lee'),
    ('John Green'),
    ('J.R.R. Tolkien'),
    ('Rebecca Yarro'),
    ('Suzanne Collins'),
    ('F.Scoot Fitgerald'),
    ('Lois Lowry'),
    ('S.E. Hinton');


INSERT INTO book(
    title,
    author_id,
    publisher_id,
    copyright_year_id,
    edition_id,
    edition_id_year,
    binding_id,
    rating_id,
    language_id,
    qty_id,
    number_pages_id,
    cover_images_id,
    ENUM_id,
    publisherCompany_id,
    genre_id,
    format_id,
)
VALUES(
    'The Hate You Give',
    'Angie Thomas',
    'Balzer + Bray',
    '2017',
    'null',
    '2017',
    'null',
    '2017',
    'Hardcover',
    '8.1/10',
    'English',
    '2',
    '480',
    'null',
    '1',
    'Urban Fiction',
    'audiobook',
);

INSERT INTO book(title,author_id ,publisher_id,copyright_year_id,edition_id)
VALUES
('The Hate You Give','Angie Thomas','Balzer + Bray','2017','null'),
('It Ends With Us','Colleen Hoover','Atria Books','2017','null'),
('To Kill a Mocking Bird','Haper Lee''1960'	'null'),
('The Fault In Our Stars'	'John Green'	'Penguin Books'	'2012'	'null'),
('The Hobbit'	'J.R.R. Tolkien''George Allen and Unwin Ltd''1937'	'null'),
('Fourth Wing'	'Rebecca Yarros' 'Red Tower Books'	'2023'	'null'),
('The Hunger Games','Suzanne Collins','Scholastic',	'2008',	'null'),
('The Great Gastsby','F.Scoot ','Charles Scribner's Sons',	'1925'	'null'),
('The Giver','Lois Lowry','Houghton Miffin Harcourt,'1993','null'),
('The Outsiders','S.E. Hinton',	'Viking Press,Dell Publishing','1967','null'), 

INSERT INTO book(title,author_id ,publisher_id,copyright_year_id,edition_id)
VALUES('The Hate You Give','Angie Thomas','Balzer + Bray','2017','null');

--UPDATE table
--SET field ='data'
-- WHERE field (key) = arg
UPDATE book
SET title ='The Hate You Give',
copyright_year = 2017
WHERE author_id = 1;

SELECT book.title,
CASE
    WHEN ar.fName IS NULL THEN''
    ELSE ar.lName
    END lName,
CASE
    WHEN b.book IS NULL THEN ''
    ELSE b.book
    END book,
    book.yr_copyright
    FROM Book b
    LEFT OUTER JOIN book  ON book.author_id = book.author_id
    LEFT OUTER JOIN author ON author.book_id = a.author_id;
