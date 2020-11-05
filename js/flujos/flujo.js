const token = localStorage.getItem("Token");
function getTareasAsignadas() {
    const promise = axios.get(`http://127.0.0.1:8000/tareas_asignadas/`, {
        headers: {
            Authorization: "Token " + token,
            "Content-Type": "application/json",
        },
    });

    const dataPromise = promise.then((response) => response.data);

    return dataPromise;
}

// window.onbeforeunload = function() {
//     return false;
// };

getTareasAsignadas().then((Tareas) => {
    for (const tarea of Tareas.results) {
        console.log(tarea);
        var sel = document.getElementById("table-body");
        var tr = document.createElement("tr");
        var tdId = document.createElement("td");
        var tdName = document.createElement("td");
        var tdDescripcion = document.createElement("td");
        var tdEstado = document.createElement("td");
        tdId.appendChild(document.createTextNode(tarea.id));
        tdName.appendChild(document.createTextNode(tarea.nombre_tarea));
        tdDescripcion.appendChild(document.createTextNode(tarea.descripcion_tarea));

        tr.appendChild(tdId);
        tr.appendChild(tdName);
        tr.appendChild(tdDescripcion);
        sel.appendChild(tr);
    }
});
