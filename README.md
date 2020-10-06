# computer-store

### /api/computer

#### POST
Accepts a JSON object for POST body. 
Object must include: `name`, `modelNumber`, `quantity`

Optional Keys include: `color`, `hardDrive`, `refurbished`

``` javascript
{
    name: 'iMac 27"',
    modelNumber: 'j12379hf',
    quantity: 1,
    color: 'space gray',
    hardDrive: '512GB',
    refurbished: false
}
```

