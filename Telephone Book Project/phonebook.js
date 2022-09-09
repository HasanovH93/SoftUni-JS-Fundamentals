const Contact = require("./models/Contact");

let phonebook = [
	new Contact('Peter','+1-555-1793'),
	new Contact('Hasan','+1-666-8888')
	
	
];

function getData(){
	return phonebook;
}
function saveContact(name,number){
	let contact = new Contact(name,number)
	phonebook.push(contact)
}

module.exports = {
	getData,
	saveContact
}

