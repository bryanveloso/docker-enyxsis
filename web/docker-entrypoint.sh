#!/bin/sh
echo "rAthena Development Team presents - Flux CP"
echo "           ___   __  __"
echo "     _____/   | / /_/ /_  ___  ____  ____ _"
echo "    / ___/ /| |/ __/ __ \/ _ \/ __ \/ __  /"
echo "   / /  / ___ / /_/ / / /  __/ / / / /_/ /"
echo "  /_/  /_/  |_\__/_/ /_/\___/_/ /_/\__,_/"
echo ""
echo "http://rathena.org/board/"
echo ""
DATE=$(date '+%Y-%m-%d %H:%M:%S')
echo "Initalizing Docker container..."

sed -i "16s|127.0.0.1|database|" /var/www/fluxcp/config/servers.php
sed -i "37s|127.0.0.1|database|" /var/www/fluxcp/config/servers.php
sed -i "46s|127.0.0.1|login|" /var/www/fluxcp/config/servers.php
sed -i "86s|127.0.0.1|char|" /var/www/fluxcp/config/servers.php
sed -i "90s|127.0.0.1|map|" /var/www/fluxcp/config/servers.php

echo "Starting FluxCP..."
exec "$@"
