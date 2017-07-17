const Enzyme = require('enzyme');
const Adapter = require('enzyme/build/adapters/ReactSixteenAdapter');

Enzyme.configure({ adapter: new Adapter() });
