const app = require('./src/app');

const CONFIG = {
    PORT: process.env.PORT || 8080
}

app.listen(CONFIG.PORT, () => {
    console.info(`Listening to port ${CONFIG.PORT}`);
});