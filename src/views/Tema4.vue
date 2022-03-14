<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Mantenimiento de <i>software</i>
    
    .row.mb-4.mt-4.justify-content-center
      .col-md-10(data-aos="flip-up")
        img.mt-4(src='@/assets/curso/tema4/reunionVirtual.jpg')
        p.mt-4.mb-4 El eje central de este apartado es indicar cómo se debe realizar el mantenimiento del <i>software</i> de forma adecuada de tal manera que la calidad del aplicativo no se deteriore como resultado del uso, debemos enfocarnos en la siguiente pregunta: ¿cómo debe mantenerse el <i>software</i> para preservar su fiabilidad?
        .row.py-2.bgRosa(data-aos="fade-right")
          .col-md-12
            .row
              .col-1
                i.fas.fa-quote-left.Text-grande.text-primario
            .row
              .col-1
              .col-10
                p De acuerdo a Ruiz & Polo (2007)
                p.my-2.text-bold Todas las soluciones de <i>software</i> muestran mensajes para dar retroalimentación sobre el estado del sistema y para indicar si hay problemas, por lo general los mensajes de error son visuales “mensajes en la pantalla” o sonidos de alerta, en este apartado hay que proporcionar de forma detallada  el tipo de error que se presenta e indicar una solución muy puntal a este problema, se debe tener en cuenta que  estos tipos de mensajes también se pueden incluir en la guía de administrador de usuario, aunque   es mucho mejor repetir la información importante en varios lugares  ya que normalmente no se tiene control sobre la forma en que  el usuario  utiliza los manuales técnicos.
            .row
              .col-11
              .col-1
                p.mb-0.i.fas.fa-quote-right.Text-grande.text-primario         
        .row.my-4
          .col-md-9
            p.mt-4 Por ejemplo, puede suponer que un usuario consultará la guía de instalación para entender el significado de los códigos de error del sistema, aunque algunas veces no lo haga o las pasas por alto, ya que la información importante está en un solo apartado del manual, por lo cual el usuario termina llamando al centro de servicio para resolver un problema simple, en lugar de consultar la guía de mantenimiento. Es muy importante que en el manual de mantenimiento del <i>software</i> se ilustre con imágenes o videos de casos reales y también se pueden hacer foros o grupos en línea para resolver problemas recurrentes y así brindar una solución puntual. 
          .col-md-3(data-aos="fade-left")
            img(src='@/assets/curso/tema4/hombre.png')
    
    .row.mb-4.p-4.cajon.color-primario
      .col-md-3(data-aos="fade-right")
        img(src='@/assets/curso/tema4/mujer.svg')
      .col-md-9
        p.p-4 <em>Call center</em>: es un centro de trabajo en el cual se realizan atención al usuario por medio de llamadas telefónicas, se gestionan datos, contactos y soluciones a problemas frecuentes de <i>software</i>. Hoy en día, <em>call centers</em> y <em>contact centers</em> son una de las opciones más ágiles de las grandes empresas al momento de dar soporte a los productos; por lo general este tipo de mantenimiento se lo hace en compañía de un programa o aplicación de escritorio remoto, con los cuales podemos dar asistencia técnica remota como si el programador estuviera en el lugar en el que lo necesitan. Algunos de estos programas son: 
    
    figure.mb-4(data-aos="fade-down")
      img(src='@/assets/curso/tema4/programas.png')
    
    figure.mb-5(data-aos="flip-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/0CvYIX9WVi8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador
</template>
<script>
export default {
  name: 'Tema4',
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
