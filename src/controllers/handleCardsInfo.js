const cardHandleAI = (req, res) => {
  const { category } = req.body;
  fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=ca43d42a77d5f7641cca48352f415f5b`)
    .then((resp) => resp.json())
    .then((data) => res.json(data));
};
module.exports = cardHandleAI;
