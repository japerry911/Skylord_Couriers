const jsonData = require('../seeds/usersRaw.json');
const fs = require('fs');
const bcrypt = require('bcrypt');

async function hashPasswords() {
    const salt = await bcrypt.genSalt(10);

    const newJsonArray = await Promise.all(jsonData.map(async userObject => {
        return await bcrypt.hash(userObject.password, salt)
                    .then(hashedPassword => {
                        return { ...userObject, password: hashedPassword };
                    })
                    .catch(error => console.error(`Error: ${error}`))}));
    
    await fs.writeFile('../seeds/users.json', JSON.stringify(newJsonArray, null, 4), error => {
        if (error) {
            console.error(`Error: ${error}`);
        }

        console.log('Data written to file successfully.');
    });
}

hashPasswords();