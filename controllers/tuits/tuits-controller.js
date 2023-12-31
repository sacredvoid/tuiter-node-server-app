// import posts from "./tuits.js";
// let tuits = posts;
import * as tuitsDao from './tuits-dao.js'

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
   }

const createTuit = async (req, res) => {
    const newTuit = req.body;
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
    console.log(insertedTuit);
}
const findTuits  = async (req, res) => {
    const tuits = await tuitsDao.findTuits();
    res.json(tuits);
}
const updateTuit = async (req, res) => {
    const tuitID = req.params.tid;
    const updates = req.body;
    const status = await tuitsDao.updateTuit(tuitID, updates);
    res.json(status);
}
const deleteTuit = async (req, res) => {
    const tuitID = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitID);
    const tuits = await tuitsDao.findTuits();
    res.json(tuits);
}