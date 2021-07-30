<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Lectura;

class LecturasController extends Controller
{
    //
    public function getMedidas(){
        $medidas = array();
        $medidas[] = "KiloWatts";
        $medidas[] = "Watts";
        $medidas[] = "Temperatura";

        return $medidas;
    }

    public function getLecturas(){
        $lecturas = Lectura::all();
        return $lecturas;
    }

    public function filtrarLecturas(Request $request){
        $input = $request->all();
        $filtro = $input["filtro"];
        $lecturas = Lectura::where("tipo_medida", $filtro)->get();
        return $lecturas;
    }

    public function crearLectura(Request $request){
        $input = $request->all();
        $lectura = new Lectura();
        $lectura->fecha_lectura = $input["fecha_lectura"];
        $lectura->hora = $input["hora"];
        $lectura->medidor = $input["medidor"];
        $lectura->direccion = $input["direccion"];
        $lectura->valor = $input["valor"];
        $lectura->tipo_medida = $input["tipo_medida"];

        $lectura->save();
        return $lectura;
    }

    public function eliminarLectura(Request $request){
        $input = $request->all();
        $id = $input["id"];
        $lectura = Lectura::findOrFail($id);
        $lectura->delete();
        return "ok";
    }
}
