# generate-json-schema

This package generates a JSON schema based on the provided JSON data. The package will continually undergo enhancements to improve its functionality. Future releases will introduce additional features like cli usage , and you also have the option to fork the package and contribute to its improvement.

### Installation

To install the package, run the following command in your terminal:
Run on the command line:

```bash
npm install generate-json-schema --save-dev
```

Then, within your project, you can utilize it as follows:

```javascript
var generateJsonSchema = require('generate-json-schema'),

const json_Obj  = { users: { name: "John Doe", age :30 } ,{ name: "Jane Doe", age :27 } },

const schema_Obj = generateJsonSchema(json_Obj);

```

### Local Download

To download the package locally, execute the following commands in your terminal:

```bash
git clone https://github.com/umairabbasDev/generate-json-schema
cd generate-json-schema
npm install .
```

### CLI Installation

Run on the command line:

```bash
Coming soon! Stay tuned for updates on CLI usage instructions.
```
