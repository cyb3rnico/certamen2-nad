

const cargarTipoMedida = async()=>{
    let filtroMedida = document.querySelector("#filtro-medida");
    let tipoMedidas = await getMedidas();

    tipoMedidas.forEach(t=>{
        let option = document.createElement("option");
        option.innerText = t;
        option.value = t;
        filtroMedida.appendChild(option);
    });

};

const iniciarEliminacion = async function(){
    let id = this.idLectura;
    let resp = await Swal.fire({
        title: "¿Estás seguro que desea descartar la medición?",
        text: "Esta operación es irreversible",
        icon: "error",
        showCancelButton: true
    });
    if(resp.isConfirmed){
        if(await eliminarLectura(id)){
            let lecturas = await getLecturas();
            cargarTabla(lecturas);
            Swal.fire("Medición eliminada", "La medición ha sido descartada con éxito","info");
        }else{
            Swal.fire("Error", "No se pudo procesador la solicitud de eliminación", "error");
        }
    }else{
        Swal.fire("Cancelado", "Usted ha cancelado la eliminación");
    }
};



const cargarTabla = (lecturas)=>{
    let tbody = document.querySelector("#tbody-mediciones");
    let tmedida = "";

    tbody.innerHTML = "";

    for(let i=0; i < lecturas.length; ++i){
        let tr = document.createElement("tr");

        let tdFecha = document.createElement("td");
        tdFecha.innerText = lecturas[i].fecha_lectura;

        let tdHora = document.createElement("td");
        tdHora.innerText = lecturas[i].hora;

        let tdMedidor = document.createElement("td");
        tdMedidor.innerText = lecturas[i].medidor;

        if(lecturas[i].tipo_medida == "KiloWatts"){
            tmedida = "kW"
        }else if(lecturas[i].tipo_medida == "Watts"){
            tmedida = "W";
        }else{
            tmedida = "C";
        }

        let tdValor = document.createElement("td");
        tdValor.innerText = lecturas[i].valor + " " + tmedida + " ";

        let icono = document.createElement("i");

        if(lecturas[i].tipo_medida == "Temperatura" && lecturas[i].valor > 60){
            icono.classList.add("fas", "fa-dumpster-fire", "text-danger", "fa-3x");
        }

        tdValor.classList.add("text-center");
        tdValor.appendChild(icono);
    
        let tdAccion = document.createElement("td");
        let botonDescartar = document.createElement("button");
        botonDescartar.innerText = "Descartar Lectura";
        botonDescartar.classList.add("btn","btn-danger","text-center");
        botonDescartar.idLectura = lecturas[i].id;
        botonDescartar.addEventListener("click", iniciarEliminacion);
        tdAccion.appendChild(botonDescartar);

        tr.appendChild(tdFecha);
        tr.appendChild(tdHora);
        tr.appendChild(tdMedidor);
        tr.appendChild(tdValor);
        tr.appendChild(tdAccion);

        tbody.appendChild(tr);
    }
};

document.querySelector("#filtro-medida").addEventListener("change", async()=>{
    let filtro = document.querySelector("#filtro-medida").value;
    let lecturas = await getLecturas(filtro);
    cargarTabla(lecturas);
});


document.addEventListener("DOMContentLoaded", async()=>{
    await cargarTipoMedida();
    let lecturas = await getLecturas();
    cargarTabla(lecturas);
});