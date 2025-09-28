CREATE TABLE books(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    isbn VARCHAR(20) NOT NULL,
    read_date date,
    note  TEXT
);

INSERT INTO books (id, title, author, isbn, read_date, note) VALUES
(1, 'Atomic Habits', 'James Clear', '9780735211292', '2024-08-01',
 'A practical, psychology-driven guide to how small habits compound into big results. Clear breaks down the “habit loop” (cue, craving, response, reward) and shows how to design environments that make good habits easy and bad habits harder. His ideas on habit stacking and identity-based change are especially memorable — focus less on goals, more on systems and becoming the type of person you want to be.'
);