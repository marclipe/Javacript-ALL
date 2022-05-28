//Incluir na mensagens de boas vindas, a cidade e o UF do usuário  

type user = {
    name: string; 
    address: {
        city: string; 
        uf: string; 
    }
};

function showWelcomeMessage(user) {
    console.log(user); 
    return `Welcome ${user.name} (${user.address.city} - ${user.address.uf})`;
}  

showWelcomeMessage({
    name_: 'Marcos', 
    address: {
        city: 'Barras', 
        uf: 'PI',
    }
})

