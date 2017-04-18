var global = require('const-global')
var universal = global

loop: while (true) {
	switch (universal.parent) {
		case universal: case undefined: case null: break loop
		default: universal = universal.parent
	}
}

module.exports = universal
