# Sites Endpoints ∆

## Table of Contents


* [POST /rule](#create-rule)
* [GET /rule/:id](#get-rule)
* [DELETE /rule/:id](#delete-rule)
* [PATCH /rule/:id](#patch-rule)

### POST /rule

<a name="create-rule"></a>

| Parameter     | In     | Required | Default |  Type    |
|---------------|--------|----------|---------|----------|
| key           | body   | ✔        | ✘       | string   |
| value         | body   | ✔        | ✘       | JSON     |
| applicationId | body   | ✔        | 1       | integer  |




### GET /rule/:id

<a name="get-rule"></a>

| Parameter     | In     | Required | Default |  Type    |
|---------------|--------|----------|---------|----------|
| id            | params | ✔        | ✘       | integer  |



### PATCH /rule/:id

<a name="create-rule"></a>

| Parameter     | In     | Required | Default |  Type    |
|---------------|--------|----------|---------|----------|
| id            | params | ✔        | ✘       | integer  |
| key           | body   | ✘        | ✘       | string   |
| value         | body   | ✘        | ✘       | JSON     |


### DELETE /rule/:id

<a name="delete-rule"></a>

| Parameter     | In     | Required | Default |  Type    |
|---------------|--------|----------|---------|----------|
| id            | params | ✔        | ✘       | integer  |
