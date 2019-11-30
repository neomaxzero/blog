---
title: 'Como habilitar react concurrent mode'
subtitle: 'concurrent mode'
date: '2019-11-30'
topic: 'react'
description: 'React: Como habilitar react concurrent mode?'
lang: 'es'
---

# Como habilitar react concurrent mode?

Me sentí un poco inspirado por un post del amigo Kent donde comparte una guía de los pasos necesarios para activar concurrent mode en tu webapp con react.

Primero, que no vi una guía en español entonces espero que esta sea mejor que nada.

Segundo que quiero dejar mi opinión de esta feature en el estado actual de implementación.

Que es concurrent mode? ya lo cubri en el [post anterior](https://blog.m4x.io/es/que-es-react-concurrent-mode/)

## Y entonces, cómo habilito la cosa ?

### 1. Instalar la versión experimental de react que incluye está característica.

```bash
yarn add react@experimental react-dom@experimental
```

### 2. Reemplazar en tu app el método de renderizado por el nuevo modo.

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
```

### 3. Disfrutar de la versión super rápida de react. 🚀

### 4. Verificar y volver a verificar

En tu lugar yo utilizaría este modo, en este momento específico, solo para tener una idéa de si nuestra app es compatible con él y anticipar la cantidad de tiempo que requerirá de nosotros cuando la versión sea parte de un release estable y queramos hacer el salto.

## Quienes se benefician con este modo?

Si tu aplicación web no presenta una gran cantidad (>10k) componentes que esten "luchando" por la prioridad del motor de renderizado de React, dificilmente notes una diferencia. En el caso de que estés dentro del caso de uso que esta característica resuelve, tendrás un impacto más directo sobre la percepción de tus usuarios sobre el rendimiento de tu UI.

## Conclusión

Probar el modo es terriblemente sencillo. Evaluá si tu aplicación es intensa en animaciones, gráficos, (react game) o tenes problemas de performance actualmente. En el caso que cumplas estas premisas, _porque no? cierto?_
