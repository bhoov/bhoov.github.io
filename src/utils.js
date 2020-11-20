async function loadFnamesFromDatabase(fnames) {
    const fileData = await Promise.all(fnames.map(async (fkey) => {
        const fdata = await fs.readFile(`_data/${fkey}.yaml`, 'utf8')
        return yaml.safeLoad(fdata)
    }))
    const db = {}
    fnames.forEach((fkey, i) => {
        db[fkey] = fileData[i]
    })
    return db

}

export default { loadFnamesFromDatabase }