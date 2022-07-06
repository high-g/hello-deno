import { Client } from 'https://deno.land/x/postgres@v0.15.0/mod.ts'
import { dotEnvConfig } from './deps.ts'

const client = new Client({
  user: 'postgres',
  database: 'postgres',
  hostname: Deno.env.get('DB_HOST') || dotEnvConfig().DB_HOST,
  password: Deno.env.get('DB_PASSWORD') || dotEnvConfig().DB_PASSWORD,
  port: 6543,
})

await client.connect()

{
  const result = await client.queryObject('SELECT * FROM Comments')
  console.log(result)
}
