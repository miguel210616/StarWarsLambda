const axios = require('axios');
const {v4} = require('uuid');
const AWS = require('aws-sdk');

const axinstance = axios.create({
        baseURL: "https://swapi.py4e.com/api",
        timeout: 12000,
    });

const dFetch = ({ verb, path, data = undefined, params = undefined, headers }) => axinstance({
    method: verb,
    url: path,
    params,
    headers: headers,
    data: data
    }).catch(function (error){
        console.log(error.response);
    })

module.exports.getSWPlanets = async () => {
    try{
        const res = await dFetch({verb: 'get', path: '/planets', headers : {
            'Content-Type': 'application/json'}
        }).then(response => {
            return response.data
        })

        const data = res.results.map(planet => {
            return {
                nombre: planet.name,
                diametro: planet.diameter,
                periodo_rotacion: planet.rotation_period,
                periodo_orbita: planet.orbital_period,
                poblacion: planet.population,
                clima: planet.climate,
                superficie_agua: planet.surface_water,
                gravedad: planet.gravity,
                residentes: planet.residents,
                peliculas: planet.films
            }
        })

        return{
            status:200,
            body: {
                data
            }
        }
    }catch(error){
        console.log(error);
    }
}

module.exports.addPlanet = async (event) => {
    try{
        const dynamodb = new AWS.DynamoDB.DocumentClient();

        const {nombre,
            diametro,
            periodo_rotacion,
            periodo_orbita,
            poblacion,
            clima,
            superficie_agua,
            gravedad,
            residentes,
            peliculas} = JSON.parse(event.body);

        const createAt = new Date();
        const id = v4();

        const newPlanet = {
            id,
            nombre,
            diametro,
            periodo_rotacion,
            periodo_orbita,
            poblacion,
            clima,
            superficie_agua,
            gravedad,
            residentes,
            peliculas,
            createAt
        }

        await dynamodb.put({
            TableName: 'PlanetsTable',
            Item: newPlanet
        }).promise()

        return{
            status:200,
            body: {
                newPlanet
            }
        }

    }catch(error){
        console.log(error);
    }
}

module.exports.getSWPlanetsDB = async () => {
    try{
        const dynamodb = new AWS.DynamoDB.DocumentClient();
        
        const result = await dynamodb.scan({
            TableName: 'PlanetsTable'
        }).promise();
        const planets = result.Items;
        
        return{
            status:200,
            body: {
                planets
            }
        }
    }catch(error){
        console.log(error);
    }
}


module.exports.getSWPeople = async () => {
    try{
        const res = await dFetch({verb: 'get', path: '/people', headers : {
            'Content-Type': 'application/json'}
        }).then(response => {
            return response.data
        })

        const data = res.results.map(planet => {
            return {
                nombre: planet.name,
                anio_nacimiento: planet.birth_year,
                color_ojo: planet.eye_color,
                color_cabello: planet.hair_color,
                talla: planet.height,
                masa: planet.mass,
                color_piel: planet.skin_color,
                fimls: planet.films,
                especies: planet.species,
                vehiculos: planet.vehicles
            }
        })

        return {
            status:200,
            body: {
                data
            }
        }
    }catch(error){
        console.log(error);
    }
}

