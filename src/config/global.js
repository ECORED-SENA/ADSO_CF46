export default {
  global: {
    componenteFormativo:
      'Actividades de documentación y entrega de <i>software</i> en procesos de implantación',
    descripcionCurso:
      'Una de las partes fundamentales en la etapa de implantación de <i>software</i> son los documentos que acompañan y dan soporte a este proceso, como son: los manuales de usuario, instalación, actas de entrega y otros.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal-software.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal-software.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Documentación de procesos de implantación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Manuales técnicos',
            hash: 'manTec',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Manuales de usuario',
            hash: 'manUser',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Manuales de instalación',
            hash: 'manInt',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Capacitación de usuarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Técnicas',
            hash: 't_2_1_Tec',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Plan de capacitación',
            hash: 't_2_2_Cap',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Videotutoriales',
            hash: 't_2_3_Video',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Pruebas y actas de entrega',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Mantenimiento de <i>software</i>',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Bichachi, D. S. (2004). El uso de las listas de chequeo (CHEK-LIST) como herramienta para controlar la calidad de las leyes.',
      link: 'http://www.claudiabernazza.com.ar/htm/pdf/check_list',
    },
    {
      referencia:
        'Edgepoint learning (2020). How To Train Employees On a New System Or Technology: 5 Tips.',
      link:
        'https://www.edgepointlearning.com/blog/how-to-train-employees-on-new-system/',
    },
    {
      referencia:
        'Microsoft (2021).Consulta las especificaciones, características y requisitos del sistema de Windows 11.',
      link: 'https://www.microsoft.com/es-ar/windows/windows-11-specifications',
    },
    {
      referencia:
        'Ministerio TIC Colombia.(2018).G.SIS.03 Guía para la construcción del catálogo de Sistemas de Información',
      link: 'https://mintic.gov.co/arquitecturati/630/w3-article-75551.html',
    },
    {
      referencia:
        'Ruiz, F., & Polo, M. (2007). Mantenimiento del Software. Grupo Alarcos, Departamento de Informática de la Universidad de Castilla-La Mancha.',
    },
    {
      referencia: 'Ugur, A. (2009) How to Write a Software Installation Guide.',
      link:
        'https://www.technicalcommunicationcenter.com/online-classes/how-to-write-a-software-installation-guide/',
    },
  ],
  glosario: [
    {
      termino: '<em>Firmware</em>',
      significado:
        'se conoce como <em>firmware</em> al conjunto de instrucciones de un programa informático que se encuentra registrado en una memoria ROM, flash o similar. Estas instrucciones fijan la lógica primaria que ejerce el control de los circuitos de alguna clase de artefacto.',
    },
    {
      termino: 'Ram',
      significado:
        'es la memoria de corto plazo del computador. Su función principal es recordar la información que tienes en cada una de las aplicaciones abiertas en el computador, mientras este se encuentre encendido. Cuanta más memoria RAM tenga tu computador, más cosas podrás hacer al mismo tiempo',
    },
    {
      termino: 'Tarjeta gráfica',
      significado:
        'la tarjeta gráfica o tarjeta de vídeo de un componente que viene integrado en la placa base del PC o se instala a parte para ampliar sus capacidades. Concretamente, esta tarjeta está dedicada al procesamiento de datos relacionados con el vídeo y las imágenes que se están reproduciendo en el ordenador.',
    },
    {
      termino: 'Tpm',
      significado:
        'tiene como propósito en las acciones cotidianas que los equipos operen sin averías y fallos, eliminar toda clase de pérdidas, mejorar la fiabilidad de los equipos y emplear verdaderamente la capacidad industrial instalada.',
    },
  ],
  complementario: [
    {
      texto:
        'Microsoft. (2021). Consulta las especificaciones, características y requisitos del sistema de Windows 11.',
      tipo: 'Artículo',
      link: 'https://www.microsoft.com/es-ar/windows/windows-11-specifications',
    },
    {
      texto:
        'Edgepoint learning. (2020). How To Train Employees On a New System Or Technology: 5 Tips.',
      tipo: 'Artículo',
      link:
        'https://www.technicalcommunicationcenter.com/online-classes/how-to-write-a-software-installation-guide/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Mario Fernando Meneses Calvache',
        cargo: 'Experto Temático',
        centro:
          'Regional Cauca, Centro de teleinformática y producción industrial',
      },
      {
        nombre: 'Adriana López',
        cargo: 'Diseñadora Instruccional',
        centro:
          'Regional Distrito Capital – Centro para la Industria de la Comunicación Gráfica.',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora Metodológica y Pedagógica',
        centro:
          'Regional Distrito Capital – Centro para la Industria de la Comunicación Gráfica.',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Anllelo Andrés Reina Montanez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jorge Enrique Haylock Calderín',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Enrique Diaz',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
