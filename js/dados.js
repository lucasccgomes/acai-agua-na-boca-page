var MENU = {
    "cardapio-geral": [
        {
            "id": "copo330",
            "img": "./img/cardapio/geral/cardapio-humberto-pag1.png",
            "name": "",
            "dsc": "",
            "price": 16.00
        },
       
       
       

    ],
    "acai-vitamina": [
        {
            "id": "copo330",
            "img": "./img/cardapio/geral/cardapio-humberto-pag2.png",
            "name": "",
            "dsc": "",
            "price": 16.00
        },
       
    ],
    "milk-shake": [
        {
            "id": "copo330",
            "img": "./img/cardapio/geral/cardapio-humberto-pag3.png",
            "name": "",
            "dsc": "",
            "price": 16.00
        },
       
    ]
}

var ACRESCIMOS = {
    "acrescimos-comum": [
        {
            "id": "leite-em-po",
            "name": "Leite em Pó",
            "price": 2.00
        },
        {
            "id": "leite-condensado",
            "name": "Leite Condensado",
            "price": 2.00
        },     
        {
            "id": "morango",
            "name": "Morango",
            "price": 2.00
        },
        {
            "id": "pacoca",
            "name": "Paçoca",
            "price": 2.00
        },
        {
            "id": "kiwi",
            "name": "Kiwi",
            "price": 2.00
        },
        {
            "id": "banana",
            "name": "Banana",
            "price": 2.00
        },
        {
            "id": "granola",
            "name": "Granola",
            "price": 2.00
        },
        {
            "id": "manga",
            "name": "Manga",
            "price": 2.00
        },
        {
            "id": "abacaxi",
            "name": "Abacaxi",
            "price": 2.00
        },
        
    ],
    "acrescimos-especiais": [
        {
            "id": "bis",
            "name": "Bis",
            "price": 3.00
        },

        {
            "id": "nutella",
            "name": "Nutella",
            "price": 4.00
        },
        {
            "id": "kit-kat",
            "name": "Kit Kat",
            "price": 3.50
        },
        {
            "id": "geral-ninho",
            "name": "geral de Ninho",
            "price": 4.00
        },
        {
            "id": "mouse-maracuja",
            "name": "Mouse de Maracujá",
            "price": 4.00
        },
        {
            "id": "gotas-chocolate",
            "name": "Gotas de Chocolate",
            "price": 2.50
        },
        {
            "id": "granulado",
            "name": "Granulado",
            "price": 2.00
        },
        {
            "id": "mEm",
            "name": "M&M's",
            "price": 3.00
        },
        {
            "id": "ovomaltine",
            "name": "Ovomaltine",
            "price": 2.50
        },
        {
            "id": "chocoball",
            "name": "Chocoball",
            "price": 2.50
        }
    ]
}

var MILK_SHAKE = {
    "sorvetes": [
        {
            "id": "chocolate",
            "name": "Chocolate",
            "desc": "sorvete"
        },
        {
            "id": "morango",
            "name": "Morango",
            "desc": "sorvete"
        },     
        {
            "id": "coco",
            "name": "Coco",
            "desc": "sorvete"
        },
        {
            "id": "sensacao",
            "name": "Sensação",
            "desc": "sorvete"
        },
        {
            "id": "amendoim",
            "name": "Amendoim",
            "desc": "sorvete"
        },
        {
            "id": "bom-bom",
            "name": "Bom-Bom",
            "desc": "sorvete"
        },
        {
            "id": "chicletes",
            "name": "Chicletes",
            "desc": "sorvete"
        },
        {
            "id": "ninho",
            "name": "Ninho",
            "desc": "sorvete"
        },
        {
            "id": "talento",
            "name": "Talento",
            "desc": "sorvete"
        },

        {
            "id": "laka",
            "name": "Laka",
            "desc": "sorvete"
        },
        
        {
            "id": "limao",
            "name": "Limão",
            "desc": "sorvete"
        },

    ],
    "coberturas": [
        {
            "id": "chocolate",
            "name": "Chocolate",
            "desc": "cobertura"
        },
        {
            "id": "morango",
            "name": "Morango",
            "desc": "cobertura"
        },     
        {
            "id": "leite-condensado",
            "name": "Leite Condensado",
            "desc": "cobertura"
        },
        {
            "id": "doce-de-leite",
            "name": "Doce de Leite",
            "desc": "cobertura"
        },
        {
            "id": "caramelo",
            "name": "Caramelo",
            "desc": "cobertura"
        },
        {
            "id": "maracuja",
            "name": "Maracujá",
            "desc": "cobertura"
        },
        {
            "id": "uva",
            "name": "Uva",
            "desc": "cobertura"
        },

    ]

}

// Remover comentario em produção

function recarregarScript() {
    // Obtenha o elemento script existente
    var scriptElement = document.getElementById('dados');
    var scriptElement2  = document.getElementById('appId');

    if (scriptElement) {
        // Remova o script do DOM
        scriptElement.parentNode.removeChild(scriptElement);

        // Crie um novo elemento script
        var novoScript = document.createElement('script');

        // Atribua o mesmo ID para garantir que o novo script seja reconhecido
        novoScript.id = 'dados';

        // Atribua o caminho do arquivo ao novo script
        novoScript.src = './js/dados.js';

        // Adicione o novo script ao final do corpo (ou ao local desejado)
        document.body.appendChild(novoScript);
        
    } else {
        //console.error('Script não encontrado.');
    }
}

// Armazene o estado do console
var consoleAberto = false;

// Verifique regularmente se o console está aberto
setInterval(function() {
    if (window.outerWidth - window.innerWidth > 200 || window.outerHeight - window.innerHeight > 200) {
        carregarDadosNovamente();

    }
}, 5000);

function carregarDadosNovamente() {
    MEU_CARRINHO = [];
    localStorage.setItem('meu_carrinho', JSON.stringify([MEU_CARRINHO]));
    recarregarScript();
    //console.log('O console foi aberto..');
}
