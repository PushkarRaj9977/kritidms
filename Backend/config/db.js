import sql from 'mssql';

const config = {
  user: 'sa',
  password: 'Admin@1235',
  server: 'localhost',
  port: 1433,
  database: 'KritiDMS',
  options: {
    encrypt: false,              // local dev
    trustServerCertificate: true
  },
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  }
};

// Create a single shared pool promise
const poolPromise = sql.connect(config)
  .then(pool => {
    console.log('✅ SQL Server connected');
    return pool;
  })
  .catch(err => {
    console.error('❌ Database connection failed:', err);
    throw err;
  });

// Default export for lines like: `import pool from '../config/db.js';`
export default poolPromise;

// Optional named exports if needed elsewhere
export { sql, poolPromise };
