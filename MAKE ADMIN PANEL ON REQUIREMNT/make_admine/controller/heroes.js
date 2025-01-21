const fs = require("fs")

const Addhero = async (req, res) => {
    try {
        const data = JSON.parse(fs.readFileSync("db.json"))
        data.heroes.push(req.body)
        fs.writeFileSync("db.json", JSON.stringify(data, null, 2))
        res.status(200).json(data.heroes)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
const Get_heros = async (req, res) => {
    try {
        const data = JSON.parse(fs.readFileSync("db.json"))
        res.status(200).json(data.heroes)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
const Update = async (req, res) => {
    try {
        const { hero_id } = req.params
        const data = JSON.parse(fs.readFileSync("db.json"))
        const hero = data.heroes.find((e) => e.id === parseInt(hero_id))
        if (!hero) {
            return res.status(400).json({ message: "Hero not found" })
        }
        hero.villains.push(req.body)
        fs.writeFileSync('db.json',JSON.stringify(data,null,2))
        res.status(200).json(hero)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
const deleteheroes=async(req,res)=>{
    try {
        const {hero_id}=req.params
        const data = JSON.parse(fs.readFileSync('db.json'));
        const index = data.heroes.findIndex((h) => h.id === parseInt(hero_id));

        if (index === -1) {
            return res.status(404).json({ message: 'Hero not found' });
        }

        data.heroes.splice(index, 1);
        fs.writeFileSync('db.json', JSON.stringify(data, null, 2));
        res.status(200).json(data.heroes);
    } catch (error) {
        res.status(400).json({message:error.message})
    }

}
module.exports = { Addhero, Get_heros,Update,deleteheroes }