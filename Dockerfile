#DOCKER FILE COM MULTIPLOS ESTAGIOS

# 1° ESTAGIO BUILD DA APLICAÇÃO ANGULAR
# UTILIZAR O NODE PARA COMPILAR OS ARQUIVOS DO ANGULAR
FROM node:current-alpine3.22 AS build

# COPIANDO O PACKAGE JSON PRIMEIRO EVITA A REINSTALAÇÃO DAS DEPENCIAS TORNANDO OS BUILDS MAIS RAPIDO. 
# NPM CI E MAIS RAPIDO E CONFIAVEL, POIS INSTALA AS DEPENCIAS COM AS VERSÕES ESPECIFICAS NO PACKAGE-LOCK.
WORKDIR /app    
COPY package*.json ./ 
RUN npm ci 

#COPIA TODO O CÓDIGO E FAZ O BUILD.
COPY . .
RUN npm run build -- --configuration production 
RUN mv /app/dist/financeiro-front/browser/index.csr.html /app/dist/financeiro-front/browser/index.html


# 2° ESTAGIO NGINX
FROM  nginx:alpine3.22-perl
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist/financeiro-front/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]