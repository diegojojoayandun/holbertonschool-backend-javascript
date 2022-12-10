/// <reference path="crud.d.ts" />
import * as CRUD from "./crud";
import { RowID, RowElement, MiString } from "./interface";

const row: RowElement = { firstName: "Gillaume", lastName: "Salva" };
// creamos row con los datos
const newRowID: RowID = CRUD.insertRow(row); // en newRowID guardamos el id aleatoruiio que devuelve la funcion de JS insertRow
const updateRow: RowElement = { age: 23, ...row };
// en una constante guadamos dato a actualizar el del id de newRowID con su nuevo dato
CRUD.updateRow(newRowID, updateRow);
CRUD.deleteRow(newRowID);

/*const obj = {firstName: "Guillaume", lastName: "Salva"};
CRUD.insertRow(obj)
// Insert row {firstName: "Guillaume", lastName: "Salva"}

const updatedRow: RowElement = { firstName: "Guillaume", lastName: "Salva", age: 23 };
CRUD.updateRow(newRowID, updatedRow);
// Update row 125 {firstName: "Guillaume", lastName: "Salva", age: 23}

CRUD.deleteRow(125);
// Delete row id 125*/
