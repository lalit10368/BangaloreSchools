# BangaloreSchools
---

## Bangalore Schools Data application.

Csv is parsed and stored in memory for any query of search, sort or filter.

1. Search: Search is supported over fields
    Schoolname,
    address,
    area,
    pincode,
    landmark

2. Sort: Is supported for following fields: 
    Name,
    Pincode,
    medium_of_inst

3. Filter: Is supported for following fields:
    Category,
    Gender,
    medium_of_inst


## To run

node apiServer.js

## To query

http://localhost:3000/search?address=Manjunath // search for schools in area Manjunath
http://localhost:3000/filter?gender=co-ed // filter by gender co-ed
http://localhost:3000/sort?by=name // sorts by school name
