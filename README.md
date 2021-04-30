# kugelblitz.me
My website, [kugelblitz.me](http://kugelblitz.me)

## Setting up
Install NGINX and create the necessary firewall rules

    sudo apt install nginx ufw fail2ban && sudo ufw allow "Nginx Full"

Clone the repo to `/var/www/` and give yourself perms

    cd /var/www && sudo git clone https://github.com/kugelblitz2/kugelblitz.me.git && sudo chown kugelblitz /var/www/kugelblitz.me

Copy your SSL certs to `/var/www/kugelblitz.me/ssl` or set up certbot

Copy nginx config to `/etc/nginx/sites-available` and symlink to `/etc/nginx/sites/sites-enabled`

    sudo cp /var/www/kugelblitz.me/nginx_config/kugelblitz.me /etc/nginx/sites-available
    cd /etc/nginx && sudo ln -s /etc/nginx/sites-available/kugelblitz.me sites-enabled/kugelblitz.me

Restart nginx

    sudo systemctl restart nginx

Then set up the apt repo
