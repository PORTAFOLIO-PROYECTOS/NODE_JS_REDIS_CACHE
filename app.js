import redis from "./redis-connection";

(() => {
    
})();

/*(() => {
    'use strict';

    const redis = require('redis'),
        client = redis.createClient(6379, 'ecconsultorasqa.ombwyy.0001.use1.cache.amazonaws.com');

    //- Asignando valor en redis
    // const data = [{ "categorias": "", "codigoCampania": 201816, "codigoConsultora": 2826844, "codigoEstrategia": "" }, { "categorias": "", "codigoCampania": 201816, "codigoConsultora": 2826844, "codigoEstrategia": "" }, { "categorias": "", "codigoCampania": 201816, "codigoConsultora": 2826844, "codigoEstrategia": "" }, { "categorias": "", "codigoCampania": 201816, "codigoConsultora": 2826844, "codigoEstrategia": "" }, { "categorias": "", "codigoCampania": 201816, "codigoConsultora": 2826844, "codigoEstrategia": "" }];
    // client.set('probandoAndoRedis', JSON.stringify(data));
    // client.quit();
    //- Fin asignando valor en redis


    //- Obteniendo valor 
    client.get('probandoAndoRedis', (error, res) => {
        if (error) { throw error; }
        console.log(res);
        client.quit();
    });
    //- FinObteniendo Valor

})();*/