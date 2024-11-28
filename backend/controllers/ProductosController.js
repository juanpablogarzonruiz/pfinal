/*
const db= require("../database/conexion.js");
*/

class ProductosController{
    construct(){
    }

    consultar(req,res){
        try{
            let data = [
                { codigo: '1', nombre: 'Item 1', descripcion: 'Value 1', precio: 12 },
                { codigo: '2', nombre: 'Item 2', descripcion: 'Value 2', precio: 13 },
                { codigo: '3', nombre: 'Item 3', descripcion: 'Value 3', precio: 14 },
              ];

            res.status(200).json(data);



            /*
            db.query('SELECT  * FROM cursos',
            [],(err,rows) => {
                if(err) {
                    res.status (400).send(err.message);
                }
                res.status(200).json(rows);
            });*/
        }catch (err){
            res.status(500).send(err.message);
        }
    }
}

module.exports = new ProductosController();
