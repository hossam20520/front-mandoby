FROM php:7.4-cli

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
    && apt-get install -y libpng-dev libjpeg-dev && \
        docker-php-ext-configure gd --with-jpeg && \
         docker-php-ext-install gd \
         docker-php-ext-install bcmath \
    && a2enmod \
        rewrite

COPY . /var/www/html

RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html \
    && php /var/www/html/artisan key:generate

WORKDIR /var/www/html