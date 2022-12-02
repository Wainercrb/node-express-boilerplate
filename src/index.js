const app = require('./app');

const CONFIG = {
    PORT: 3000
}

app.listen(CONFIG.PORT, () => {
    console.info(`Listening to port ${CONFIG.PORT}`);
});