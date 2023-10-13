const client = require('./lib/client')

const connect = async () => {
 try {
  await client.connect()
 } catch (error) {
  console.error(error)
 }
}

const app = express()
app.listen(8080, () => {
 console.log('Server listening on port 8080')
})

connect()
