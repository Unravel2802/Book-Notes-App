-- Change id to generated always so we can add book manually (straight to the table database) or from the website
CREATE TABLE books (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  isbn VARCHAR(20),
  read_date DATE,
  note TEXT
);

INSERT INTO books (title, author, isbn, read_date, note) VALUES
('Atomic Habits', 'James Clear', '9780735211292', '2024-08-01',
 'A practical, psychology-driven guide to how small habits compound into big results. Clear breaks down the “habit loop” (cue, craving, response, reward) and shows how to design environments that make good habits easy and bad habits harder. His ideas on habit stacking and identity-based change are especially memorable — focus less on goals, more on systems and becoming the type of person you want to be.'
);