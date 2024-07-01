# Development server

- ### Set environment variables

  - `cp .env.example .env`

- ### Build docker

  - `docker-compose build`

- ### Install node modules

  - `docker-compose run client yarn`

- ### Run python migrations

  - `docker-compose run server python manage.py migrate`

- ### Run docker

  - `docker-compose up`

- ### Create superuser

  - `docker-compose run server python manage.py createsuperuser`

- ### Install dependencies

   -   `docker-compose run server poetry install`

   - `docker-compose run server poetry add package_name`

 

- ### Formatting python code
  - `docker-compose run server black server/`