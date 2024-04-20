# trabajoReact# Trabajo Práctico React

##################### Funcionalidad Index.js, App.js, Index.js, Package-json ######################################################
 
# Index.js: Este archivo es el punto de entrada de su aplicación React, es el responsable de representar el componente Raiz (App.js) 
# y adjuntar al documento HTML. Configurar React DOM y proporcionar la representación inicial de la aplicación.

# App.js: Este es el componente principal de su aplicación React. Contiene la estructura y la lógica de la interfaz de usuario de la 
# aplicación, puede definir los componentes y la funcionalidad dentro de este archivo.

# Index.css: Este archivo contiene estilo css globales que se aplican a todas aplicaciones. Le permite definir estilos que deben aplicarse,
# globalmente, afectando a todas las componentes dentro de la aplicación.

# Package-json.js: Es el corazón de cualquier proyecto de node js. Registra meta-datos importante sobre un proyecto que se requieren antes
# de publicar en npm y también define los atributos funcionales de un proyecto que npm usa para instalar dependencia ejecutar scripts e
# identificar el punto de entrada a nuestro paquetes.

############################### Paso a Paso de instalación React #####################################################################

# Primer Paso: 
# Comprobar de tener instalado node.js, ejecutar en cmd node --version. En caso de no tener instalado ingresar a la pagina oficial de node js
# (https://nodejs.org/en/download) descargar la verison para su equipo e instalar.

# Segundo Paso:
# Una que se vez que tenemos instalado node js instalamos NPM, ejecutar en cmd los siguiente comando:
# c:\> npm install -g npm@latest
# Corroboramos la version instalada:
# c:\> npm --version
# Limpiamos la cache por la dudas:
# c:\> npm cache clean --force

# Tercer Paso:
# Instalamos el create para la creacion del proyecto React ejecutamos en cmd:
# c:\> npm install -g create-react-app 

# Cuarto Paso:
# Nos posicionamos en la carpeta donde vamos a crear el proyecto ej en nuevacarpeta y ejecutamos el siguiente comando:
# C:\nuevacarpeta>create-react-app proyectoreact

# Quinto Paso:
# Ejecutamos el servicio para saber si quedo instalado:
# c:\nuevacarpeta\proyectoreact>npm start

########################################### Clonar en git ##################################################

# Primero Paso:
# Descargamos git de la pagina oficial https://git-scm.com/ es instalamos.
# Configuramos el git:
# abrimos terminal de git y configuracion la cuenta:
# Jose@NB01 MINGW64 ~
# $git config --global user.name "josetomy07"
# Jose@NB01 MINGW64 ~
# $git config --global user.email jose.centena@est.fi.uncoma.edu.ar

# Segundo Paso:
# Nos posicionamos donde creamos el proyecto React y ejecutamos el siguiente comando:
# c:\nuevacarpeta\proyectoreact>git init

# Tercer Paso:
# Creamos el repositorio en github para esto vamos al cito oficial de github en la opcion donde tenemos el boton del + 
# buscamos new repository, una vez que estamos en pagina de create a new repository. En la opcion donde dice Repository name
# agregamos el nombre de nuestro proyecto, verificamos que este tildad la opcion Public y despues le damos a  create Repository.

# Cuarto Paso:
# Una vez que estamos en nuestra aplicacion de editor de codigo ya se visual estudio, etc. abrimos la terminal y ejecutamos las 
# instrucciones que nos da el cito de gtihub:
# Copiamos la ruta que nos da el github
# En la terminal ejecutamos:
# c:\nuevacarpeta\proyectoreact>git remote add origin https://github.com/josetomy07/proyectoreact.git 
# c:\nuevacarpeta\proyectoreact>git branch -M main
# c:\nuevacarpeta\proyectoreact>git push -u origin main
#
