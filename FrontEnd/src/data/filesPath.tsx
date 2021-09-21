import img1 from "../assets/certificados/1.png";
import img2 from "../assets/certificados/2.png";
import img3 from "../assets/certificados/3.png";
import img4 from "../assets/certificados/4.png";
import img5 from "../assets/certificados/5.png";
import img6 from "../assets/certificados/6.png";
import img7 from "../assets/certificados/7.png";
import img8 from "../assets/certificados/8.png";
import img9 from "../assets/certificados/9.png";
import img10 from "../assets/certificados/10.png";
import img11 from "../assets/certificados/11.png";
import img12 from "../assets/certificados/12.png";
import img13 from "../assets/certificados/13.png";
import img14 from "../assets/certificados/14.png";
import img15 from "../assets/certificados/15.png";
import img16 from "../assets/certificados/16.png";
import img17 from "../assets/certificados/17.png";

export interface item{
    _id:string,
    fileName: string,
    Img: string
}

export interface datatype extends Array<item>{
    [index: number]: item
};
    
const data:datatype = 
    [{
        _id: '1',
        fileName: 'Criando seu primeiro App com Flutter 7184 baltaIo',
        Img: img1
    },
    {
        _id: '2',
        fileName: 'Curso de Python',
        Img: img2
    },
    {
        _id: '3',
        fileName: 'Dominando a Orientação a Objetos e Componentes em Delphi (Avançado)',
        Img: img3
    },
    {
        _id: '4',
        fileName: 'Flutter Apps 7192 baltaIo',
        Img: img4
    },
    {
        _id: '5',
        fileName: 'Flutter Apps 7193 baltaIo',
        Img: img5
    },
    {
        _id: '6',
        fileName: 'Html na Prática',
        Img: img6
    },
    {
        _id: '7',
        fileName: 'Introdução a linguagem JavaScript',
        Img: img7
    },
    {
        _id: '8',
        fileName: 'Introdução a linguagem Python',
        Img: img8
    },
    {
        _id: '9',
        fileName: 'Introdução ao C#',
        Img: img9
    },
    {
        _id: '10',
        fileName: 'Curso de Introdução ao JavaScript',
        Img: img10
    },
    {
        _id: '11',
        fileName: 'Linguagem JavaScript: objetos',
        Img: img11
    },
    {
        _id: '12',
        fileName: 'Lógica de programação com Dart',
        Img: img12
    },
    {
        _id: '13',
        fileName: 'O que é UML',
        Img: img13
    },
    {
        _id: '14',
        fileName: 'Primeiros passos com React',
        Img: img14
    },
    {
        _id: '15',
        fileName: 'Minha Primeira Single Page Application com React',
        Img: img15
    },
    {
        _id: '16',
        fileName: 'Rtti na prática(Delphi)',
        Img: img16
    },
    {
        _id: '17',
        fileName: 'Tratamento de exceções em Delphi',
        Img: img17
    }
];

export default data;