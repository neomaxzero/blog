---
title: '¿Que es react concurrent mode?'
subtitle: 'concurrent mode'
date: '2019-11-16'
topic: 'react'
description: 'React: Introduccion a concurrent mode. Una explicacion basica de su functionamiento'
lang: 'es'
---

# React: ¿Que es react concurrent mode?

Concurrent mode esta ahora con nosotros y vino para quedarse. La ultima feature que fue lanzada en la ReactConf 2019 como una version experimental promete una mejora de rendimiento.

Esta feature surgio principalmente como una necesidad para soportar `suspense`. Un concepto que explicare con mas detalle en un futuro post.

**Concurrent mode es un flag que le permite al engine de react decidir cuando aplicar los cambios al DOM en caso de encontrarse con side effects (Network request, etc)**

Este modo hace a react mas inteligente.

## ¿Porque tanto hype por este modo?

Cuando el nucleo de react fue re-escrito por completo en `React fiber`, uno de los beneficios principales fue la posibilidad de crear distintos hilos virtuales (fibers) los cuales estarian etiquetados con distintas prioridades dependiendo de si el usuario esta interactuando con un componente o no.

React fiber sento las bases sobre las cuales concurrent mode funciona. Cuando algun evento asincronico esta atado al renderizado de un componente, react puede inteligente decidir que elementos en el virtual dom tienen prioridad de ser renderizados.

## ¿Como se diferencia con el modo "normal" de React?

En la version tonta (dumb) de react, tambien conocida como modo "synchronous", React crea la nueva vista tomando como premisa que todo lo que se va a renderizar depende de contenido sincronico, contenido que ya esta listo para ser renderizado. Hace su magia con el virtual-dom para que sea eficiente y despues escupe al DOM los cambios necesarios.

Si la pantalla depende de una fuente de datos asincrona, y encima es rapida, esto significa que react va a tener que re-renderizar cuando detecte cambios en todas los componentes que dependan de estos datos asincronos, y el usuario va a tener un flash de contenido en modo "cargando".

En el modo normal, sincronico, react no tiene ni idea de la existencia de esta dependencia, por lo tanto no existe una optimizacion para estos casos.

## Explicamelo como si fuese mi tia (no programadora)

Pre-concurrent mode react no tiene ni idea de que existen una monton de dependencias a servicios externos (APIs principalmente) y entonces no puede hacer nada para optimizar la experiencia del usuario.

Post-concurrent mode, le hacemos saber al engine de react nuestras dependencias con servicios externos para que el pueda inteligentemente hacer uso de esta informacion y decidir que conviene en que momento renderizar.

Por ejemplo, si se tiene una seccion de la pantalla que va a mostrar un spinner mientras se solicitan datos de una API y esta necesita solamente 20ms para retornar un valor. En react sincronico vamos a ver un spinner por un minusculo periodo ya que cuando react termino de renderizar el layout, ya tiene que volver a calcular el nuevo layout con el resultado de ese endpoint.

Seria mucho mejor si react esperara solo unos milisegundos mas para hacer uso eficiente de sus recursos y tambien para presentar al usuario una version final del estado de la UI en vez de los estados intermedios que son innecesarios y en muchos casos molestos para el usuario.

Esto ultimo es posible gracias a [React concurrent mode](https://reactjs.org/docs/concurrent-mode-intro.html).

<h4 align="center" styles="text-weight: bold">
  Stay alert, stay moving
</h4>
