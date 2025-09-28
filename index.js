import bodyParser from 'body-parser';
import express from "express";
import pg from "pg";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "bookshelf",
    password: "123456",
    port: 5432,     
});
db.connect()

let books = [
    {
        id: "1", 
        title: "Atomic Habits",
        author: "James Clear",
        note: "A practical, psychology-driven guide to how small habits compound into big results. Clear breaks down the “habit loop” (cue, craving, response, reward) and shows how to design environments that make good habits easy and bad habits harder. His ideas on habit stacking and identity-based change are especially memorable — focus less on goals, more on systems and becoming the type of person you want to be.",
        isbn: "9780735211292",
        date: "2024-08-01",
    },
    {
        id: "2", 
        title: "Deep Work",
        author: "Cal Newport",
        note: "Newport argues that deep, focused work is becoming rare in our distracted age, but also increasingly valuable. He defines “deep work” vs “shallow work,” and offers strategies to cultivate focus: schedule blocks of deep work, quit low-value distractions (like unnecessary social media), and embrace boredom instead of filling every gap with stimuli. Key idea: deep work isn’t about willpower — it’s about creating rituals and structures that make concentration easier.",
        isbn: "9781455586691",
        date: "2024-06-12",
    },
    {
        id: "3", 
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        note: "Kahneman explains the two systems of thought: fast, intuitive System 1 and slow, deliberate System 2. He shows how cognitive biases like anchoring, overconfidence, and loss aversion distort our decisions. Dense but insightful, a must-read for understanding human judgment and decision-making.",
        isbn: "9780374533557",
        date: "2023-11-20",
    },
    {
        id: "4", 
        title: "The Lean Startup",
        author: "Eric Ries",
        note: "Ries introduces a method for building startups through rapid iteration and validated learning. The focus is on testing ideas quickly with minimum viable products (MVPs), measuring real user behavior, and pivoting or persevering. A practical playbook for entrepreneurs and product builders.",
        isbn: "9780307887894",
        date: "2024-04-15",
    },
    {
        id: "5", 
        title: "Meditations",
        author: "Marcus Aurelius",
        note: "A series of personal reflections by the Roman emperor on stoicism, virtue, and mortality. Timeless lessons on focusing only on what is within your control, accepting what you cannot, and living with integrity. Feels like receiving private wisdom from 2000 years ago.",
        isbn: "9780140449334",
        date: "2022-09-10",
    },
    {
        id: "6", 
        title: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        note: "Harari traces human history from early hunter-gatherers to modern civilization. He argues that shared myths — money, religion, nations — enabled cooperation at scale. Sweeping, ambitious, and thought-provoking, though sometimes speculative. Great for seeing the big picture of humanity.",
        isbn: "9780062316097",
        date: "2023-03-05",
    },
    {
        id: "7", 
        title: "Man’s Search for Meaning",
        author: "Viktor E. Frankl",
        note: "Frankl, a psychiatrist and Holocaust survivor, describes how meaning helps people endure suffering. His idea of logotherapy — that our main drive is to find purpose rather than pleasure or power — is powerful and moving. Both heartbreaking and hopeful, a book that stays with you.",
        isbn: "9780807014271",
        date: "2024-01-28",
    },
];


app.get('/', async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM books");
        books = result.rows;
        res.render("index.ejs", 
        {
            books: books,
        }
    );
    } catch (err) {
        console.log(err)
    }
});

app.post('/add', async (req, res) => {
    const title = req.body.title
    const author = req.body.author;
    const isbn = req.body.isbn;
    const date = req.body.date;
    const note = req.body.note;
    try {
        db.query("INSERT INTO books (title, author, isbn, read_date, note) VALUES ($1, $2, $3, $4, $5)", 
            [title, author, isbn, date, note]
        )
        res.redirect('/')
    } catch (err) {
        console.log(err);
    }
});

app.post('/edit', async (req, res) => {
    
});

app.get('/delete', async (req, res) => {
    
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
