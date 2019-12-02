module.exports = function(RED) {
    function ExampleCanonNode(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function(msg) {
            msg.payload = Number(msg.payload.length);
            node.send(msg);
        });
    }
    RED.nodes.registerType("examplecanon",ExampleCanonNode);
}