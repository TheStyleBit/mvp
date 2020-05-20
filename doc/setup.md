#### setting up PostgresSQL machine
*  follow the  [steps](https://cloud.google.com/community/tutorials/setting-up-postgres)
    - if already exists, provide you local machine IP address to authorities 
* [optional] replace pgadmin with phpgadmin  
    - visit docker for phppgadmin [image](https://hub.docker.com/r/dockage/phppgadmin/)
    - `docker pull dockage/phppgadmin` [you need to have preinstalled docker]
    - `docker run --name='phppgadmin' -d --publish=80:80 dockage/phppgadmin:latest`
    - enter into container `docker exec -it containerID sh`
    - `vi /var/www/conf/config.inc.php`
    - append lines
        - `$conf['servers'][1]['desc'] = 'Postgres Google Cloud'`;
        - `$conf['servers'][1]['host'] = 'google cloud postgres vm instance PUBLIC ip'`;
        - `$conf['servers'][1]['port'] = 5432`;
    - open browser on `localhost:80`
    - select `Postgres Google Cloud` database and enter credentials (if you don't have one, ask authorities)
    
    
      
