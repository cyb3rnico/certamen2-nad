@extends("layouts.master")

@section("contenido")
  <div class="row mt-2">
    <div class="col-12 col-md-6 col-lg-5 mx-auto">
      <div class="card">
        <div class="card-header bg-primary text-white">
          <span>Filtrar</span>
        </div>
        <div class="card-body">
          <select class="form-select" id="filtro-medida">
            <option value="todas">Todas</option>
          </select>
        </div>
      </div>
    </div>
  </div>
  <div class="row mt-5">
    <div class="col-12 col-md-12 col-lg-6 mx-auto">
      <table class="table table-hover table-bordered table-striped table-responsive">
        <thead class="bg-primary text-white">
          <tr>
            <td>Fecha</td>
            <td>Hora</td>
            <td>Medidor</td>
            <td>Valor</td>
            <td>Acciones</td>
          </tr>
        </thead>

        <tbody id="tbody-mediciones">

        </tbody>

      </table>
    </div>
  </div>
@endsection

@section("javascript")
  <script src="{{asset('js/servicios/medidorService.js')}}"></script>
  <script src="{{asset('js/servicios/lecturasService.js')}}"></script>
  <script src="{{asset('js/ver_mediciones.js')}}"></script>
@endsection