<div align="center">

# 🛡️ Classificador de Nível de Herói

<img src="golen.gif" alt="Golem de Pedra" width="400px">

Este projeto faz parte do desafio prático da formação **DIO (Digital Innovation One)**. O objetivo principal é aplicar conceitos fundamentais de lógica de programação para classificar heróis com base em sua experiência (XP).

</div>

---

## 🚀 O Desafio
O algoritmo processa informações de uma equipe de heróis e, de acordo com as faixas de experiência pré-definidas, determina seu Rank atual, desde o nível **Ferro** até o **Radiante**.

### 🛠️ Requisitos Técnicos Utilizados:
* **Variáveis e Objetos:** Armazenamento estruturado dos dados dos heróis.
* **Arrays:** Organização da equipe e das regras de pontuação.
* **Laços de Repetição (`for`):** Automação para processar múltiplos personagens simultaneamente.
* **Métodos Modernos (`.find`):** Busca eficiente dentro de listas de objetos para evitar o uso excessivo de `if/else`.
* **Template Strings:** Saída de dados formatada de forma clara no console.

---

## 📋 Como Funciona a Lógica
O projeto utiliza uma tabela de referência (`regrasRank`) para identificar automaticamente em qual faixa o herói se encontra:

| XP | Rank |
| :--- | :--- |
| Menor que 1.000 | **Ferro** |
| 1.001 a 2.000 | **Bronze** |
| 2.001 a 5.000 | **Prata** |
| 5.001 a 7.000 | **Ouro** |
| 7.001 a 8.000 | **Platina** |
| 8.001 a 9.000 | **Ascendente** |
| 9.001 a 10.000 | **Imortal** |
| Maior ou igual a 10.001 | **Radiante** |

---

## 💻 Exemplo de Saída
Após a execução no Node.js, o console exibirá mensagens como:
> `O herói de nome: Tears é do nível 5 e tem o rank Ferro.`  
> `O herói de nome: Valkyrie é do nível 108 e tem o rank Radiante.`

---

## ✒️ Autor
Desenvolvido com ⚡ por **Mauricio Ribas** durante a jornada na DIO. 🚀
