var versions = [
    '1.0.0'
];

function load(version) {
    // Use the last version availiable here
    return require('./1.0.0/reference.json');
}

module.exports = {
    versions: versions,
    load: load
}