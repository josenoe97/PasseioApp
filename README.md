# PasseioApp

Angular Versão 19.2.20.

Projeto Modular
- ng new passeio-app --no-standalone

Tailwind CSS
npm install --save tailwindcss@3.4.17 postcss autoprefixer
npx tailwindcss init  //Executor de pacote e cria tailwind.config.js

NG's
 

Comandos usados: 
ng g module template --routing // Gera o modulo de navegação entre as paginas por conta do "--routing"

ng g c template/layout  

ng g m categorias --routing // Modulo de rotas de categorias

ng g class Categorias/categoria // Gera classe categoria

npm install --save-dev json-server // Simula uma API

ng g s categorias/categoria //Gera o service

ng g m lugares --routing

ng g c lugares/lugar

ng g s lugares/lugar

ng g class lugares/lugar

ng g m galeria--routing

ng g c galeria/galeria

ng g c landingpage

npm install --save angular-oauth2-oidc@19 // instalação do OAuth

ng g s authgoogle

ng g guard auth
 - CanActive

ng g environments // cria um ambiente de desenvolvimento com suas devidas variaveis

ng serve --configuration=production // roda com configuração de produção

npm run build --prod// build com a configuração de produção conforme o environment- gerou a pasta \dist\passeio-app 

docker build --tag cursoangular-api . // criar imagens o "." é raiz do dockerfile - cursoangular-api é o nome da imagem -- build para api

docker images // visualizar imagens

docker run -p 4000:4000 --name cursoangular-api-container -d cursoangular-api 

docker ps --//-- 7160b0b97f23   cursoangular-api   "/bin/sh -c 'json-se…"   Less than a second ago   Up 23 seconds   0.0.0.0:4000->4000/tcp, [::]:4000->4000/tcp   cursoangular-api-container

docker build --tag cursoangular-app . // criando o container do front 

docker run -p 4200:80 --name cursoangular-app-container -d cursoangular-app // 80 é porta do nginx

docker container rm cursoangular-app-container // deleta container

docker image rm cursoangular-app // deleta imagem
