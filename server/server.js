import cors from "cors";
import express from "express";
import routerFacts from "./routes/routeFacts.js";

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

app.use("/api/fact/", routerFacts);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

// C: new fav fact done
// C : New Fact done
// D: delete fav fact done
// U: update fav fact done
// R: read fav with filter
// write the list to the file
// read the list from the file
// R : open ai dalle
