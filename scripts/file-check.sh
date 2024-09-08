#! /bin/bash

CURRENT_PUBLISHED_TARBALL="$(npm view item-ui dist.tarball)"

echo $CURRENT_PUBLISHED_TARBALL

mkdir -p tmp

curl -o ./tmp/latest.tgz $CURRENT_PUBLISHED_TARBALL
tar zxvf ./tmp/latest.tgz -C ./tmp

diff -qr ./tmp/package ./dist/item-ui | grep "Only" | cut -c 8- | sort > ./tmp/diff.txt
