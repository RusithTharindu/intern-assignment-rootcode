# Software Engineering Internship Assignment - rootcode

## Project Name: RootLoop

## About This Project
This project was developed as part of a software engineering internship assignment provided by rootcode.
This README.md file provide instructions to run the project



## Prerequisites
- [Docker](https://www.docker.com/)

## Getting Started with the Project

### 1. Clone the repository to your local machine:

```bash
git clone https://github.com/RusithTharindu/intern-assignment-rootcode.git
cd intern-assignment-rootcode
```

### 2. To build the Docker Image

```bash
docker build -f Dockerfile -t intern-assignment-rtt  .
```

### 3. To run the Docker Container

```bash
docker run -it -p 3000:3000 intern-assignment-rtt
```

### 4. Show Help

To display the available commands in docker

```bash
docker run --help
```