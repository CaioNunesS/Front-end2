let darkMode = document.querySelector('body').classList.add('darkMode');
console.log(darkMode);

let dark = document.querySelector('.darkMode');

let confirmacao = confirm('Deseja alterar para o tema escuro?')
if(confirmacao === false){
    dark.classList.toggle('darkMode')
};

let felinos = [

    {
        image: './imagens/tiger.jpg',
        title: 'O tigre',
        text: 'O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae) pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro e é a maior espécie de felino do mundo junto com o leão.'              
    },
    {
        image: './imagens/leon.jpg',
        title: 'O leão',
        text: ' O leão (Panthera leo) é um mamífero carnívoro da família dos felinos é uma das cinco espécies do gênero gênero Panthera. Os leões selvagens vivem em populações cada vez mais dispersas e fragmentadas na África subsahariana(com exceção das regiões florestais e das regiões de selva da Bacia do Congo) e uma pequena área do noroeste da Índia.'  
    },
    {
        image: './imagens/leopardo.jpg',
        title: 'O leopardo',
        text: 'O leopardo (Panthera pardus) é um mamífero carnívoro da família dos felinos. Como três dos outros O leopardo (Panthera pardus) é um mamífero carnívoro da família dos felinos. Como três dos outros felinos do gênero Panthera: o leão, o tigre e a onça-pintada, são caracterizados por uma modificação do osso hióide que lhes permite rugir É também conhecido como pantera marrom e, quando tem a pelagem completamente escura, como pantera negra (melanista). '              
    },
    {
        image: './imagens/pantera-negra.jpg',
        title: 'A Onça pintada',
        text: 'A Onça pintada, ou jaguarete (Panthera onca) é um carnívoro felídeo da sub-família Panthera e do gênero Panthera. É a única das cinco espécies existentes deste gênero encontradas nas Américas. Também é o maior felino das Américas e o terceiro maior do mundo, depois do tigre (Panthera tigris) e do leão (Panthera leo).'              
    },
    {
        image: './imagens/chita.jpg',
        title: 'O guepardo',
        text: ' O guepardo, ou chita (Acinonyx jubatus) é um membro atípico da família felina. É o único representante vivo do gênero Acinonyx. Ele caça graças à sua visão e grande velocidade. É o animal terrestre mais rápido mais rápido do mundo, atingindo uma velocidade máxima de 115 km/h em corridas de até quinhentos metros.'              
    },
    {
        image: './imagens/leopardo.jpg',
        title: 'O leopardo',
        text: 'O leopardo (Panthera pardus) é um mamífero carnívoro da família dos felinos. Como três dos outros felinos do gênero Panthera: o leão, o tigre e a onça-pintada, são caracterizados por uma modificação do osso hióide que lhes permite rugir. É também conhecido como pantera marrom e, quando tem a pelagem completamente escura, como pantera negra (melanista).'              
    }
];

const container = document.querySelector(".container");
  
for (i = 0; i < felinos.length; i++) {
  container.innerHTML += `
    <div class="item">
    <img src="${felinos[i].image}">
    <h2>${felinos[i].title}</h2>
    <p>
    ${felinos[i].text}</p>
  </div>
    `;
}





