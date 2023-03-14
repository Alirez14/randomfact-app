import express from "express";
import routerFacts from "./routes/routeFacts.js";

const app = express();
const port = 3000;
app.use(express.json());

app.use('/api/fact/', routerFacts);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

// C: new fav fact done
// C : New Fact done
// D: delete fav fact done
// U: update fav fact done
// R: read fav with filter
// R : open ai dalle
