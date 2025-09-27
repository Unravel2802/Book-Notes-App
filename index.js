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
];


app.get('/', (req, res) => {
    res.render("index.ejs", 
        {
            books: books,
        }
    );
});

app.post('/add', async (req, res) => {
    
});

app.post('/edit', async (req, res) => {
    
});

app.get('/delete', async (req, res) => {
    
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
