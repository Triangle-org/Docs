module.exports = {
    apps: [{
        name: "Triangle Docs",
        port: 6003,
        exec_mode: 'cluster',
        instances: 'max',
        script: "npm",
        args: "start"
    }]
}
