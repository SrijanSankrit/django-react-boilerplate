## About
A boilerplate website combining Django and React together, along with pre-built JWT (JSON Web Token) Authentication.
It also supports multiple user-type authentication (**Teacher** and **Student**)

Following Libraries were used for building this project:
- [React](https://reactjs.org), for Interactive User Interface.
- [Material UI](https://material-ui.com), for interactive styling on the Homepage and Profile Page.
- [Redux](https://redux.js.org), for maintaining global states, useful for authentication.
- [Django REST Framework](https://www.django-rest-framework.org), for hosting the APIs and backend models.
- [Django simple JWT](https://pypi.org/project/djangorestframework-simplejwt/), for implementing JWT Authentication in the backend.

This boilerplate is for developers who just want to get started with developing their dream website, without worrying much on the Project setup and Authentication.

This project is a good starting point for modern Python/Javascript developers to begin developing web apps.

## How is this project different?

1. ### Heavily customisable backend models. 

    The **User** model is built from **AbstractBaseUser** and managed by **UserBaseManager** class in Django, which means anyone working with this boilerplate
    can easily customise the User model according to their needs.
    
2. ### Made using latest developments in React.

    Project uses **functional components** and **Hooks** for UI Development, which have recently been added in React Library and are much easier to use.
    
3. ### Authentication available with multi-user-type support

    In today's world, everyone needs authentication in their web apps, so this project already dealt with that part.
    
    The boilerplate achieves authentication with the help of **JSON Web Tokens**, which is fairly new standard for token authentication, and does not need a
    token for token verification.

## How to start using the project?

```
git clone https://github.com/SrijanSankrit/django-react-boilerplate.git
```

Now, open the project folder in terminal (for **Linux/ Mac** users) or CMD(**Windows** users)

### Backend setup

```
cd backend/
virtualenv venv
source venv/bin/activate (for Linux/Mac Users)  OR  \venv\Scripts\activate.bat(Windows Users)
pip3 install -r reqirements.txt
python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py runserver
```

The backend server will start running on **http://localhost:8000** (by default). 

Now, open another window on your terminal/ CMD.

### Frontend setup

```
cd frontend/
npm i
npm run start
```

The frontend server will start running on **http://localhost:3000** (by default).
This link will show the actual boilerplate.


