@extends("layouts.master")

@section("contenido")

<div class="row mt-5">
    <div class="col-12 col-md-6 col-lg-5 mx-auto">
      <div class="card">
        <div class="card-header bg-primary text-white">
          <span>Registrar Lectura</span>
        </div>

        <div class="card-body">
            <div class="mb-3">
                <label for="fecha-txt" class="form-label">Fecha</label>
                <input type="date"  id="fecha-txt" class="form-control">
            </div>
            <div class="mb-3">
                <label for="hora-txt" class="form-label">Hora</label>
                <input type="text" min="0" class="form-control" id="hora-txt">
            </div>
            <div class="mb-3">
              <label for="medidor-select" class="form-label">Medidor</label>
              <select id="medidor-select" class="form-select">
                  <option value="1">01</option>
                  <option value="2">02</option>
                  <option value="3">03</option>
                  <option value="4">04</option>
                  <option value="5">05</option>
                  <option value="6">06</option>
                  <option value="7">07</option>
                  <option value="8">08</option>
                  <option value="9">09</option>
                  <option value="10">10</option>
              </select>
            </div>
            <div class="mb-3">
                <label for="direccion-txt" class="form-label">Dirección</label>
                <textarea  id="direccion-txt" class="form-control">
                </textarea>
            </div>
            <div class="mb-3">
                <label for="valor-txt" class="form-label">Valor</label>
                <input type="number" min="0" class="form-control" id="valor-txt">
            </div>
            <div class="mb-3">
                <label for="medida-select" class="form-label">Tipo de Medida</label>
                <select id="medida-select" class="form-select"></select>
              </div>
          </div>

        <div class="card-footer d-grid gap-1">
          <button id="registrar-btn" class="btn btn-primary">Registrar</button>
        </div>
      </div>
    </div>
  </div>
@endsection
@section("javascript")
  <script src="{{asset('js/servicios/lecturasService.js')}}"></script>
  <script src="{{asset('js/servicios/medidorService.js')}}"></script>
  <script src="{{asset('js/agregar_lectura.js')}}"></script>

@endsection