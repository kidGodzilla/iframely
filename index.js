// Process-level
const cluster = require('cluster');
const os = require('os');



/**
 * Run a cluster of CPUs * 2 "threads", which can die and restart
 */
if (cluster.isMaster) {
    var cpuCount = os.cpus().length;

    var clusterCount = cpuCount * 2;

    clusterCount = 1;

    for (var i = 0; i < clusterCount; i += 1) {
        cluster.fork();
    }

    cluster.on('exit', function (worker) {
        console.log('Worker %d died :(', worker.id); // Replace the dead worker, we're not sentimental
        cluster.fork();
    });

} else {
    require('./server');
}
