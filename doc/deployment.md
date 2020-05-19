- install google cloud [sdk](https://cloud.google.com/sdk/docs/quickstart-macos)
- install [docker](https://docs.docker.com/docker-for-mac/install/)

[comment]: # (PROJECT_ID=sb-admin-bk  misnamed, need to be renamed)
[comment]: # (IMAGE=poc whatever name you want, or image hash, just be consistent)

- `$ docker build . --tag gcr.io/sb-admin-bk/poc`
- `$ gcloud auth configure-docker` # one timer
- `$ docker push gcr.io/sb-admin-bk/poc`
