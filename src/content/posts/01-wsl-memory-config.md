---
title: "Configuración de WSL - Memoria"
publishedAt: 2023-12-29
description: "Ajustes avanzados de memoria para una configuración óptima."
slug: "wsl-memory-config"
isPublish: true
---

## Configuraciones de WSL - Configuración de Memoria

Si eres nuevo a WSL talvez no te hayas enterado de que puedes configurar aspectos específicos del sistema.
WSL cuenta con configuraciones que pueden aplicar de manera global a todas las distribuciones corriendo WSL (.wslconfig)
y configuraciones específicas para cada distribución (wsl.conf), como habilitar systemd por ejemplo.
En esta ocasión configuraremos la memoria que WSL puede utilizar en nuestro sistema.

Para especificar cuánta memoria el sistema puede alojar a WLS se deben seguir 3 simples pasos:

1. Crear un archivo de configuración para wsl en el home de tu usuario de Windows.

   El directorio de home de tu usuario en windows está en la ruta:

   ```
   C:\users\nombreDeTuUsuario
   ```

   Estando en esa ruta crea un archivo con el nombre `.wslconfig`

   ````bash
   [wsl2]
   memory=4GB
   ````
   En mi caso le asigné un tamaño de 4 GB de memoria RAM a WSL.

2. Parar WSL

   Deten WSL con el comando desde powershell o CMD:

   ````bash
   wsl --shutdown
   ````

3. Volver a arrancar WSL

   Para volver a arrancar WSL basta con iniciar una shell que utilice WSL o iniciar Docker Desktop:

## Comprueba.

Escribe el comando desde una shell de Linux:

````bash
free
````

Podrás tener un resultado como el siguiente:

````bash
$ free
               total        used        free      shared  buff/cache   available
Mem:         4013204      529984     3521492        2876      157464     3483220
Swap:        1048576           0     1048576

````

Aquí podemos comprobar que la memoria ahora está configurada a usar 4 GB.

Para mayor información sobre la configuración avanzada en WSL refierase a la documentación oficial en:

[Advanced settings configuration in WSL](https://learn.microsoft.com/en-us/windows/wsl/wsl-config#wslconfig)

