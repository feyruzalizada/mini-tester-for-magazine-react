export const logger = {
    info: (msg) => console.log(`%c[INFO] ${msg}`,`color: #007bff`),
    warn: (msg) => console.warn(`[WARN] ${msg}`),
    error: (msg, error) => {
        console.error(`%c[CRITICAL] ${msg}`)
   
    }
}