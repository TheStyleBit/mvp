
## Setting up PostgresSQL machine
*  follow the  [steps](https://cloud.google.com/community/tutorials/setting-up-postgres)
    - if already exists, provide you local machine IP address to authorities 
* [optional] replace pgadmin with phpPgAdmin
    - visit docker for phpPgAdmin [image](https://hub.docker.com/r/dockage/phppgadmin/)
    - `docker pull dockage/phppgadmin` [you need to have preinstalled docker]
    - `docker run --name='phppgadmin' -d --publish=80:80 dockage/phppgadmin:latest`
    - enter into container `docker exec -it containerID sh`
    - `vi /var/www/conf/config.inc.php`
    - append lines
        - `$conf['servers'][1]['desc'] = 'Postgres Google Cloud'`;
        - `$conf['servers'][1]['host'] = 'google cloud postgres vm instance PUBLIC_IP'`;
        - `$conf['servers'][1]['port'] = 5432`;
    - open browser on `localhost:80`
    - select `Postgres Google Cloud` database and enter credentials (if you don't have one, ask authorities)
    
## Setting up node.js and nginx

[comment]: # (install nvm https://hackernoon.com/how-to-install-node-js-on-ubuntu-16-04-18-04-using-nvm-node-version-manager-668a7166b854) 
`$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash`
`$ bash -l`

* install node.js by nvm
 - `$ nvm install node`
 - `$ nvm install v12.14.1`

* install pm2
 - `$ npm install pm2 -g`
- `$ pm2 init`

* clone and init stylebit github
- `$ git clone https://github.com/TheStyleBit/mvp.git`
- `$ cd mvp`
- `$ npm i`

* setup nginx
- `$ sudo apt install nginx`
- `$ sudo systemctl start nginx`
- `$ sudo systemctl status nginx`

* setup firewall for http/https
- `$ sudo ufw allow https comment 'Open all to access Nginx port 443'`
- `$ sudo ufw allow http comment 'Open access Nginx port 80'`
- `$ sudo ufw enable`
- `$ sudo ufw status`


`$ sudo vim /etc/nginx/conf.d/stylebit.conf`

```
server {
 listen 80;
 server_name 35.202.199.247; # VM_IP_ADDRESS

 location / {
   proxy_pass http://localhost:8080; # Node App port
   proxy_http_version 1.1;
   proxy_set_header   X-Forwarded-For $remote_addr;
   add_header Access-Control-Allow-Origin *;
   proxy_set_header Upgrade $http_upgrade;
   proxy_set_header Connection 'upgrade';
   proxy_set_header Host $host;
   proxy_cache_bypass $http_upgrade;
  }
}
```

- `$ sudo mv /etc/nginx/sites-enabled/default /etc/nginx/sites-enabled/default.backup`

- `$ sudo systemctl restart nginx`

      
