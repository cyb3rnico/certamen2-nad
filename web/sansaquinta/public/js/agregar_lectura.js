
const cargarMedidas = async()=>{
    let medidas = await getMedidas();
    let medidaSelect = document.querySelector("#medida-select");

    medidas.forEach(m=>{
        let option = document.createElement("option");
        option.innerText = m;
        medidaSelect.appendChild(option);
    });


};

document.addEventListener("DOMContentLoaded", ()=>{
    cargarMedidas();
});

document.querySelector("#registrar-btn").addEventListener("click", async()=>{
    let fecha_lectura = document.querySelector("#fecha-txt").value.trim();
    let hora = document.querySelector("#hora-txt").value.trim();
    let medidor = document.querySelector("#medidor-select").value.trim();
    let direccion = document.querySelector("#direccion-txt").value.trim();
    let valor = document.querySelector("#valor-txt").value.trim();
    let tipo_medida = document.querySelector("#medida-select").value.trim();


    let errores = [];

    if(fecha_lectura === ""){
        errores.push("Debe ingresar una fecha");
    }


    if(valor === ""){
        errores.push("Debe ingresar un valor");
    }

    if(valor < 0 || valor > 500){
        errores.push("Error, debe ser un valor entero mayor que 0 y menor o igual que 500");
    }

    if(hora == ""){
        errores.push("Error, debe ingresar una hora");
    }

    //Valida hora lógica y formato también
    const validarHora = (hora)=>{
        let esValida = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(hora);
        if(!esValida){
            errores.push("Error, debe ingresar una hora en formato adecuado (HH:mm)");
        }
    };

    validarHora(hora);

    if(direccion === ""){
        errores.push("Debe ingresar una dirección");
    }

    if(errores.length == 0){
        let lectura = {};
        lectura.fecha_lectura = fecha_lectura;
        lectura.hora = hora;
        lectura.medidor = medidor;
        lectura.direccion = direccion;
        lectura.valor = valor;
        lectura.tipo_medida = tipo_medida;

        let res = await crearLectura(lectura);

        await Swal.fire("Lectura ingresada", "Operación realizada con éxito","success");

        window.location.href = "ver_mediciones";
    }else{
        Swal.fire({
            title: "Errores de validación",
            icon: "warning",
            html: errores.join("<br />")
        });
    }
});