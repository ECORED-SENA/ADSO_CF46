<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 
          i.fas.fa-info
      h1 Introducción
    p.mb-5 La implementación de <i>software</i> es la puesta en marcha o ejecución de una solución de <i>software</i>, para satisfacer las necesidades de una empresa. A continuación, se puede consultar la introducción a este componente que tiene como propósito identificar los principales elementos de este proceso.     
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/ASpfQKVgzKU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
