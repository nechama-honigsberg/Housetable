const House = require('../models/House');

module.exports = {

    //add new House
    addHouse: async (req, res) => {
        const newHouse = new House({
            "address": req.body.address,
            "currentValue": req.body.currentValue,
            "loanAmount": req.body.loanAmount,
            "risk": req.body.risk,
        });

        try {
            await newHouse.save();
            res.status(200).json({ House: newHouse });
        } catch (error) {
            console.log(error);
            res.status(502).json({ error });
        }
    },

    //get all House
    getAllHouse: async (req, res) => {
        try {
            Houses = await House.find();
            new Promise((resolve, rejects) => {
                if (Houses == null) {
                    rejects("Dont have Houses");
                }
                else
                    resolve(Houses);
            }).then(Houses => {
                return res.json({ status: 200, Houses: Houses });
            }).catch(msg => {
                res.send(msg);
            })
        } catch (error) {
            res.status(500).json({ myMessage: error.message });
        }
    },

    // get House by id
    getHouse: (req, res) => {
        const id = req.params.id;

        House.findById(id).then((result) => {
            res.status(200).json({ result });
        }).catch(error => {
            res.status(500).json({ error });
        })
    },

    // edit House
    editHouse: async (req, res) => {
        try {
            const id = req.params.id;
            const data = req.body;

            // Checking whether the house exists
            const existingHouse = await House.findOne({ _id: id });
            if (!existingHouse) {
                return res.status(404).json({ error: 'House not found' });
            }

            // Update only the attributes present in the data
            Object.keys(data).forEach(key => {
                if (data[key] !== undefined) {
                    existingHouse[key] = data[key];
                }
            });

            await existingHouse.save();
            res.status(200).json({ house: existingHouse });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    deleteHouse: async (req, res) => {
        House.findByIdAndDelete(req.params.id)
            .then(result => {
                res.status(200).json({
                    message: 'House deleted'
                })
            }).catch(error => {
                res.status(500).json({
                    error
                })
            })
    }
}