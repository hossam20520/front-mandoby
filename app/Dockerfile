FROM php:7.4-apache

RUN apt-get update \
    && apt-get install -y \
        libicu-dev \
        libonig-dev \
        libzip-dev \
        zip \
        unzip \
    && docker-php-ext-install \
        pdo_mysql \
        intl \
        zip \
    && apt-get install -y git unzip && \
    php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');" && \
    php composer-setup.php --install-dir=/usr/local/bin --filename=composer && \
    rm composer-setup.php \
    && a2enmod \
        rewrite

COPY . /var/www/html

RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html \
    && php /var/www/html/artisan key:generate

WORKDIR /var/www/html