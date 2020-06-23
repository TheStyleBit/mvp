## Table of Contents

* [POST /rule](#create-rule)
* [GET /rule/:id](#get-rule)
* [DELETE /rule/:id](#delete-rule)
* [PATCH /rule/:id](#patch-rule)


* [POST /domain](#create-domain)
* [GET /domain/:id](#get-domain)
* [DELETE /domain/:id](#delete-domain)


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

<a name="patch-rule"></a>

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



## Domains 

### POST /domain

<a name="create-domain"></a>

| Parameter     | In     | Required | Default |  Type    |
|---------------|--------|----------|---------|----------|
| domain        | body   | ✔        | ✘       | string   |
| applicationId | body   | ✔        | 1       | integer  |


### GET /domain/:id

<a name="get-domain"></a>

| Parameter     | In     | Required | Default |  Type    |
|---------------|--------|----------|---------|----------|
| id            | params | ✔        | ✘       | integer  |
| key           | query  | ✔        | ✘       | string   |
| host or origin| headers| ✔        | ✘       | string   |



### DELETE /domain/:id

<a name="domain-rule"></a>

| Parameter     | In     | Required | Default |  Type    |
|---------------|--------|----------|---------|----------|
| id            | params | ✔        | ✘       | integer  |
