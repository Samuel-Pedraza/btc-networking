const net = require('net');
const crypto = require('crypto');

const peerIP = "127.0.0.1";
const peerPORT = 8333;

const VERSION = 70015;
const SERVICES = 0;
const TIMESTAMP = new Date().getTime();
const addr_recv = "127.0.0.1";
const addr_from = "127.0.0.1";
const nonce = crypto.randomBytes(8);
const user_agent = "0x00";
const start_height = "-1";
const relay = false;

var data = [VERSION, SERVICES, TIMESTAMP];

var data_info = Buffer.from(data);

console.log(data_info);

