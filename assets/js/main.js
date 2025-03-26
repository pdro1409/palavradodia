const versiculos = {
    1: "No princípio, Deus criou os céus e a terra. - Gênesis 1:1",
    2: "O Senhor é a minha luz e a minha salvação; de quem terei medo? - Salmos 27:1",
    3: "Tudo posso naquele que me fortalece. - Filipenses 4:13",
    4: "Deem graças em todas as circunstâncias, pois esta é a vontade de Deus para vocês em Cristo Jesus. - 1 Tessalonicenses 5:18",
    5: "O Senhor é bom, um refúgio em tempos de angústia. - Naum 1:7",
    6: "E conhecerão a verdade, e a verdade os libertará. - João 8:32",
    7: "O Senhor te guardará de todo mal; ele guardará a tua alma. - Salmos 121:7",
    8: "Entrega o teu caminho ao Senhor; confia nele, e ele tudo fará. - Salmos 37:5",
    9: "Alegrem-se sempre no Senhor. Novamente direi: Alegrem-se! - Filipenses 4:4",
    10: "Porque vivemos por fé, e não pelo que vemos. - 2 Coríntios 5:7",
    11: "Sede fortes e corajosos, todos vocês que esperam no Senhor! - Salmos 31:24",
    12: "O amor seja sem hipocrisia. Detestai o mal, apegai-vos ao bem. - Romanos 12:9",
    13: "Buscai primeiro o Reino de Deus e a sua justiça, e todas essas coisas vos serão acrescentadas. - Mateus 6:33",
    14: "Se Deus é por nós, quem será contra nós? - Romanos 8:31",
    15: "O coração do homem pode fazer planos, mas a resposta certa vem do Senhor. - Provérbios 16:1",
    16: "O Senhor luta por vocês; apenas acalmem-se. - Êxodo 14:14",
    17: "O Senhor está perto dos que têm o coração quebrantado. - Salmos 34:18",
    18: "Ensina-nos a contar os nossos dias para que alcancemos coração sábio. - Salmos 90:12",
    19: "Não se amoldem ao padrão deste mundo, mas transformem-se pela renovação da sua mente. - Romanos 12:2",
    20: "Esforça-te, e ele fortalecerá o teu coração, espera, pois, no Senhor. - Salmos 27:14",
    21: "O temor do Senhor é o princípio da sabedoria. - Provérbios 9:10",
    22: "Lâmpada para os meus pés é a tua palavra, e luz para o meu caminho. - Salmos 119:105",
    23: "O meu Deus suprirá todas as necessidades de vocês, de acordo com as suas gloriosas riquezas em Cristo Jesus. - Filipenses 4:19",
    24: "Pois eu bem sei os planos que tenho para vocês, diz o Senhor. - Jeremias 29:11",
    25: "Clama a mim, e responder-te-ei e anunciar-te-ei coisas grandes e ocultas, que não sabes. - Jeremias 33:3",
    27: "O choro pode durar uma noite, mas a alegria vem pela manhã. - Salmos 30:5",
    26: "Aquele que habita no esconderijo do Altíssimo, à sombra do Todo-Poderoso descansará. - Salmos 91:1",
    28: "A resposta branda desvia o furor, mas a palavra dura suscita a ira. - Provérbios 15:1",
    29: "A paz de Deus, que excede todo entendimento, guardará o vosso coração e a vossa mente em Cristo Jesus. - Filipenses 4:7",
    30: "Não temas, porque eu sou contigo; não te assombres, porque eu sou o teu Deus. - Isaías 41:10",
    31: "Aqueles que esperam no Senhor renovarão as suas forças; subirão com asas como águias. - Isaías 40:31"
};

function versiculosDoDia(){
    const data = new Date()
    const dia = data.getDate()

    return versiculos[dia]
}

console.log(versiculosDoDia())

const p = document.getElementById('palavra')
p.innerText = versiculosDoDia()