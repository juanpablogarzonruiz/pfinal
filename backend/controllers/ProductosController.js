class ProductosController{
    construct(){
    }
    consultar(req,res){
        try{
            let data = [
                { codigo: '12', nombre: 'Item 1', descripcion: 'Value 1', precio: 12 },
                { codigo: '2', nombre: 'Item 2', descripcion: 'Value 2', precio: 13 },
                { codigo: '3', nombre: 'Item 3', descripcion: 'Value 3', precio: 14 },
                { codigo: '12', nombre: 'Item 1', descripcion: 'Value 1', precio: 12 },
                { codigo: '2', nombre: 'Item 2', descripcion: 'Value 2', precio: 13 },
                { codigo: '3', nombre: 'Item 3', descripcion: 'Value 3', precio: 14 },
                { codigo: '12', nombre: 'Item 1', descripcion: 'Value 1', precio: 12 },
                { codigo: '2', nombre: 'Item 2', descripcion: 'Value 2', precio: 13 },
                { codigo: '3', nombre: 'Item 3', descripcion: 'Value 3', precio: 14 },
                { codigo: '3', nombre: 'Item 3', descripcion: 'Value 3', precio: 14 },
              ];
            res.status(200).json(data);
        }catch (err){
            res.status(500).send(err.message);
        }
    }
}

module.exports = new ProductosController();
