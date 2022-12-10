/*Ambient modules is a TypeScript feature that allows importing libraries written in JavaScript
 and using them seamlessly and safely as if they were written in TypeScript.

 An ambient declaration file is a file that describes the module’s type but doesn’t contain its implementation.
 Ambient declaration files are not transpiled, so they are not converted to JavaScript.
 They are used purely for type safety and IntelliSense. They follow the d.ts file format.

 https://isamatov.com/typescript-ambient-module/

 */

import { RowID, RowElement } from "./interface";
// https://www.typescriptlang.org/docs/handbook/declaration-files/by-example.html
declare function insertRow(row: RowElement): any;
declare function deleteRow(rowId: RowID): any;
declare function updateRow(rowId: RowID, row: RowElement): RowID;
