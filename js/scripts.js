//Partiendo de este HTML selecciona en JavaScript el h3 y utilizándolo
//como punto de partida imprime la información de todos los elementos que hay en formato
//"familia": Soy un h3 con el id... y la clase... mi padre es un header con....
//mi hermano es un h1 con....
const header = {
    tagName: 'header',
    classList: ['header'],
    children: [
        {
            children: [],
            tagName: 'h1',
            id: 'main-title',
            classList: ['title', 'title--big'],
            textContent: 'Soy un título'
        },
        {
            tagName: 'h2',
            id: 'main-subtitle',
            classList: ['subtitle', 'subtitle--big'],
            textContent: 'Soy un subtítulo'
        },
        {
            tagName: 'h3',
            id: 'start-point',
            classList: ['start']
        }
    ]
}
const startPoint = document.getElementById('start-point');
const parent = startPoint.parentElement;
const secondBro = startPoint.previousElementSibling;
const firstBro = secondBro.previousElementSibling;
console.log(`Familia: Soy un ${startPoint.tagName.toLowerCase()} con el id ${startPoint.id} y la clase ${startPoint.classList}. \n
    Mi padre es un ${parent.tagName.toLowerCase()} con su clase ${parent.classList} y tiene dos hijos más: \n
    Mi hermano mayor es un ${firstBro.tagName.toLowerCase()} con su id ${firstBro.id} y sus clases ${firstBro.classList[0]} y 
    ${firstBro.classList[1]}. Lo único que dice siempre es '${firstBro.textContent}'. \n
    Mi otro hermano se llama ${secondBro.tagName.toLowerCase()} y su id es ${secondBro.id}. Sus clases son ${secondBro.classList[0]} 
    y ${secondBro.classList[1]} y este lo único que dice es '${secondBro.textContent}'.`);


