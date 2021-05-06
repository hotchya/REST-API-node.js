# REST-API-node.js

Simple REST API node.js

![image](https://user-images.githubusercontent.com/54389889/115108394-33aafd00-9fab-11eb-83d8-b47b8d4a2833.png)

</br>

If you want to separate the roles of the server and the client, you can use it like this:

![image](https://user-images.githubusercontent.com/54389889/115108413-5210f880-9fab-11eb-9f8a-572cabe6591d.png)

</br>

## Installation

I used MySQL using Docker. it doesn't matter if you use a local database, but if you want to use Docker, do the following:

</br>

1. Install Docker.

</br>

2. Running MySQL container, like this:
```docker
docker run -dit --name mysql -e MYSQL_ROOT_PASSWORD=qwer1234 -p 3306:3306 mysql
```

</br>

3. Connect to the mysql server. If you don't have a program that can access mysql, you can work directly inside the docker container. enter the command below to connect to the container.

```docker
docker exec -it mysql /bin/bash

... After connecting to the container

mysql -u root -p
```

</br>

4. Create database and simple table and add elements.
```sql
create database main;

use main;

create table user(
    id varchar(15) primary key,
    password varchar(15) not null,
    email varchar(50) not null
    );
```

```sql
INSERT INTO user VALUES ('test','1234','test@test.com');
```

</br>

5. When connecting from node.js, add the following command to remove the authentication error.

```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'qwer1234';
```
```sql
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '';
```

</br>

6. Clone this repository
```bash
git clone https://github.com/hotchya/REST-API-node.js.git
```

</br>

7. Install npm packages
```bash
cd REST-API-node.js

npm install
```

</br>

## Usage
Run the server,
```bash
node app.js
```
Go to http://127.0.0.1:3000/
