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
docker run -p 6379:6379 -d redis:2.8
```

### Run Server
In meowmeowchat/
```
python3 manage.py runserver
```
