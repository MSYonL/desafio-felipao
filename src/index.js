let equipeHerois = [
    { nome: "Tears", classe: "Ranger", nivel: 5, experiencia: 501 },
    { nome: "Doom", classe: "Warrior", nivel: 12, experiencia: 1256 },
    { nome: "Shadow", classe: "Assassin", nivel: 91, experiencia: 9168 },
    { nome: "Golem", classe: "Tank", nivel: 52, experiencia: 5271 },
    { nome: "Valkyrie", classe: "Support", nivel: 108, experiencia: 18542 },
    { nome: "Blaze", classe: "Fighter", nivel: 45, experiencia: 4511 },
    { nome: "Phoenix", classe: "Mage", nivel: 84, experiencia: 8422 },
    { nome: "Luna", classe: "Illusionist", nivel: 61, experiencia: 6189 }
]; // array para armazenar os heróis da equipe

const regrasRank = [
    { limite: 1000, nome: "Ferro" },
    { limite: 2000, nome: "Bronze" },
    { limite: 5000, nome: "Prata" },
    { limite: 7000, nome: "Ouro" },
    { limite: 8000, nome: "Platina" },
    { limite: 9000, nome: "Ascendente" },
    { limite: 10000, nome: "Imortal" },
    { limite: Infinity, nome: "Radiante" }
]; // array para armazenar as regras de rank

for (let i = 0; i < equipeHerois.length; i++) { // loop para percorrer o array de heróis
    let heroi = equipeHerois[i]; // acessa cada herói do array
    let rankAtual = regrasRank.find(r => heroi.experiencia <= r.limite); // encontra o rank correspondente à experiência do herói

    console.log(`O herói de nome: ${heroi.nome} é do nível ${heroi.nivel} e tem o rank ${rankAtual.nome}.`) // exibe as informações do herói e seu rank
};
