const phonebook = require('../phonebook');

module.exports = {
  index: (req, res) => {
    let contacts = phonebook.getData
    res.render('index', {contacts});
    // TODO: load index page
  },
  addPhonebookPost:(req, res) => {
    console.log(req.body)
    phonebook.saveContact(req.body.name,req.body.number)
    res.redirect('/')
  }
}