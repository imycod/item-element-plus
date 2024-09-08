sed -i 's/"name": "item-ui",/"name": "@item-ui\/nightly",/' packages/item-ui/package.json
sed -i '2s/item-ui/@item-ui\/nightly/' internal/build-constants/src/pkg.ts