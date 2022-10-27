var readline = require('readline')
const models = require('./models')
const database = require('./database').connectToDatabase()

var rl = readline.createInterface(
    process.stdin, process.stdout
)
rl.question('  ', async (msg) => {
    console.log(`
        Olá, Boa tarde! O que você gostaria ?
        1- Solicitar segunda via do boleto. 
        2- Rastreamento do pedido.
        3- Cancelar pedido.
        4- Troca/Devolução.
    `)
    rl.question(' > ', async (number) => {
    switch(number){
            case '1':
            console.log('segunda via do boleto');
            break;
        
            case '2':
            console.log(`
            Pedido rastreado com sucesso!
            Seu pedido está a caminho de sua residencia.
            `)
            break;
        
            case '3':
            console.log('Pedido cancelado com sucesso!')
            rl.rollback()
            break;
    
            case '4':
            console.log('Troca ou Devolução feita com sucesso!')
            rl.rollback()
            break;
    
            default:
            console.log('Desculpe, não entendi o que você quis dizer.')
            rl.rollback()
            break;
        }
            const saveInDatabase = await models.create({client_message: [msg, number]})
            rl.close()
    })

})



// rl.question('What is your age? ', (age) => {
//     console.log('Your age is: ' + age)
//     rl.close()
// })

// rl.setPrompt(`What is your age? `);
// rl.prompt()
// rl.on('line', (age) => {
//     console.log(`Age received by the user: ${age}`);
//     rl.close();
// });