import { generateJsonSchema } from "./schemaGenerator";



export { generateJsonSchema }

// class JSONTranspiler {
//   private rawData: string;
//   private formFields: FormField[];

//   constructor(rawData: string) {
//     this.rawData = rawData;
//     this.formFields = [];
//   }

//   transpile(): void {
//     try {
//       const parsedData = JSON.parse(this.rawData);
//       this.extractFormFields(parsedData, '');
//     } catch (error) {
//       console.error('Error parsing JSON:', error);
//     }
//   }

//   extractFormFields(data: any, parentKey: string): void {
//     for (const key in data) {
//       if (data.hasOwnProperty(key)) {
//         const value = data[key];
//         const formField: FormField = {
//           name: parentKey ? `${parentKey}.${key}` : key,
//           type: typeof value,
//           label: this.generateLabel(key),
//           // Add other relevant form-related properties as needed
//         };

//         this.formFields.push(formField);

//         if (typeof value === 'object' && !Array.isArray(value)) {
//           this.extractFormFields(value, key);
//         }
//       }
//     }
//   }

//   generateLabel(key: string): string {
//     // Example: Convert snake_case to Title Case
//     return key
//       .split('_')
//       .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//       .join(' ');
//   }

//   getFormFields(): FormField[] {
//     return this.formFields;
//   }
// }

// interface FormField {
//   name: string;
//   type: string;
//   label: string;
//   // Add other relevant form-related properties as needed
// }

// // Example usage
// const rawJSONData = `
// {
//   "name": "John Doe",
//   "age": 30,
//   "email": "johndoe@example.com",
//   "address": {
//     "street": "123 Main St",
//     "city": "New York"
//   },
//   "skills": ["JavaScript", "TypeScript", "HTML", "CSS"]
// }
// `;

// const transpiler = new JSONTranspiler(rawJSONData);
// transpiler.transpile();
// const formFields = transpiler.getFormFields();
// console.log(formFields);
