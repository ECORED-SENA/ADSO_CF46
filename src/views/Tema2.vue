<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Capacitación de usuarios
    
    .row.bgFondoUnosyCerosAzul.justify-content-center.p-5
      .col-md-10
        figure(data-aos="flip-up")
          img(src='@/assets/curso/tema2/reunionVirtual.jpg')
        p.mb-4 La tecnología cambia a pasos agigantados, esto se puede ver reflejado en la creación y nuevas versiones de programas, por lo cual la clave es saber cómo capacitar a los empleados sobre los nuevos sistemas o tecnología que se implementan, y hay que hacerlo de manera efectiva y eficaz para lograr una correcta transferencia del conocimiento.

    .titulo-segundo.color-acento-botones.mb-4(data-aos="fade-right")
      #t_2_1_Tec.h2 2.1 Técnicas

    p.mb-4 De acuerdo a Edgepoint learning (2020), existen unos puntos específicos que hay que tener en cuenta:  

    .BG01.p-4.mb-5(data-aos="fade-down")
      SlyderA
        .row.bgFondoPantalla.p-5.m-5
          .col-md-12.mb-4.mb-md-0.p-5
            h3.mb-4.ms-4 Los instructores deben conocer muy bien el <i>software</i>
            .row
              .col-md-6.p-2
                p.p-2.ms-4 Los formadores deben ser expertos en el manejo del programa, esto transmite confianza y entusiasmo a los usuarios de la capacitación.
                p.ms-2.mb-2.me-2.ms-4 Al diseñar la capacitación debe contar con personal profesional en la materia, los cuales tengan facilidad de expresión y buen manejo del público.   
              .col-md-6.p-2
                figure
                  img(src='@/assets/template/tema2/reunion.jpg')
        .row.bgFondoPantalla.p-5.m-5
          .col-md-12.mb-4.mb-md-0.p-5
            h3.mb-4.ms-4 Los instructores deben conocer muy bien el <i>software</i>
            .row
              .col-md-6.p-2
                p.p-2.ms-4 Si la capacitación es de manera virtual o con videotutoriales asegúrese de contratar personas expertas en la creación de estos recursos ya que la presentación y la calidad es muy importante. 
              .col-md-6.p-2
                figure
                  img(src='@/assets/template/tema2/PC.jpg')
        .row.bgFondoPantalla.p-5.m-5
          .col-md-12.mb-4.mb-md-0.p-5
            h3.mb-4.ms-4 Hacer de la formación una prioridad
            .row
              .col-md-6.p-2
                p.p-2.ms-4 Hay que establecer acuerdos con los jefes de personal o con los propietarios de las empresas para establecer la capacitación de manera obligatoria, esto evita problemas inconvenientes a futuro como volver a agendar capacitaciones y problemas por incorrecto manejo de <i>software</i> o aplicación.
              .col-md-6.p-2
                figure
                  img(src='@/assets/template/tema2/manosPC.jpg', alt='Hacer de la formación una prioridad')
        .row.bgFondoPantalla.p-5.m-5
          .col-md-12.mb-4.mb-md-0.p-5
            h3.mb-4.ms-4 Utilizar incentivos en la capacitación
            .row
              .col-md-6.p-2
                p.p-2.ms-4 Los incentivos motivan y comprometen a los participantes creando un ambiente cálido en el proceso de capacitación, la clave es conocer bien a los empleados por intermedio de los jefes, para algunos es suficiente con un reconocimiento verbal por su dedicación, para otros puede ser un buen refrigerio o golosinas, también se puede hablar con los dueños de la empresa para que los usuarios puedan ser recompensados con horas libres.
              .col-md-6.p-2
                figure
                  img(src='@/assets/template/tema2/estudiantes.jpg', alt='Utilizar incentivos en la capacitación')
        .row.bgFondoPantalla.p-5.m-5
          .col-md-12.mb-4.mb-md-0.p-5
            h3.mb-4.ms-4 Elegir un formato adecuado para la capacitación
            .row
              .col-md-6.p-2
                p.p-2.ms-4 En la mayoría de casos las capacitaciones o conferencias son de manera magistral y de poco tiempo, lo cual no es efectivo para ayudar a los usuarios a desarrollar sus nuevas habilidades y que los aplique con eficacia, hay que ser creativos, didácticos y utilizar pausas activas para evitar el desgaste de los usuarios, buscando la aplicabilidad del aprendizaje. 
              .col-md-6.p-2
                figure
                  img(src='@/assets/template/tema2/presentacion.jpg', alt='Elegir un formato adecuado para la capacitación')
  
    .titulo-segundo.color-acento-botones.mb-4(data-aos="fade-right")
      #t_2_2_Cap.h2 2.2 Plan de capacitación
    
    p.mb-4 De acuerdo a Edgepoint learning (2020):

    .row.mb-4
      .col-md-7
        .row.py-2.bgRosa
          .col-12
            .row
             .col-1
               i.fas.fa-quote-left.Text-grande.text-primario
            .row(data-aos="fade-right")
              .col-1
              .col-10
                p.ms-3.mb-0 Hay que establecer plazos y métodos de implementación, estos deben ser claros y realistas para no jugar con el tiempo de los usuarios ni la productividad de la empresa.
            .row(data-aos="fade-right")
              .col-11
              .col-1
                p.pe-2.mb-0.i.fas.fa-quote-right.Text-grande.text-primario 
        p.my-4 A continuación, algunos tips de aporte en este ítem.        
      .col-md-5(data-aos="fade-left")
         img(src='@/assets/curso/tema2/servidor.png')

    PasosA.color-acento-contenido.mb-5(tipo="n")
      .row.align-items-center(data-aos="fade-down")
        .col-md-4.col-sm-6
          p.mb-0 Hay que presentar el cronograma o plan de capacitación mínimo con un mes de antelación.
        .col-md-2.col-sm-4
          figure
            img(src='@/assets/template/tema2/tickets.svg')
      .row.align-items-center(data-aos="fade-down")
        .col-md-6.col-sm-2
        .col-md-2.col-sm-4
          figure
            img(src='@/assets/template/tema2/flechas.svg')
        .col-md-4.col-sm-6
          p.mb-0 Hay que estar pendientes al cronograma de la empresa a capacitar por si surgen cambios poder ajustarse a estos. 
      .row.align-items-center(data-aos="fade-down")
        .col-md-4.col-sm-6
          p.mb-0 Hay que  ser puntuales y  respetuosos por el tiempo de los usuarios y el de la empresa, esto es fundamental y sirve como carta de presentación. 
        .col-md-2.col-sm-4
          figure
            img(src='@/assets/template/tema2/calendarioReloj.svg')
      .row.align-items-center(data-aos="fade-down")
        .col-md-6.col-sm-2
        .col-md-2.col-sm-4
          figure
            img(src='@/assets/template/tema2/pareja.svg')
        .col-md-4.col-sm-6
          p.mb-0 Es importante la correcta presentación personal al momento de impartir la capacitación.
      .row.align-items-center(data-aos="fade-down")
        .col-md-4.col-sm-6
          p.mb-0 Se puede enviar información por correo electrónico o <em>links</em> de descarga para que los usuarios lo revisen con antelación y se pueda avanzar en la etapa de preguntas.
        .col-md-2.col-sm-4
          figure
            img(src='@/assets/template/tema2/sobre.svg')
      .row.align-items-center(data-aos="fade-down")
        .col-md-6.col-sm-2
        .col-md-2.col-sm-4
          figure
            img(src='@/assets/template/tema2/pregunta.svg')
        .col-md-4.col-sm-6
          p.mb-0 Dejar un espacio para la etapa de preguntas relacionadas con el tema de capacitación.
      .row.align-items-center(data-aos="fade-down")
        .col-md-4.col-sm-6
          p.mb-0 Acordar una fecha extra para mirar posibles problemas en el manejo de la solución de <i>software</i>.
        .col-md-2.col-sm-4
          figure
            img(src='@/assets/template/tema2/calendario.svg')    

    .titulo-segundo.color-acento-botones.mb-4(data-aos="fade-right")
      #t_2_3_Video.h2 2.3 Videotutoriales

    .row.bgFondoUnosyCerosAzul.justify-content-center.mb-4
      .col-md-10(data-aos="fade-down")
        img.cajon(src='@/assets/curso/tema2/hombreLeyendo.png')
    
    .row.justify-content-center.mb-4
      .col-md-10.bgPrimario.p-5.Neg-Top.text-white
        p Existen muchos usuarios pueden estar en trabajo remoto, comisión o por fuera de la ciudad, así que hay que asegurarse de diseñar la capacitación de manera virtual con excelentes formatos, por lo cual hay que asesorase de personal experto en el tema. Estos cursos o capacitaciones deben estar siempre actualizados, esto facilita que nuevos usuarios puedan revisar la información logrando un autoaprendizaje, evitando en algunos casos agendar nuevas capacitaciones. 
        p Por lo general estos videos deben llevar:
        ul.lista-ul
          li 
            i.fas.fa-check.text-secundario
            | Demostraciones interactivas que deben incluir simulaciones de casos.
          li
            i.fas.fa-check.text-secundario
            | Ludificación:  enseñar la aplicación de manera práctica, lúdica y en diferentes formatos.        
    separador
</template>

<script>
export default {
  name: 'Tema2',
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
