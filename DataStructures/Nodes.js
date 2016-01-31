function Node(d) {
	if (d === null || d === undefined) {
		throw new Error("Cannot create an empty node");
	}

	this.next = null;
	this.data = d;
}

module.exports = Node;