async function queryServers(serverName, q) {
    let url1 = `/${serverName}?q=${q}`
    let url2 = `/${serverName}_backup?q=${q}`

    return Promise.race([getJSON(url1), getJSON(url2)])
}

async function gougleSearch(q) {
    let time = new Promise((_, reject) => {
        let timed = setTimeout(() => {
            clearTimeout(timed)
            reject(new Error('timeout'))
        }, 80)
    })
    let search = (async () => {
        try {
            let web = await queryServers("web", q)
            let im = await queryServers("image", q)
            let vi = await queryServers("video", q)
            return { "web": web, "image": im, "video": vi }
        } catch (error) {
            throw new Error('Error during search')
        }
    })()
    return Promise.race([time, search])
}