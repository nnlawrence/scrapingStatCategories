import axios from 'axios';
import cheerio from 'cheerio';
import express from 'express';

const port = 8000;

const app = express();

const url = 'https://www.nba.com/stats';

axios(url)
  .then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);
    const statCategories: {
      title: string;
    }[] = [];

    $('.LeaderBoardCard_lbcTitle___WI9J', html).each(function () {
      const title = $(this).text();

      statCategories.push({
        title
      });
    });
    console.log(statCategories);
  })
  .catch((err) => console.log(err));

app.listen(port, () => console.log(`server running on port ${port}`));
