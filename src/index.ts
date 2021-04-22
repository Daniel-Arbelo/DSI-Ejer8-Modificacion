#!/usr/bin/env node
import * as fs from 'fs';
/*const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv; */
import * as yargs from 'yargs';
const chalk = require('chalk');

import {Comprajson} from "./clases/Comprajson";
import {Articulo} from "./clases/Articulo";

let compra = new Comprajson();
//Mastercard
yargs.command({
    command: 'Mastercard',
    describe: 'Compra con Mastercard',
    builder:{
        empleado: {
            describe: 'Nombre de empleado',
            demandOption: true,
            type: 'string',
        },
        articulo:{
            describe: 'Nombre de articulo',
            demandOption: true,
            type: 'string',
        },
        precio:{
            describe: 'Nombre de articulo',
            demandOption: true,
            type: 'number',
        },
    },
    handler(argv) {
        if(typeof argv.empleado === 'string' && typeof argv.articulo === 'string' && typeof argv.precio === 'number') {
            let comision: number = argv.precio * 0.05;
            let nuevoarticulo:Articulo = new Articulo(argv.empleado, argv.articulo, argv.precio, comision);
            compra.nuevoArticulo(nuevoarticulo);
        }
    },
});

//PayPal
yargs.command({
    command: 'PayPal',
    describe: 'Compra con PayPal',
    builder:{
        empleado: {
            describe: 'Nombre de empleado',
            demandOption: true,
            type: 'string',
        },
        articulo:{
            describe: 'Nombre de articulo',
            demandOption: true,
            type: 'string',
        },
        precio:{
            describe: 'Nombre de articulo',
            demandOption: true,
            type: 'number',
        },
    },
    handler(argv) {
        if(typeof argv.empleado === 'string' && typeof argv.articulo === 'string' && typeof argv.precio === 'number') {
            let comision: number = argv.precio * 0.03;
            compra.nuevoArticulo(new Articulo(argv.empleado, argv.articulo, argv.precio, comision));
        }
    },
});

//Visa
yargs.command({
    command: 'Visa',
    describe: 'Compra con Visa',
    builder:{
        empleado: {
            describe: 'Nombre de empleado',
            demandOption: true,
            type: 'string',
        },
        articulo:{
            describe: 'Nombre de articulo',
            demandOption: true,
            type: 'string',
        },
        precio:{
            describe: 'Nombre de articulo',
            demandOption: true,
            type: 'number',
        },
    },
    handler(argv) {
        if(typeof argv.empleado === 'string' && typeof argv.articulo === 'string' && typeof argv.precio === 'number') {
            let comision: number = argv.precio * 0.065;
            compra.nuevoArticulo(new Articulo(argv.empleado, argv.articulo, argv.precio, comision));
        }
    },
});


yargs.parse();



