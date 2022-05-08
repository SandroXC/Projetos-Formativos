import Sequelize from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

export const connection = new Sequelize(
    // process.env.DB_URL
    'postgres://filmes_konf_user:SxnPVTaxKN93KpSkZZukpYrC4E6jOKFM@dpg-c9rhh4b0tnuoark2fcjg-a/filmes_konf',
    {
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    }
)