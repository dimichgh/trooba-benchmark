'use strict';

const Trooba = require('trooba');
const httpTransport = require('trooba-http-transport');
const router = require('trooba-router');

const app = Trooba.use(httpTransport, {
    port: 8080,
    // context: {
    //     serialize: (context, serverContext) => {
    //         const deleted = [];
    //         const target = Object.keys(context).reduce((memo, name) => {
    //             if (name.charAt(0) !== '$') {
    //                 if (context[name] === undefined) {
    //                     deleted.push(name);
    //                     return memo;
    //                 }
    //                 memo[name] = context[name];
    //             }
    //             return memo;
    //         }, {});
    //         target['@deleted'] = deleted.length ? deleted : undefined;
    //         serverContext.response.setHeader('x-trooba-context', JSON.stringify(target));
    //     },
    //     deserialize: (serverContext, context) => {
    //         const troobaContext = serverContext.request.headers['x-trooba-context'];
    //         if (troobaContext) {
    //             Object.assign(context, JSON.parse(troobaContext));
    //         }
    //     }
    // }
})
.use(router, {
    'GET /hello': pipe => {
        pipe.respond({
            status: 200,
            body: 'Hello World'
        });
    }
})
.build()
.create('server:default');

app.listen(() => {
    console.log('Server is ready');
});
