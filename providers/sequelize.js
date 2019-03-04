/* eslint-disable */
const { Provider } = require('klasa');
const fs = require('fs-nextra');
const { resolve } = require('path');
const db = require('sequelize');

module.exports = class extends Provider {

	constructor(...args) {
		super(...args);
		this.baseDir = resolve(this.client.userBaseDirectory, 'bwd', 'provider', 'sequelize');
	}
	async init() {
		await fs.ensureDir(this.baseDir);
	}
};
