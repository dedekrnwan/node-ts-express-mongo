import 'dotenv/config'
import AppInterface from "../interfaces/app.interface";

export default <AppInterface> {
    name: process.env.APP_NAME,
    port: parseInt(process.env.APP_PORT || '3000'),
    env: process.env.APP_ENV,
    another_port: [8080, 80, 3000, 4000, 5000]
}