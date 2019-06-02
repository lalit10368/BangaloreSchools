# BangaloreSchools
---

## Bangalore Schools Data application.

The data is taken from the link below
> https://github.com/openbangalore/bangalore/blob/master/bangalore/Education/Bangalore_schools.csv
The Csv file above is parsed and stored in memory for any query of search, sort or filter.

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
```
node apiServer.js
```
## To query
- http://localhost:3000/search?address=Manjunath // search for schools in area Manjunath
- http://localhost:3000/filter?gender=co-ed // filter by gender co-ed
- http://localhost:3000/sort?by=name // sorts by school name

## To access on google maps
* http://localhost:3000/static
![Static markers from hardcoded truncated result of sort by schoolName query](https://github.com/lalit10368/BangaloreSchools/blob/master/public/img/StaticMarkers.png)
