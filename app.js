(() => {
    'use strict';

    const redis = require('redis'),
        client = redis.createClient(6379, '127.0.0.1');

    //- Asignando valor en redis
    // const data = [{ "categorias": "", "codigoCampania": 201816, "codigoConsultora": 2826844, "codigoEstrategia": "" }, { "categorias": "", "codigoCampania": 201816, "codigoConsultora": 2826844, "codigoEstrategia": "" }, { "categorias": "", "codigoCampania": 201816, "codigoConsultora": 2826844, "codigoEstrategia": "" }, { "categorias": "", "codigoCampania": 201816, "codigoConsultora": 2826844, "codigoEstrategia": "" }, { "categorias": "", "codigoCampania": 201816, "codigoConsultora": 2826844, "codigoEstrategia": "" }];
    // client.set('probandoAndo', JSON.stringify(data));
    // client.quit();
    //- Fin asignando valor en redis


    //- Obteniendo valor 
    client.get('probandoAndo', (error, res) => {
        if (error) { throw error; }
        console.log(res);
        client.quit();
    });
    //- FinObteniendo Valor

})();