export default {
    PORT: process.env.PORT || 8080,
    mongoLocal: {
        client: 'mongodb',
        cnxStr: 'mongodb://root:asd456@127.0.0.1:27017/ecommerce?authSource=admin' 
    },
    mongoRemote: {
        client: 'mongodb',
        cnxStr: 'mongodb+srv://xxx:yyy@zzz.mongodb.net/coderhouse?retryWrites=true&w=majority'
    },
    sqlite3: {
        client: 'sqlite3',
        connection: {
            filename: `./DB/ecommerce.sqlite`
        },
        useNullAsDefault: true
    },
    mariaDb: {
        client: 'mysql',
        connection: {
            host: 'localhost',
            user: 'coderhouse',
            password: 'coderhouse',
            database: 'coderhouse'
        }
    },
    fileSystem: {
        path: './DB'
    }
}
