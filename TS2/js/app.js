//Variables Globales
const txtAñoUI = document.getElementById("txtAño");
const txtInscriptosUI = document.getElementById("txtInscriptos");
const txtIngresadosUI = document.getElementById("txtIngresados");
const tabla = document.getElementById("tableInscriptos");

const txtDocenteUI = document.getElementById("txtDocente");
const txtMateriaUI = document.getElementById("txtMateria");
const txtCantAlumUI = document.getElementById("txtCantAlum");
const txtCursoUI = document.getElementById("txtCurso");
const tablaCurso = document.getElementById("tableCurso");

const hideOperaccion = document.getElementById("Operacion");




function registrarInscriptos(){
    
    if (hideOperaccion.value == 'I'){
      var fila = tabla.insertRow(1);
      var col1 = fila.insertCell(0); //Columna Usuario
      var col2 = fila.insertCell(1); //Columna Comentario
      var col3 = fila.insertCell(2); //Columna Fecha
      var col4 = fila.insertCell(3); //Columna Opción
    
      //Agregar los Valores en las columnas
      col1.innerHTML = txtAñoUI.value;
      col2.innerHTML = txtInscriptosUI.value;
      col3.innerHTML = txtIngresadosUI.value;

      //Opción
      col4.innerHTML = '<button type="button" class="borrar-comentario btn btn-danger btn-sm" onclick="borrarComentario(this);">Borrar</button>';    
    }
    
    limpiarCamposInscriptos();
    
}



function registrarCurso(){
    
    if (hideOperaccion.value == 'I'){
      var fila = tablaCurso.insertRow(1);
      var col1 = fila.insertCell(0); //Columna Docente
      var col2 = fila.insertCell(1); //Columna Materia
      var col3 = fila.insertCell(2); //Columna Alumno
      var col4 = fila.insertCell(3); //Columna Curso
      var col5 = fila.insertCell(4); //Columna Opción
    
      //Agregar los Valores en las columnas
      col1.innerHTML = txtDocenteUI.value;
      col2.innerHTML = txtMateriaUI.value;
      col3.innerHTML = txtCantAlumUI.value;
      col4.innerHTML = txtCursoUI.value;
        
      //Opción
      col5.innerHTML = '<button type="button" class="borrar-comentario btn btn-danger btn-sm" onclick="borrarComentario(this);">Borrar</button>';    
    }
    
    limpiarCamposCurso();
    
}

function limpiarCamposInscriptos(){
    
    txtAñoUI.value='';
    txtInscriptosUI.value='';
    txtIngresadosUI.value='';
    hideOperaccion.value ='I'; 
}



function limpiarCamposCurso(){
    
    txtDocenteUI.value='';
    txtMateriaUI.value='';
    txtCantAlumUI.value='';
    txtCursoUI.value='';
    hideOperaccion.value ='I'; 
}




function borrarComentario(prmBorrar) {
    
    var filaEliminar = prmBorrar.parentNode.parentNode;
    filaEliminar.parentNode.removeChild(filaEliminar);
    
}
