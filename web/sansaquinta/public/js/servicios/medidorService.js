const getMedidas = async ()=>{
    let resultado = await axios.get("api/medidas/get");
    return resultado.data;
};