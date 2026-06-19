# Currency Converter

## Description

This project was developed as part of the CODSOFT Java Development Internship. It is a Currency Converter web application built using Spring Boot, Java, MariaDB, HTML, CSS, and JavaScript. Users can convert an amount from one currency to another using exchange rates stored in a MariaDB database.

## Features

* Currency Selection
* Base Currency and Target Currency Conversion
* Amount Input
* Exchange Rate Management
* Currency Conversion Calculation
* MariaDB Database Integration
* REST API using Spring Boot
* Responsive HTML and CSS Design

## Technologies Used

* Java
* Spring Boot
* Spring Data JPA
* MariaDB
* HTML5
* CSS3
* JavaScript
* Maven
* Git & GitHub
* Kali Linux

## Project Structure

```text
currencyconverter/

├── .gitignore
├── README.md
├── HELP.md
├── mvnw
├── mvnw.cmd
├── pom.xml
├── src
│   ├── main
│   │   ├── java
│   │   │   └── com
│   │   │       └── currency
│   │   │           └── currencyconverter
│   │   │               ├── CurrencyconverterApplication.java
│   │   │               ├── controller
│   │   │               │   └── CurrencyController.java
│   │   │               ├── model
│   │   │               │   └── ConversionHistory.java
│   │   │               ├── repository
│   │   │               │   └── ConversionRepository.java
│   │   │               └── service
│   │   │                   └── CurrencyService.java
│   │   └── resources
│   │       ├── application.properties
│   │       ├── static
│   │       │   ├── index.html
│   │       │   ├── script.js
│   │       │   └── style.css
│   │       └── templates
│   └── test
│       └── java
│           └── com
│               └── currency
│                   └── currencyconverter
│                       └── CurrencyconverterApplicationTests.java
└── target
    ├── classes
    │   ├── application.properties
    │   ├── com
    │   │   └── currency
    │   │       └── currencyconverter
    │   │           ├── CurrencyconverterApplication.class
    │   │           ├── controller
    │   │           │   └── CurrencyController.class
    │   │           ├── model
    │   │           │   └── ConversionHistory.class
    │   │           ├── repository
    │   │           │   └── ConversionRepository.class
    │   │           └── service
    │   │               └── CurrencyService.class
    │   └── static
    │       ├── index.html
    │       ├── script.js
    │       └── style.css
    ├── currencyconverter-0.0.1-SNAPSHOT.jar
    ├── currencyconverter-0.0.1-SNAPSHOT.jar.original
    ├── generated-sources
    │   └── annotations
    ├── generated-test-sources
    │   └── test-annotations
    ├── maven-archiver
    │   └── pom.properties
    ├── maven-status
    │   └── maven-compiler-plugin
    │       ├── compile
    │       │   └── default-compile
    │       │       ├── createdFiles.lst
    │       │       └── inputFiles.lst
    │       └── testCompile
    │           └── default-testCompile
    │               ├── createdFiles.lst
    │               └── inputFiles.lst
    ├── surefire-reports
    │   ├── TEST-com.currency.currencyconverter.CurrencyconverterApplicationTests.xml
    │   └── com.currency.currencyconverter.CurrencyconverterApplicationTests.txt
    └── test-classes
        └── com
            └── currency
                └── currencyconverter
                    └── CurrencyconverterApplicationTests.class

45 directories, 33 files

                   
```

## Installation

### Clone Repository

```bash
git clone https://github.com/your-username/Codsoft_CurrencyConverter.git

cd Codsoft_CurrencyConverter
```

### Configure MariaDB

```sql
CREATE DATABASE currencydb;

CREATE USER 'currencyuser'@'localhost' IDENTIFIED BY 'currency123';

GRANT ALL PRIVILEGES ON currencydb.* TO 'currencyuser'@'localhost';

FLUSH PRIVILEGES;
```

### Build Project

```bash
./mvnw clean package
```

### Run Project

```bash
java -jar target/currencyconverter-0.0.1-SNAPSHOT.jar
```

### Open Browser

```text
http://localhost:8080
```

## Database Configuration

```properties
spring.datasource.url=jdbc:mariadb://localhost:3306/currencydb
spring.datasource.username=currencyuser
spring.datasource.password=currency123

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

## How the Application Works

1. Enter the amount.
2. Select the source currency.
3. Select the target currency.
4. Click Convert.
5. Exchange rate is fetched from MariaDB.
6. Converted amount is calculated and displayed.

## Future Enhancements

* Real-Time Exchange Rate API
* Currency Symbols
* Conversion History
* User Authentication
* Dark Mode Support

## Disclaimer

This project is created for educational and internship purposes only.
