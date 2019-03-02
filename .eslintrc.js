module.exports = {
	"extends": "airbnb",
	"env": {
		"browser": true,
		"node": true,
		"es6": true,
	},
	parser: "babel-eslint",
	"rules": {
		"no-console": "off",
		"max-len": "off",
		"react/destructuring-assignment": "off",
		"no-nested-ternary": "off",
    "flatTernaryExpressions": true,
	},
};
