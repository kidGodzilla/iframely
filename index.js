// Process-level
const cluster = require('cluster');
// const os = require('os');

/**
 * Run a cluster of CPUs * 2 "threads", which can die and restart
 */
if (cluster.isMaster) {
    // let cpuCount = os.cpus().length;
    let clusterCount = 1;

    for (let i = 0; i < clusterCount; i += 1) { cluster.fork() }

    cluster.on('exit', (worker) => {
        console.log('Worker %d died', worker.id); // Replace the dead worker, we're not sentimental
        cluster.fork();
    });

} else {
    require('./server');
}
