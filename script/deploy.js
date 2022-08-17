const fs = require('fs')
const path = require('path')

function getAllFiles (dirPath, originalPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath)

  arrayOfFiles = arrayOfFiles || []
  originalPath = originalPath || path.resolve(dirPath, '..')

  const folder = path.relative(originalPath, path.join(dirPath, '/'))

  arrayOfFiles.push({
    path: folder.replace(/\\/g, '/'),
    mtime: fs.statSync(folder).mtime
  })

  files.forEach(function (file) {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfFiles = getAllFiles(
        dirPath + '/' + file,
        originalPath,
        arrayOfFiles
      )
    } else {
      file = path.join(dirPath, '/', file)

      arrayOfFiles.push({
        path: path.relative(originalPath, file).replace(/\\/g, '/'),
        content: fs.readFileSync(file),
        mtime: fs.statSync(file).mtime
      })
    }
  })

  return arrayOfFiles
}

async function loadIpfs (files) {
  const { create, globSource } = await import('ipfs-http-client')
  const ipfs = create('http://localhost:5002')
  for await (const file of ipfs.addAll(globSource('./', 'out/**/*'))) {
    console.log(file)
  }
  // console.log({ files2: files[2] })

  // const { cid } = await ipfs.add(
  //   'Hello world, probando desde node18 otro file!',
  //   {
  //     pa
  //   }
  // )

  // await ipfs.add()
  // console.log({ cid })

  // ipfs
  //   .add(files[2], { pin: true })
  //   .then(result => {
  //     rootItem = '/ipfs/' + result[result.length - 1].hash
  //     console.info(result)
  //     console.info('Copying from ' + rootItem + ' to ' + rootFolder)
  //     ipfs.files.cp(rootItem, rootFolder)
  //   })
  //   .catch(error => console.error(error))
}

// loadIpfs()
const dirOut = './out'
const files = getAllFiles(dirOut)
console.log(files)
const rootFolder = '/' + path.relative(path.resolve(dirOut, '..'), dirOut)
console.log({ rootFolder })
loadIpfs(files)
