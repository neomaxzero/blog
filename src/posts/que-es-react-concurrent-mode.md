---
title: 'React: ¿Que es react concurrent mode?'
subtitle: 'concurrent mode'
date: '2019-11-16'
topic: 'react'
description: 'React: Introduccion a concurrent mode. Una explicacion basica de su functionamiento'
lang: 'es'
tags: ['react']
---

Concurrent mode está ahora con nosotros y vino para quedarse. La última feature fue lanzada en la ReactConf 2019 como una versión experimental y promete una mejora de rendimiento.

Esta feature surgió principalmente como una necesidad para soportar `suspense`. Un concepto que explicaré con mas detalle en un futuro post.

**Concurrent mode es una bandera que le permite al nucleo de react decidir cuando aplicar los cambios al DOM en caso de encontrarse con side effects (Network request, etc)**

Este modo hace a react mas inteligente.

## ¿Porque tanto hype por este modo?

Cuando el nucleo de react fue re-escrito por completo en [React fiber](https://github.com/acdlite/react-fiber-architecture), uno de los beneficios principales fue la posibilidad de crear distintos hilos virtuales (fibers) los cuales estan marcados con distintas prioridades dependiendo de si el usuario está o no nteractuando con un componente.

React fiber sentó las bases sobre las cuales concurrent mode funciona. Cuando algún evento asincrónico está atado al renderizado de un componente, react puede inteligentemente decidir que elementos del virtual dom tienen prioridad de ser renderizados.

## ¿Como se diferencia con el modo "normal" de React?

En la versión tonta (dumb) de react, también conocida como modo "synchronous", React crea la nueva vista tomando como premisa que todo lo que se va a renderizar depende de contenido sincrónico, contenido que ya esta listo para ser renderizado. Luego de que [react hace su magia](https://reactjs.org/docs/reconciliation.html) con el virtual-dom modifica el dom real con los cambios minimos para representar el nuevo estado.

Si la pantalla depende de una fuente de datos asíncrona, y además esta fuente es rápida, esto significa que react va a tener que re-renderizar cuando detecte cambios en todas los componentes que dependan de estos datos asíncronos, y el usuario va a tener un flash de contenido en modo "cargando".

En el modo normal, sincrónico, react no tiene información sobre side effects, por lo tanto no existe una optimización para estos casos.

## Explicamelo como si fuese mi tia (no programadora)

Pre-concurrent mode react no tiene ni idea de que existen una monton de dependencias a servicios externos (APIs principalmente) y entonces no puede hacer nada para optimizar la experiencia del usuario.

Post-concurrent mode, le hacemos saber al engine de react nuestras dependencias con servicios externos para que él pueda inteligentemente hacer uso de esta información y decidir que conviene en que momento renderizar.

Por ejemplo, si se tiene una sección de la pantalla que va a mostrar un spinner mientras se solicitan datos de una API y ésta necesita solamente 20ms para retornar un valor. En react sincrónico vamos a ver un spinner por un minúsculo periodo ya que cuando react terminó de renderizar el layout, ya tiene que volver a calcular el nuevo layout con el resultado de ese endpoint.

Seria mucho mejor si react esperara sólo unos milisegundos más para hacer uso eficiente de sus recursos y tambien para presentar al usuario una versión final del estado de la UI en vez de los estados intermedios que, en muchos casos, son innecesarios y molestos para el usuario.

Esto último es posible gracias a [React concurrent mode](https://reactjs.org/docs/concurrent-mode-intro.html).
