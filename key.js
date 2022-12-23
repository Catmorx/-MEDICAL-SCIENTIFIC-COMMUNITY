import crypto from "crypto";
const key = crypto.randomBytes(24).toString("hex")

console.log(key)