const Contact = require("../model/contact.model");

const Get_contact = async (req, res) => {
  try {
    res.render("contact");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const Submit_contact = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).send("All fields are required");
  }

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.redirect("/");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { Get_contact, Submit_contact };
