import posts from "./tuits.js";
let tuits = posts;


export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
   }

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime() + '';
    newTuit.likes = 0;
    newTuit.dislikes = 0;
    newTuit.liked = false;
    tuits.push(newTuit);
    res.json(newTuit);
}
const findTuits  = (req, res) => {
    // const tuitID = req.params.uid;
    // if (tuitID) {
    //     const tuit = tuits.find(t => t._id === tuitID);
    //     res.json(tuit);
    // }
    res.json(tuits);
}
const updateTuit = (req, res) => {
    const tuitID = req.params.tid;
    const updates = req.body;
    const tuitIndex = tuits.findIndex((t) => t._id === tuitID);
    tuits[tuitIndex] = {...tuits[tuitIndex], ...updates};
    res.sendStatus(200);
}
const deleteTuit = (req, res) => {
    const tuitID = req.params.tid;
    tuits = tuits.filter(tuit => tuit._id !== tuitID);
    res.sendStatus(200);
}