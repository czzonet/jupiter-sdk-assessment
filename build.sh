#!/bin/sh
echo 'start build...'
yarn build
echo ok
echo start tar  './dist' to dist`date +%Y%m%d%H%M%S`.tar.gz ...
tar zcf dist`date +%Y%m%d%H%M%S`.tar.gz ./dist
echo ok