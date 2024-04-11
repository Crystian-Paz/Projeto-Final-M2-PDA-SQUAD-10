class infoMember {
    constructor() {
        this.data = {};
    }

    addInfo(key, valor) {
        this.data[key] = valor;
    }

    getInfo(key) {
       return this.data[key];
    }

    findKey(key) {
        return this.data.hasOwnProperty(key); 
    }

    removeInfo(key) {
        if (this.findKey(key)) {
            delete this.data[key];
            return true;
        }
        else {
            return false;
        }
    }
}

function info(namet, githubt, linkedint) {
    const member = new infoMember(); 

    member.addInfo('name', namet);
    member.addInfo('github', githubt);
    member.addInfo('linkedin', linkedint);

    return member; 
}

const inforMember1 = info('Crystian Silva', 'https://github.com/Crystian-Paz', 'https://www.linkedin.com/in/crystian-silva-79b06326b/');
const inforMember2 = info('Sabrina Matos', 'https://github.com/MatosSabriScript', 'https://www.linkedin.com/in/sabrina-m-05aa76210?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app');

console.log(inforMember1, inforMember2);
