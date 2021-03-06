const usableWords = [
  'sagaz',
  'negro',
  'amago',
  'exito',
  'mexer',
  'termo',
  'senso',
  'nobre',
  'algoz',
  'afeto',
  'plena',
  'etica',
  'mutua',
  'sutil',
  'tenue',
  'vigor',
  'aquem',
  'audaz',
  'porem',
  'fazer',
  'sanar',
  'secao',
  'inato',
  'assim',
  'cerne',
  'desde',
  'ideia',
  'fosse',
  'poder',
  'moral',
  'torpe',
  'honra',
  'justo',
  'muito',
  'anexo',
  'gozar',
  'futil',
  'razao',
  'quica',
  'icone',
  'etnia',
  'sobre',
  'tange',
  'egide',
  'lapso',
  'mutuo',
  'sonho',
  'expor',
  'haver',
  'habil',
  'casal',
  'amigo',
  'posse',
  'pesar',
  'tempo',
  'avido',
  'ardil',
  'entao',
  'bocal',
  'corja',
  'genro',
  'coser',
  'seara',
  'dengo',
  'prole',
  'detem',
  'causa',
  'dizer',
  'tenaz',
  'digno',
  'dever',
  'crivo',
  'obice',
  'apice',
  'saber',
  'porra',
  'ansia',
  'brado',
  'ceder',
  'gleba',
  'animo',
  'paria',
  'assaz',
  'atroz',
  'comum',
  'graca',
  'culto',
  'temor',
  'orgia',
  'sendo',
  'censo',
  'mundo',
  'denso',
  'pauta',
  'fugaz',
  'valha',
  'cozer',
  'nenem',
  'ainda',
  'vicio',
  'reves',
  'forte',
  'vulgo',
  'pudor',
  'estar',
  'regra',
  'dogma',
  'louco',
  'banal',
  'criar',
  'pifio',
  'tenro',
  'impor',
  'desse',
  'apraz',
  'reaca',
  'jeito',
  'ordem',
  'atras',
  'pedir',
  'round',
  'clava',
  'saude',
  'viril',
  'usura',
  'merce',
  'manso',
  'juizo',
  'sabio',
  'ontem',
  'servo',
  'prosa',
  'presa',
  'feliz',
  'afago',
  'fluir',
  'ebrio',
  'coisa',
  'falar',
  'cunho',
  'forma',
  'devir',
  'meiga',
  'vendo',
  'serio',
  'plato',
  'homem',
  'guisa',
  'pleno',
  'temer',
  'visar',
  'bruma',
  'cisma',
  'limbo',
  'mesmo',
  'magoa',
  'xibiu',
  'acaso',
  'puder',
  'gerar',
  'exodo',
  'heroi',
  'obvio',
  'afins',
  'obter',
  'valor',
  'impio',
  'lugar',
  'matiz',
  'praxe',
  'crise',
  'senil',
  'havia',
  'venia',
  'fluxo',
  'enfim',
  'certo',
  'alibi',
  'tedio',
  'ritmo',
  'garbo',
  'reter',
  'tomar',
  'pulha',
  'parvo',
  'posso',
  'grato',
  'uniao',
  'vital',
  'valia',
  'visao',
  'vivaz',
  'favor',
  'abrir',
  'bravo',
  'todos',
  'laico',
  'parco',
  'prumo',
  'ameno',
  'facil',
  'genio',
  'reles',
  'obito',
  'possa',
  'olhar',
  'prime',
  'falso',
  'levar',
  'tesao',
  'tecer',
  'anelo',
  'burro',
  'selar',
  'fator',
  'casta',
  'citar',
  'rogar',
  'adiar',
  'facam',
  'farsa',
  'ranco',
  'coeso',
  'achar',
  'cisao',
  'epico',
  'nocao',
  'cabal',
  'legal',
  'morte',
  'imune',
  'sinto',
  'sabia',
  'exato',
  'nicho',
  'fardo',
  'falta',
  'ativo',
  'gente',
  'lavra',
  'amplo',
  'haste',
  'ouvir',
  'forca',
  'viver',
  'gesto',
  'labor',
  'dubio',
  'brega',
  'revel',
  'deter',
  'sonso',
  'cesta',
  'sesta',
  'tendo',
  'sulco',
  'leigo',
  'passo',
  'unico',
  'arduo',
  'vemos',
  'feixe',
  'atuar',
  'otica',
  'ciume',
  'calma',
  'vadia',
  'toada',
  'igual',
  'debil',
  'humor',
  'rever',
  'sonsa',
  'tende',
  'ideal',
  'vacuo',
  'hiato',
  'pobre',
  'ponto',
  'ambos',
  'claro',
  'terno',
  'fusao',
  'remir',
  'probo',
  'velho',
  'varao',
  'cauda',
  'outro',
  'leito',
  'doido',
  'advem',
  'senao',
  'horda',
  'marco',
  'inata',
  'jovem',
  'carma',
  'xeque',
  'linda',
  'capaz',
  'relva',
  'fonte',
  'tenra',
  'algum',
  'cacar',
  'ajuda',
  'anuir',
  'ficar',
  'velar',
  'apoio',
  'dorso',
  'vimos',
  'noite',
  'rigor',
  'farao',
  'serie',
  'verso',
  'botar',
  'tanto',
  'vazio',
  'prece',
  'cruel',
  'morar',
  'lider',
  'ambas',
  'mocao',
  'peste',
  'casto',
  'virus',
  'massa',
  'frase',
  'entre',
  'terra',
  'covil',
  'pouco',
  'cocar',
  'coesa',
  'fauna',
  'faina',
  'furor',
  'preso',
  'sente',
  'signo',
  'credo',
  'docil',
  'vetor',
  'feito',
  'lazer',
  'minha',
  'arido',
  'aceso',
  'ciclo',
  'impar',
  'raiva',
  'flora',
  'maior',
  'beata',
  'chata',
  'vulto',
  'torco',
  'birra',
  'brisa',
  'houve',
  'breve',
  'vasto',
  'trama',
  'liame',
  'setor',
  'corno',
  'adeus',
  'papel',
  'pegar',
  'salvo',
  'ardor',
  'senda',
  'manha',
  'seita',
  'banzo',
  'morro',
  'pecha',
  'prado',
  'reger',
  'visse',
  'atomo',
  'antro',
  'blase',
  'avaro',
  'segue',
  'livro',
  'nossa',
  'ancia',
  'ocaso',
  'plano',
  'comer',
  'peixe',
  'prono',
  'rezar',
  'aureo',
  'otimo',
  'saida',
  'alias',
  'acima',
  'saiba',
  'chulo',
  'meses',
  'junto',
  'sorte',
  'nunca',
  'fitar',
  'jazia',
  'opcao',
  'fruir',
  'serao',
  'mudar',
  'parar',
  'chuva',
  'pajem',
  'puxar',
  'sinal',
  'bando',
  'treta',
  'fugir',
  'motim',
  'foder',
  'gerir',
  'prazo',
  'seria',
  'alude',
  'nacao',
  'tosco',
  'leite',
  'sinha',
  'norma',
  'epoca',
  'andar',
  'carro',
  'brava',
  'grupo',
  'tenso',
  'arcar',
  'exame',
  'rapaz',
  'aviao',
  'venal',
  'idolo',
  'soldo',
  'lenda',
  'tirar',
  'virao',
  'parte',
  'quota',
  'exijo',
  'reino',
  'praga',
  'malta',
  'campo',
  'sumir',
  'pompa',
  'aonde',
  'traga',
  'logro',
  'fixar',
  'preto',
  'vilao',
  'anais',
  'voraz',
  'corpo',
  'solto',
  'quase',
  'nodoa',
  'turva',
  'antes',
  'copia',
  'cheio',
  'certa',
  'agora',
  'oasis',
  'turba',
  'parva',
  'alado',
  'apego',
  'messe',
  'risco',
  'filho',
  'grave',
  'indio',
  'doido',
  'caixa',
  'estao',
  'verve',
  'prova',
  'acesa',
  'praia',
  'apelo',
  'perda',
  'pardo',
  'nivel',
  'fenda',
  'trupe',
  'retem',
  'ligar',
  'viria',
  'tocar',
  'atrio',
  'texto',
  'lindo',
  'dessa',
  'sabia',
  'psico',
  'ficha',
  'alcar',
  'navio',
  'opaco',
  'coito',
  'aurea',
  'livre',
  'supra',
  'astro',
  'verba',
  'etico',
  'cioso',
  'afora',
  'faixa',
  'fraco',
  'elite',
  'glosa',
  'parca',
  'autor',
  'lidar',
  'conta',
  'grata',
  'firme',
  'mente',
  'calda',
  'tinha',
  'bater',
  'prive',
  'cousa',
  'fatal',
  'fatos',
  'reses',
  'junco',
  'verbo',
  'molho',
  'magia',
  'turvo',
  'irmao',
  'oxala',
  'torso',
  'macio',
  'douto',
  'jirau',
  'deixa',
  'pagao',
  'igneo',
  'supor',
  'abriu',
  'salve',
  'atual',
  'asilo',
  'rouca',
  'pique',
  'bicho',
  'orfao',
  'light',
  'posto',
  'festa',
  'caber',
  'extra',
  'curso',
  'besta',
  'locus',
  'ruina',
  'paira',
  'pisar',
  'zelar',
  'finda',
  'sexta',
  'judeu',
  'vezes',
  'ereto',
  'desta',
  'abuso',
  'manha',
  'sarca',
  'video',
  'radio',
  'bioma',
  'combo',
  'feudo',
  'tetra',
  'agudo',
  'facto',
  'culpa',
  'vinha',
  'baixo',
  'menos',
  'porta',
  'urgia',
  'cutis',
  'surja',
  'vosso',
  'advir',
  'meigo',
  'longe',
  'estio',
  'traco',
  'bonus',
  'tento',
  'autos',
  'sitio',
  'cocho',
  'super',
  'museu',
  'facho',
  'pilar',
  'clean',
  'suave',
  'drops',
  'rumor',
  'lasso',
  'geral',
  'gosto',
  'acola',
  'optar',
  'penta',
  'amena',
  'medir',
  'boato',
  'pifia',
  'turma',
  'calao',
  'acoes',
  'chama',
  'rubro',
  'crime',
  'canon',
  'mosto',
  'letal',
  'louca',
  'pacto',
  'ponha',
  'cover',
  'podio',
  'folga',
  'lapis',
  'cacho',
  'local',
  'aroma',
  'hoste',
  'vetar',
  'vigia',
  'finjo',
  'pasmo',
  'fazia',
  'refem',
  'acude',
  'hobby',
  'axila',
  'drama',
  'rival',
  'brabo',
  'feroz',
  'nosso',
  'troca',
  'movel',
  'mesma',
  'monte',
  'ecoar',
  'lesse',
  'golpe',
  'poema',
  'metie',
  'riste',
  'peito',
  'plebe',
  'sucia',
  'avida',
  'forum',
  'daqui',
  'licao',
  'teste',
  'forem',
  'monge',
  'pareo',
  'coral',
  'clima',
  'viram',
  'aluno',
  'ebano',
  'escol',
  'carta',
  'legua',
  'macro',
  'falha',
  'venha',
  'sarau',
  'poeta',
  'farta',
  'briga',
  'cargo',
  'atimo',
  'cetro',
  'plaga',
  'fruto',
  'chato',
  'perco',
  'ateia',
  'tacha',
  'passa',
  'conto',
  'idoso',
  'calmo',
  'plumo',
  'virar',
  'busca',
  'vento',
  'assar',
  'estro',
  'piada',
  'roupa',
  'arado',
  'chefe',
  'swing',
  'tribo',
  'tarde',
  'recem',
  'aviso',
  'surto',
  'catre',
  'grama',
  'impia',
  'seixo',
  'traje',
  'verde',
  'ornar',
  'civil',
  'bruta',
  'deste',
  'deram',
  'broxa',
  'arfar',
  'vedar',
  'depor',
  'saldo',
  'fosso',
  'trato',
  'irado',
  'ticao',
  'pasma',
  'nuvem',
  'troca',
  'beijo',
  'grota',
  'canso',
  'porte',
  'ambar',
  'cifra',
  'silvo',
  'uteis',
  'pedra',
  'bazar',
  'regio',
  'segar',
  'gabar',
  'vazao',
  'pavor',
  'laudo',
  'amado',
  'casar',
  'bucho',
  'tutor',
  'troco',
  'tiver',
  'sosia',
  'bruto',
  'giria',
  'benca',
  'perto',
  'magna',
  'vagar',
  'molde',
  'lesto',
  'rural',
  'midia',
  'minar',
  'tchau',
  'nesse',
  'odiar',
  'itens',
  'meche',
  'vadio',
  'sotao',
  'fossa',
  'corso',
  'renda',
  'unica',
  'clero',
  'jejum',
  'viado',
  'inter',
  'manga',
  'aviar',
  'ileso',
  'manga',
  'feita',
  'berro',
  'negar',
  'largo',
  'pomar',
  'julia',
  'paiol',
  'cenho',
  'cinto',
  'pugna',
  'lesao',
  'horto',
  'canto',
  'visto',
  'pinho',
  'rocha',
  'areia',
  'podar',
  'ruido',
  'orgao',
  'inves',
  'artur',
  'urdir',
  'civel',
  'proto',
  'amiga',
  'ufano',
  'bolsa',
  'marca',
  'frota',
  'mocho',
  'vista',
  'dubia',
  'vasta',
  'umido',
  'piche',
  'peita',
  'canil',
  'densa',
  'bulir',
  'penso',
  'culta',
  'jogar',
  'morfo',
  'guria',
  'esgar',
  'xucro',
  'resto',
  'fazes',
  'mamae',
  'apear',
  'cheia',
  'ubere',
  'linha',
  'chula',
  'findo',
  'demao',
  'misto',
  'narco',
  'varoa',
  'close',
  'monta',
  'natal',
  'manto',
  'campa',
  'barao',
  'bunda',
  'gemer',
  'stand',
  'fundo',
  'amada',
  'chaga',
  'agape',
  'simio',
  'mover',
  'jazer',
  'retro',
  'venho',
  'album',
  'nessa',
  'punha',
  'tenha',
  'preco',
  'ardis',
  'sigla',
  'seiva',
  'calca',
  'sabor',
  'folia',
  'alamo',
  'firma',
  'cosmo',
  'cerca',
  'matar',
  'labia',
  'tumba',
  'porca',
  'banto',
  'salva',
  'rente',
  'louro',
  'ceita',
  'ferpa',
  'miope',
  'torna',
  'sinta',
  'polis',
  'coevo',
  'arroz',
  'barro',
  'axial',
  'solta',
  'enjoo',
  'redor',
  'verao',
  'ousar',
  'velha',
  'zumbi',
  'corar',
  'bolso',
  'fugiu',
  'lousa',
  'etapa',
  'audio',
  'trago',
  'obtem',
  'volta',
  'lutar',
  'santo',
  'cacto',
  'queda',
  'limpo',
  'mimar',
  'final',
  'nesta',
  'baixa',
  'penca',
  'fatuo',
  'reler',
  'letra',
  'farol',
  'vario',
  'troco',
  'quite',
  'veloz',
  'nacar',
  'longo',
  'vazia',
  'mania',
  'burra',
  'neste',
  'sugar',
  'farto',
  'folha',
  'staff',
  'refil',
  'coroa',
  'forro',
  'bedel',
  'puido',
  'repor',
  'macho',
  'ultra',
  'viger',
  'justa',
  'lucro',
  'danca',
  'subir',
  'passe',
  'urgir',
  'sadio',
  'custo',
  'hifen',
  'gueto',
  'mouro',
  'mimos',
  'chave',
  'sexto',
  'valer',
  'harem',
  'usual',
  'socio',
  'lento',
  'logos',
  'labil',
  'desca',
  'versa',
  'anzol',
  'redea',
  'ardua',
  'calvo',
  'abade',
  'calor',
]

export { usableWords }
