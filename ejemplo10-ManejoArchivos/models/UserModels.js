//Modelo de Usuario utilizando un archivo

//Nos da acceso a la API de manejo de archivos

const fs=require('fs').promises

const UserFile = "users.txt"; //Arhivo donde se almacenan los datos

const UserModel = {
    async getUsers () {
    try{
        const data =await fs.readFile(UserFile,'utf-8');
        return JSON.parse(data);
    }catch (error) {
        return error
    }
},

async saveUser(user) {
    try {
        const users = await this.getUsers();
        users.push(user);
        await fs.writeFile(UserFile,JSON.stringify(users),'utf-8');
        return true;
    }catch(error) {
        return error
    }
 },
}

module.exports=UserModel;