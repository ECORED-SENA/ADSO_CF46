<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Pruebas y actas de entrega

    .row.align-items-center.mb-4
      .col-md-5
        img(src='@/assets/curso/tema3/tresPC.jpg')
      .col-md-7
        p.bgPrimarioSuave.p-3 Al momento de realizar la entrega de la solución informática esta debió ser probada de manera interna por los desarrolladores para examinar la correcta funcionalidad de todos sus procesos, permitiendo conocer la calidad del mismo, así como los posibles fallos que se puedan presentar a corto, medio o largo plazo, con el fin de lograr predecir su comportamiento durante la implantación, su grado de manejabilidad y lo amigable que pueda ser su interfaz gráfica.
        p.p-3 En el caso de los usuarios, las pruebas van dadas por las necesidades y el contexto que representa a cada uno de los clientes, en otras palabras, la misma prueba no puede servir para todos los escenarios, porque puede ser que una prueba para un <i>software</i> específico sea la adecuada, pero en otro puede llegar a ser perjudicial. En el caso puntual de los clientes se debe hacer una prueba de funcionamiento y rendimiento en el sitio, bajo las condiciones y entorno de la empresa, con las funciones y  datos reales, esta prueba debe ser ejecutada y analizada por las dos partes, se puede hacer  en una sola jornada o si el cliente lo desea se puede hacer dos días o hasta en una semana, solo así,  el cliente sentirá la seguridad de firmar el acta de entrega a satisfacción.
        .row.py-2.bgRosa
          .col-md-12
            .row
              .col-1
                i.fas.fa-quote-left.Text-grande.text-primario
            .row
              .col-1
              .col-10
                p De acuerdo a UGUR (2009)
                p.my-2.text-bold El acta de entrega es el documento final que se elabora con el fin de entregar parcial o totalmente un producto de <i>software</i>, este documento es presentado al cliente, el cual debe recibir a satisfacción el producto para finalizar con el proceso, por lo general este documento se firma después de realizar las pruebas de la aplicación. 
            .row
              .col-11
              .col-1
                p.mb-0.i.fas.fa-quote-right.Text-grande.text-primario 
    .row.justify-content-center
      .col-md-10.p-4
        .cajon.color-primario.p-4.mb-4
          p Por lo general los modelos de acta de entrega pueden variar según las empresas productoras de <i>software</i>, pero por lo general llevan la siguiente información:
          .row
            .col-md-9.p-4
              ul.lista-ul.ms-3
                li 
                  i.fas.fa-check.text-secundario
                  p.mb-0 Una portada con los logos e información de la empresa o desarrollador de la solución de <i>software</i>.
                li
                  i.fas.fa-check.text-secundario
                  | En la página siguiente la fecha y a quien está dirigido el producto “el nombre del cliente, dueño o presidente de la empresa”, en el cuerpo de este apartado de debe hacer un respetuoso saludo y cuál es el motivo de este documento.
                li
                  i.fas.fa-check.text-secundario
                  | En las siguientes páginas va la descripción del producto a entregar. 
            .col-md-3
              img(src='@/assets/curso/tema3/ajustes.png')
    separador
</template>

<script>
export default {
  name: 'Tema3',
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
