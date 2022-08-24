import readline from "readline";

let rl = readline.createInterface(process.stdin,process.stdout);
const ordena = () => {
    let recebe = [];
    rl.question (`Digite sua propriedade: `, (resposta) => {
        if (resposta.trim().toUpperCase() == "SAIR"){
            rl.close();
        }else {
            recebe.push(resposta);
            rl.setPrompt(`Digite outra propriedade: `);
            rl.prompt();

            rl.on("line", (resposta) => {
                if (resposta.trim().toUpperCase() == "SAIR"){
                    rl.close();
                }else {
                recebe.push(resposta);
                rl.setPrompt(`Digite outra propriedade: `);
                rl.prompt();
            }
        })
    }});
    rl.on("close",() => {
        console.log ("%s",recebe.sort());
        process.exit();
    });
} 
ordena ();