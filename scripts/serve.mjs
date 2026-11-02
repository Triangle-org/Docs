import {createReadStream, promises as fs} from 'node:fs'
import {createServer} from 'node:http'
import {extname, join, resolve, sep} from 'node:path'

const root = resolve('out')
const port = Number(process.env.PORT || 3000)
const contentTypes = {
    '.avif': 'image/avif',
    '.css': 'text/css; charset=utf-8',
    '.html': 'text/html; charset=utf-8',
    '.ico': 'image/x-icon',
    '.jpeg': 'image/jpeg',
    '.jpg': 'image/jpeg',
    '.js': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.svg': 'image/svg+xml',
    '.txt': 'text/plain; charset=utf-8',
    '.webp': 'image/webp',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
}

createServer(async (request, response) => {
    if (!['GET', 'HEAD'].includes(request.method)) {
        response.writeHead(405, {'Allow': 'GET, HEAD'})
        response.end()
        return
    }

    let pathname
    try {
        pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname)
    } catch {
        response.writeHead(400)
        response.end()
        return
    }

    const candidate = resolve(root, pathname.replace(/^\/+/, '') || 'index.html')
    if (candidate !== root && !candidate.startsWith(`${root}${sep}`)) {
        response.writeHead(404)
        response.end()
        return
    }

    const candidates = [candidate]
    if (!extname(candidate)) candidates.push(`${candidate}.html`)
    candidates.push(join(candidate, 'index.html'))

    for (const file of candidates) {
        try {
            if (!(await fs.stat(file)).isFile()) continue
            response.writeHead(200, {
                'Content-Type': contentTypes[extname(file)] || 'application/octet-stream',
                'X-Content-Type-Options': 'nosniff',
            })
            if (request.method === 'HEAD') response.end()
            else createReadStream(file).pipe(response)
            return
        } catch {
            // Try the next static-export path.
        }
    }

    response.writeHead(404)
    response.end('Not found')
}).listen(port, '127.0.0.1', () => {
    process.stdout.write(`Docs preview: http://127.0.0.1:${port}\n`)
})
