const ssID = "1D0_xXynWFa_Tk-8XZ8nNBBJp05zhURLVFLfUtktIy1k";
const HojaDatosNombre = "Datos";

function foo() { 
  Logger.log(getValuesAsObject(ssID, HojaDatosNombre));
}



/**
 * Return the values from Google sheet into an Object array.
 *
 * @param {text|SpreadsheetId, text|sheetName} 
 * @return object|objeto as an array into an object 
 * @customfunction
 */

function getValuesAsObject(SpreadsheetId, sheetName){
  var hojaDatos = SpreadsheetApp.openById(SpreadsheetId).getSheetByName(sheetName);
  var datos = hojaDatos.getDataRange().getValues();
  var objeto = {};
  datos[0].forEach(function(element){
    objeto[element] = [];
  });
  datos.forEach(function(element, index){
    if(index > 0){
      element.forEach(function(elemento, indice){
          objeto[Object.keys(objeto)[indice]].push(elemento);
      });
    }
  });
  return objeto;
}