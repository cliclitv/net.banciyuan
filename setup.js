const fs = require('fs')


const yml =(databaseurl, databaseuser, databasepwd)=> `
# spring.application.name=bcy
spring:
    application:
        name: 'bcy'
    web:
        resources:
            static-locations: "classpath:/dist"
    datasource:
        url: ${databaseurl}
        username: ${databaseuser}
        password: ${databasepwd}
        driver-class-name: 'com.mysql.cj.jdbc.Driver' 

mybatis:
    mapper-locations: classpath:/mapper/*.xml
        
server:
    port: 8888
    servlet:
        encoding:
            charset: 'UTF-8'
            enabled: true
            force: true
`

const argv = process.argv.slice(2)

const databaseurl = argv[0] || 'jdbc:mysql://localhost:3306/bcy'
const databaseuser = process.env.databaseuser || 'root'
const databasepwd = argv[1] || 'phpts'


fs.writeFileSync('./src/main/resources/application.yml', yml(databaseurl, databaseuser, databasepwd), 'utf8');
