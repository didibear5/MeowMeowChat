# MeowMeowChat

Implement a light weight chat room with full privacy.

## Getting Started

These instructions will get you running on your local machine for development and testing purposes.

### Prerequisites

You have to install python3 and docker first.

### Installation

Run the following command:
```
pip3 install -r requirements.txt
```

### Run Server

Run the following command:
```
docker run -p 6379:6379 -d redis:2.8
```
In meowmeowchat/
```
python3 manage.py runserver
```
