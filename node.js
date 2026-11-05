
module.exports = function(RED) {

    function NadhemIotNode(config) {

        RED.nodes.createNode(this, config);

        var node = this;

        node.on('input', function(msg) {

            msg.payload = "Nadhem Zini";

            node.send(msg);

        });
    }

    RED.nodes.registerType("nadhem-iot", NadhemIotNode);

}
