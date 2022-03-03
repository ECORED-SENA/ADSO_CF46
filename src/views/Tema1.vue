<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1  Documentación de procesos de implantación
    .row.my-5.bgAcentoBotones
      .col-lg-5.col-md-12
          img(src='@/assets/curso/tema1/imagen1.jpg')
      .col-lg-7.col-md-12.mt-4
        .row
          .col-12.bg-white.Neg-Der50.p-2.Text-peq.my-3
            .cajon
              p La documentación en el proceso de implementación es fundamental, porque permite realizar modificaciones necesarias al proyecto sin grandes complicaciones, debido a que en estos documentos se registra todo lo que ocurre en este proceso desde las especificaciones hasta las actas de entrega, además de ser un instrumento para comunicar los detalles no tan obvios del sistema. 
              p.mb-0 La documentación es el registro de todos los pasos necesarios para completar un proceso, en esta parte es muy importante el "cómo" se realizan; el desarrollo de <i>software</i> es esencialmente un grupo de procesos interrelacionados, por lo cual es importante llevar una correcta documentación de los procesos en los formatos establecidos.
    .titulo-segundo.color-acento-botones
      #manTec.h2 1.1 Manuales Técnicos
    .bloque-texto-b.color-acento-botones.p-2
      .bloque-texto-b__texto
        i.fas.fa-quote-left.text-primario
        h2.mb-0 Según el Ministerio TIC (2018), en este documento está plasmada toda la información del proyecto de <em>software</em>, con una descripción bien detallada sobre las características técnicas y físicas de cada elemento; este manual va dirigido al administrador del sistema y otros ingenieros para que puedan hacer un respectivo mantenimiento en caso de que sea necesario; estos deben contener como mínimo los elementos relacionados a continuación:
        i.fas.fa-quote-right.text-primario

    AcordionA.my-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row.justify-content-start(titulo="Nombre del sistema")
        .col-md-8.mb-4.mb-md-0
          p Nombre completo del sistema de información.
      
        .col-md-2
          figure
            img(src='@/assets/template/tema1/nombreSis.svg', alt='Nombre del sistema')

      div(titulo="Sigla")
        .row.justify-content-start
          .col-md-8.mb-4.mb-md-0
            p Sigla o nombre corto bajo el cual se conoce el sistema de información. Si aplica.      
          .col-md-2
            figure
              img(src='@/assets/template/tema1/siglas.svg', alt='Siglas')

      div(titulo="Descripción del sistema")
        .row.justify-content-start
          .col-md-8.mb-4.mb-md-0
            p Descripción funcional del sistema y los servicios que presta.      
          .col-md-2
            figure
              img(src='@/assets/template/tema1/descripSis.svg', alt='Descripción del sistema')

      div(titulo="Versión")
        .row.justify-content-start
          .col-md-8.mb-4.mb-md-0
            p Versión actual y en producción del sistema de información.    
          .col-md-2
            figure
              img(src='@/assets/template/tema1/version.svg', alt='Versión')

      div(titulo="Categoría")
        .row.justify-content-start
          .col-md-8.mb-4.mb-md-0
            p Indique la categoría del sistema, de acuerdo con la clasificación del Marco de Referencia de Arquitectura Empresarial para la Gestión de TI en el Estado: 
            ul.lista-ul.ms-4
              li 
                i.lista-ul__vineta
                | Sistema misional.
              li        
                i.lista-ul__vineta
                | Sistema de apoyo.
              li        
                i.lista-ul__vineta
                | Portales digitales.
              li        
                i.lista-ul__vineta
                | Sistema de direccionamiento estratégico
          .col-md-2
            figure
              img(src='@/assets/template/tema1/categoria.svg', alt='Categoria')

      div(titulo="Fabricante")
        .row.justify-content-start
          .col-md-8.mb-4.mb-md-0
            p Compañía que construyó el sistema de información o nombre del desarrollado.
          .col-md-2
            figure
              img(src='@/assets/template/tema1/fabricante.svg', alt='Fabricante')

      div(titulo="Fecha de vencimiento del soporte")
        .row.justify-content-start
          .col-md-8.mb-4.mb-md-0
            p Indique la fecha hasta la cual se tiene el contrato de mantenimiento o soporte.      
          .col-md-2
            figure
              img(src='@/assets/template/tema1/fechaVen.svg', alt='Fecha de vencimiento')

      div(titulo="Sistema operativo")
        .row.justify-content-start
          .col-md-8.mb-4.mb-md-0
            p Sistema(s) operativos(o) sobre los cuales funciona actualmente el sistema de información. 
          .col-md-2
            figure
              img(src='@/assets/template/tema1/sisOper.svg', alt='Sistema operativo')

      div(titulo="Lenguaje de programación")
        .row.justify-content-start
          .col-md-8.mb-4.mb-md-0
            p Lenguajes de programación y frameworks sobre los cuales fue construido el sistema de información. Ejemplos: Java 7, C#.Net framework 4.5, php 5.3, etc.  
          .col-md-2
            figure
              img(src='@/assets/template/tema1/lenguaje.svg', alt='Lenguaje de programación')

      div(titulo="Plataforma de base de datos")
        .row.justify-content-start
          .col-md-8.mb-4.mb-md-0
            p Ejemplo: Oracle, SQL server, Postgres, MySQL, entre otros.
          .col-md-2
            figure
              img(src='@/assets/template/tema1/basedatos.svg', alt='Base de datos')

      div(titulo="Documentación técnica y funcional")
        .row.justify-content-start
          .col-md-8.mb-4.mb-md-0
            p Indique la ubicación (URL) de la documentación detallada técnica y funcional del sistema (Arquitectura, manuales, diseños, etc.).    
          .col-md-2
            figure
              img(src='@/assets/template/tema1/docum.svg', alt='Documentación técnica y funcional')

      div(titulo="Arquitectura tecnológica")
        .row.justify-content-start
          .col-md-8.mb-4.mb-md-0
            p Stand Alone, <i>web</i>, cliente servidor, <em>app</em> móvil, <i>software</i> as a service (nube), etc.    
          .col-md-2
            figure
              img(src='@/assets/template/tema1/arquitectura.svg', alt='Arquitectura tecnológica')
            

    .titulo-segundo.color-acento-botones.mb-4.mt-4
      #manUser.h2 1.2 Manuales de usuario
    
    .row.mt-5.mb-5
      .col-lg-5.col-md-12.col-sm-12
        img(src='@/assets/curso/tema1/imagen2.jpg')
      .col-lg-7.col-md-12.col-sm-12
        .row.mb-2.bgPrimarioSuave
          .col-12.p-4
            p.mb-0 El manual de usuario es el documento que facilita a las personas utilizar un <i>software</i> de manera sencilla y clara, además de brindar acceso a todas las funcionalidades que este posee. La documentación técnica es muy importante en el ciclo de vida de los sistemas de información, además de ser un entregable obligatorio de parte de los programadores. 
        .row.mb-2.bgRosa
          .col-12
            .row
             .col-1
               i.fas.fa-quote-left.Text-grande.text-primario
            .row
              .col-1
              .col-10
                p.ms-3 - Según Mintic (2018)
                p.my-2.ms-3 Los sistemas de información deben contar con la documentación de usuario, técnica y de operación actualizada, que facilite la transferencia de conocimiento a los usuarios y a los servicios de soporte tecnológico. 
            .row
              .col-11
              .col-1
                p.i.fas.fa-quote-right.Text-grande.text-primario
        .row
          .col-12
            p Un manual de usuario se debe adecuar a la empresa que solicita el producto, los usuarios lo leen para encontrar consejos prácticos sobre cómo utilizar la solución de <i>software</i> o superar un problema cuando estos ocurren.
    p.mb-4  Para realizar un manual de usuario hay que tener en cuenta algunos consejos:
  .container.bgPrimarioSuave.p-0.mb-0.tarjeta
    SlyderF.p-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.bgBlanco.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/componentes/tema1/tabla.svg' alt='AvatarTop')
        p.text-center Planificar la información que se desea incluir, enfocarse en que se está ayudando al usuario de manera objetiva, también se debe tener en cuenta que otros recursos se pone a disposición del usuario y quienes son los responsables de elaborar el documento y de su aprobación.

      .tarjeta.bgBlanco.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/componentes/tema1/hojas2.svg' alt='AvatarTop')
        p.text-center Seleccionar el formato para crear el manual puede ser, .doc, .txt  ,html, .pdf, .csv, .xls etc;  por lo general la mayoría de manuales se imprimen pero es recomendable tener una versión electrónica en el sitio <i>web</i>, si no lo tiene, debe pensar en donde puede alojar esta información ya que en la actualidad la gran mayoría de personas acceden a la información desde su dispositivo móvil o <em>Smart Phone</em>. 

      .tarjeta.bgBlanco.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/componentes/tema1/pc2.svg' alt='AvatarTop')
        p.text-center Tener en cuenta a los lectores, el tipo de población a la cual está dirigida la solución informática. 

      .tarjeta.bgBlanco.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/componentes/tema1/pc.svg' alt='AvatarTop')
        p.text-center Crear el manual de usuario, se deben escribir las instrucciones de forma clara y sencilla evitando palabras muy técnicas, mostrando todo lo que el usuario necesita saber, el diseño debe ser amigable y debe tener ayudas visuales.

      .tarjeta.bgBlanco.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/componentes/tema1/libro.svg' alt='AvatarTop')
        p.text-center Probar el manual, con personas que no conozcan el producto, con estas pruebas se puede enriquecer el manual, entrevistar a todos los desarrolladores, ellos conocen el producto mejor que nadie y pueden señalar las cosas que puede haber pasado por alto.

      .tarjeta.bgBlanco.p-4
        .row.justify-content-center.mb-3
          .col-5
            img(src='@/assets/componentes/tema1/hojas.svg' alt='AvatarTop')
        p.text-center Mantener la documentación actualizada: cuando hagan modificaciones en el producto, es necesario tener todo actualizado;  la documentación electrónica tiene una gran ventaja sobre la impresa, incluso los documentos impresión pueden actualizarse para descargarlos del sitio <i>web</i> de la empresa. 
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4.mt-4 Recuerde, su contenido solo es excelente si es preciso, asegúrese que lo que ofrece a sus clientes realmente les ayude a utilizar su producto. Pero por lo general debe tener la siguiente estructura:
    .row.justify-content-center.mb-4
      .col-lg-8.col-md-10.p-4.cajon.color-primario
        .row
          .col-lg-6.col-md-8
            ul.lista-ul.mt-5.ms-4
              li 
                i.fas.fa-check.text-secundario
                | Tabla de contenido.
              li
                i.fas.fa-check.text-secundario
                | Introducción
              li 
                i.fas.fa-check.text-secundario
                | Cuerpo “el manual en sí”.
              li 
                i.fas.fa-check.text-secundario
                | Flujograma           
              li 
                i.fas.fa-check.text-secundario
                | Glosario de terminología
              li
                i.fas.fa-check.text-secundario
                | Conclusiones
              li 
                i.fas.fa-check.text-secundario
                | Recomendaciones
              li 
                i.fas.fa-check.text-secundario
                | Contactos de los desarrolladores. 
          .col-lg-6.col-md-4.p-3.mt-4
            img(src="@/assets/curso/tema1/figura1.png")
    .titulo-segundo.color-acento-botones.mb-4.mt-4
      #manInt.h2 1.3 Manuales de instalación
    .row.mb-4
      .col-lg-5.col-md-12
        img(src="@/assets/curso/tema1/imagen3.jpg")
      .col-lg-7.col-md-12
        .row.mb-2.bgRosa
          .col-12
            .row
             .col-1
               i.fas.fa-quote-left.Text-grande.text-primario.mt-3
            .row
              .col-1
              .col-10
                p.ms-5 - Según UGUR (2009)
                p.mt-2.mb-2.ms-5 Estos manuales sirven para describir la instalación de un sistema mecánico, electrónico o un producto de <i>software</i>, su fin principal es instruir sobre las tareas de configuración e instalación.
            .row
              .col-11
              .col-1
                p.i.fas.fa-quote-right.Text-grande.text-primario.mb-4       
        p.mb-4.mt-4 Estos son los componentes principales de una guía de instalación de <i>software</i>:
    .row
      .col-4.mb-4.mt-4.bgFondoTitulo
        p.text-white.p-3.mb-0.text-bold Requisitos del sistema 
    p.mb-4 Aquí se debe detallar qué tipo de hardware o <em>firmware</em> se necesita para instalar este <i>software</i>, se debe especificar si funciona en un sistema operativo Mac OS X o Windows 10, según Microsoft (2021) los requisitos mínimos para instalar el sistema operativo Windows 11, son los siguientes:


    TabsA.color-acento-botones.mb-5
      .tarjeta.bgRosa.p-4(titulo="Procesador")
        h4.mt-4 Procesador
        p.mb-4 1 giga Hertz (GHz) o más rápido con 2 o más núcleos en un procesador de 64 bits compatible o sistema en un chip (SoC).
        .row.justify-content-center
          .col-md-10
            img(src="@/assets/curso/tema1/procesador.jpg")

      .tarjeta.bgRosa.p-4(titulo="RAM")
        h4.mt-4 RAM
        p.mb-4 4 gigabytes (GB).
        .row.justify-content-center
          .col-md-10
            img(src="@/assets/curso/tema1/RAM.jpg")
      .tarjeta.bgRosa.p-4(titulo="Almacenamiento")
        h4.mt-4 Almacenamiento
        p.mb-4 Dispositivo de almacenamiento de 64 GB o más. Nota: para más información, consulta abajo en "Más información sobre los requisitos de espacio de almacenamiento para mantener Windows 11 actualizado".
        .row.justify-content-center
          .col-md-10
            img(src="@/assets/curso/tema1/almacen1.jpg")
      .tarjeta.bgRosa.p-4(titulo="<em>Firmware</em> del sistema")
        h4.mt-4 <em>Firmware</em> del sistema
        p.mb-4 UEFI, compatible con Arranque seguro. Consulta aquí para obtener información sobre cómo tu PC puede cumplir este requisito.
        .row.justify-content-center
          .col-md-10
            img(src="@/assets/curso/tema1/firmware.jpg")
      .tarjeta.bgRosa.p-4(titulo="Tarjeta gráfica")
        h4.mt-4 Tarjeta gráfica
        p.mb-4 Compatible con DirectX 12 o posterior con controlador WDDM 2.0.
        .row.justify-content-center
          .col-md-10
            img(src="@/assets/curso/tema1/tarjeta.jpg")
      .tarjeta.bgRosa.p-4(titulo="Pantalla")
        h4.mt-4 Pantalla
        p.mb-4 Pantalla de alta definición (720p) de más de 9" en diagonal, con canal de 8 bits por color.
        .row.justify-content-center
          .col-md-10
            img(src="@/assets/curso/tema1/pantalla.jpg")
      .tarjeta.bgRosa.p-4(titulo="Conexión a Internet y cuenta de Microsoft")
        h4.mt-4 Conexión a Internet y cuenta de Microsoft
        p.mb-4 Windows 11 Home requiere conexión a Internet y una cuenta de Microsoft. El cambio fuera de Windows 11 en modo S también requiere conexión a Internet. Obtén más información sobre el modo S aquí. Para todas las ediciones de Windows 11, se requiere acceso a Internet para poder realizar actualizaciones, así como para descargar y aprovechar algunas de las  características. Para algunas características se requiere una cuenta de Microsoft.
      .tarjeta.bgRosa.p-4(titulo="Almacenamiento")
        h4.mt-4 Almacenamiento
        p.mb-4 Dispositivo de almacenamiento de 64 GB o más. Nota: para más información, consulta abajo en "Más información sobre los requisitos de espacio de almacenamiento para mantener Windows 11 actualizado".
        .row.justify-content-center
          .col-md-10
            img(src="@/assets/curso/tema1/almacen2.jpg")
      .tarjeta.bgRosa.p-4(titulo="TPM")
        h4.mt-4 TPM
        p Módulo de plataforma segura (TPM) versión 2.0. Consulta aquí para ver instrucciones sobre cómo se puede habilitar tu PC para que cumpla este requisito.  p
        p Windows 11 Home requiere conexión a Internet y una cuenta de Microsoft. Para todas las ediciones de Windows 11, se requiere acceso a Internet para poder realizar actualizaciones, así como para descargar y aprovechar algunas de las características. Para algunas características se requiere una cuenta de Microsoft.
        .row.justify-content-center
          .col-md-10
            img(src="@/assets/curso/tema1/TPM.jpg")
    img(src="@/assets/curso/tema1/manos.jpg")

    TabsC.color-acento-botones
      .py-3.py-md-4(titulo="Descripción general de las características del sistema o del producto")
        .row.align-items-center
          .col-lg-6.col-md-12
            figure
              img(src='@/assets/template/tema1/hombreSentado.png', alt='Características del sistema')
          .col-lg-6.col-md-12.mb-4.mb-md-0
            h4 Descripción general de las características del sistema o del producto
            p Aquí se describen cuáles son las características básicas del <i>software</i> o producto en cuestión, por lo general se usa una lista o en una tabla. Ejemplo, en un <i>software</i> de telefonía IP (comunicación), se debe indicar cuántas líneas admite el <i>software</i>, cuántos usuarios y contraseñas admite, el tipo de base de datos que necesita, cuántas zonas o particiones soporta, etc.
            .row.mb-2.bgRosa
              .col-12
                .row
                .col-1
                  i.fas.fa-quote-left.Text-grande.text-primario.mt-3
                .row.justify.content-center
                  .col-10
                    p.ms-5 - De acuerdo a UGUR (2009)
                    p.mt-2.mb-2.ms-5 siempre son importantes los datos de contacto del desarrollador o de la empresa que creó la solución informática o con el departamento de atención al cliente, dado el caso que se presente alguna duda relacionada con el producto, garantía, registro, etc.
                .row
                  .col-11
                  .col-1
                    p.i.fas.fa-quote-right.Text-grande.text-primario.mb-4
            p.mb-4 También en este apartado se incluye cualquier exención de responsabilidad legal, divulgaciones, advertencias de agencias gubernamentales oficiales, información de registro, etc.

      .py-3.py-md-4(titulo="Configuraciones de instalación")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/template/tema1/hombreCaminando.png', alt='Configuraciones de instalación')
          .col-md-6
            h4 Configuraciones de instalación
            p Es común que un <i>software</i> de aplicación o tenga una instalación "típica" y una "excepcional" o "diseñada por el cliente". En ocasiones, esta instalación también se denominará "implementación" en la documentación del producto.
        
      .py-3.py-md-4(titulo="Configuración mínima de inicio rápido")
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/template/tema1/hombrePC.png', alt='Configuración mínima de inicio rápido')
          .col-md-6
            h4.mt-5 Configuración mínima de inicio rápido
            p En algunos <i>softwares</i> se publica una guía de "Inicio rápido" independiente, además se explica cómo identificar e interpretar cualquier sistema o códigos de hardware y números de serie que vienen con el producto.
            p Se deben incluir gráficos del paso a paso de cómo instalar el <i>software</i>, también se muestra las conexiones de cableado correctas, si las hay. Si se trata de alguna instalación física.
            p Si se realiza todas las sugerencias en este manual se fomentará la lealtad del cliente, generar altos niveles de satisfacción y minimizar las llamadas al departamento de atención al cliente.
    separador
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
