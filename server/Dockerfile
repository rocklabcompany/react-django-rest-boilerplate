FROM python:3.12

# -- Install Pipenv stable
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y git  && \
    apt-get install -y python3-pip libpango-1.0-0 libharfbuzz0b libpangoft2-1.0-0 libffi-dev libjpeg-dev libopenjp2-7-dev

RUN pip install poetry
# Check system
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
# -- Install dependencies:
COPY pyproject.toml poetry.lock /
RUN poetry config virtualenvs.create false && poetry install
# -- Update system
RUN apt-get update
RUN apt-get install binutils libproj-dev gdal-bin -y