@extends("layouts.master")

@section("contenido")
    <div class="row mt-5">
        <div class="col-12 col-md-6 col-lg-5 mx-auto">
            <div class="card">
                <div class="card-header">
                    <i class="fas fa-tasks fa-2x"></i>
                    <span>Bienvenido al Sistema Sansaquinta</span>
                </div>
                <div class="card-body">
                    <p>Este es tu nueva aplicación web para la gestión y lectura de medidores eléctricos.</p>
                    <p>Diseñado y programado por Nicolás Astudillo Díaz.</p>
                    <p>© 2021</p>
                </div>
                <div class="card-footer">
                    <nav class="redes-sociales pt-3">
                        <ul>
                            <li>
                                <a target="_blank"href="#">
                                    <img src="img/facebook.png" alt="facebook-logo">
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="#">
                                    <img src="img/instagram.png" alt="instagram-logo">
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
@endsection