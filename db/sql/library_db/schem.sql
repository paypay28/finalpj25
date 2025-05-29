DROP DATABASE IF EXISTS libraryDB;
CREATE DATABASE libraryDB;
USE libraryDB;


-- CREATE TABLE tableNaMe(field CONSTRAINTS, TABLE CONSTRAINT)
CREATE Table author(
    author_id SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL,
    fName VARCHAR(40),
    lName VARCHAR(40),
    CONSTRAINT pk_author PRIMARY KEY (author_id)
);
-- CREATE TABLE book (
--     book_id SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL,
--     book_title VARCHAR(60),
--     author_id SMALLINT UNSIGNED NOT NULL,
--     publisher_id SMALLINT UNSIGNED NOT NULL,
--     yr_copyright YEAR,
--     edition TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     edition_year TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
--     CONSTRAINT pk_book PRIMARY KEY (book_id),
--     CONSTRAINT fk_title FOREIGN KEY (title_id) REFERENCES title (title_id),
--     CONSTRAINT fk_author FOREIGN KEY (author_id) REFERENCES author(author_id),
--     CONSTRAINT fk_publisher FOREIGN KEY (publisher_id) REFERENCES publisher (publisher_id),
--     CONSTRAINT fk_copyright FOREIGN KEY (copyright_id) REFERENCES copyright(copyright_id),
--     CONSTRAINT fk_edition FOREIGN KEY (edition_id) REFERENCES edition (edition_id),
--     CONSTRAINT fk_edition_year FOREIGN KEY (edition_id_year) REFERENCES edition_year(edition_id_year),
--     CONSTRAINT fk_binding FOREIGN KEY (binding_id) REFERENCES binding (binding_id),
--     CONSTRAINT fk_rating FOREIGN KEY (rating_id) REFERENCES rating (rating_id),
--     CONSTRAINT fk_language FOREIGN KEY (language_id) REFERENCES language(language_id),
--     CONSTRAINT fk_qty FOREIGN KEY (qty_id) REFERENCES qty(qty_id),
--     CONSTRAINT fk_number_pages FOREIGN KEY (number_pages_id) REFERENCES number_pages(number_pages_id),
--     CONSTRAINT fk_cover_images FOREIGN KEY (cover_images_id) REFERENCES cover_image(cover_image_id),
--     CONSTRAINT fk_enum FOREIGN KEY (enum_id) REFERENCES enum(enum_id),
--     CONSTRAINT fk_publisherCompany FOREIGN KEY (publisherCompany_id) REFERENCES publisherCompany(publisherCompany_id),
--     CONSTRAINT fk_genre FOREIGN KEY (genre_id) REFERENCES genre (genre_id),
--     CONSTRAINT fk_format FOREIGN KEY (format_id) REFERENCES format (format_id),
-- );
ALTER TABLE book
    ADD date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ADD last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

    ALTER TABLE book 
    MODIFY title_id SMALLINT UNSIGNED;


CREATE TABLE publisher(
    publisher_id SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL,
    publisher VARCHAR (40),
    CONSTRAINT pk_publisher PRIMARY KEY (publisher_id)
);

CREATE TABLE language(
    language_id SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL,
    language VARCHAR(40),
    CONSTRAINT pk_language PRIMARY KEY (language_id)
);

CREATE TABLE genre (
    genre_id SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL,
    genre VARCHAR(40),
    CONSTRAINT pk_genre PRIMARY KEY (genre_id)
);

CREATE TABLE format(
    format_id SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL,
    format VARCHAR(40),
    CONSTRAINT pk_format PRIMARY KEY (format_id)
);


