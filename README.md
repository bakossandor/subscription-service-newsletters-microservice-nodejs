# subscription-service-newsletters-microservice-nodejs
The newsletters microservice for the Subscription service - nodejs


## Routes
|METHOD|ROUTE              |REQUEST BODY                  |DESCRIPTION             |
|------|-------------------|------------------------------|------------------------|
|GET   |/newsletter-service|                              |Get all the newsletters |
|POST  |/newsletter-service/:user_id/newsletters |{ name }|Register a new newsletter|
|GET   |/newsletter-service/:user_id/newsletters |        |Get the user newsletters|
|DELETE|/newsletter-service/:user_id/newsletters/:id|     |Delete the user's newsletter|
|GET   |/newsletter-service/:user_id/newsletters/:id |    |Get the user one of the specified newsletter|

## ENV variables
|NAME      |description              |
|----------|-------------------------|
|PGHOST    |postgre sql host         |
|PGUSER    |postgre sql username     |
|PGDATABASE|postgre sql database name|
|PGPASSWORD|postgre sql password     |
|PGPORT    |postgre sql port         |