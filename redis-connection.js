import redis from "ioredis";
import config from "./config";

export default class RedisConnection {
    constructor() {
        this.client = this.connect();
    }

    connect() {
        let client = new redis({
            host: config.redis.host,
            port: config.redis.port,
            retryStrategy(times){
                let delay = Math.min(times * config.redis.time_to_retry, 200);
                return delay;
            },
            maxRetriesPerRequest: config.redis.retries
        });

        client.on("connect", () => {
            console.log("Connectado a redis");
        });

        client.on("error", err => {
            console.log(`Redis error: ${err}`);
        });

        return client;
    }

    async get(key){
        return await this.client.get(key);
    }

    async set(key, value){
        return await this.client.set(key, value, "EX", config.redis.time_live);
    }
}