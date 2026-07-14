import 'package:flutter/material.dart';
import 'reproductor_screen.dart';

class ListaCapsulasScreen extends StatelessWidget {
  final String categoria;

  const ListaCapsulasScreen({super.key, required this.categoria});

  //Lista 
  List<Map<String, String>> _obtenerVideos() {
    final Map<String, List<Map<String, String>>> baseDeDatos = {
      'Embalador': [
        {'titulo': 'Trabajar en la OE', 'ruta': 'assets/videos/CapsulasEmbalador/TrabajarenunaOE.mp4'},
        {'titulo': 'Solicitar OE', 'ruta': 'assets/videos/CapsulasEmbalador/ComoSolicitarUnaOe.mp4'},
        {'titulo': 'Quitar Pausa', 'ruta': 'assets/videos/CapsulasEmbalador/QuitarunaPausa.mp4'},
        {'titulo': 'Solicitar Pausa', 'ruta': 'assets/videos/CapsulasEmbalador/SolicitarunaPausa.mp4'},
        {'titulo': 'Solicitud Cierre', 'ruta': 'assets/videos/CapsulasEmbalador/SolicituddeCierre.mp4'},
        {'titulo': 'Tablero Resumen', 'ruta': 'assets/videos/CapsulasEmbalador/TableroResumen.mp4'},
        {'titulo': 'Tarjeta OE', 'ruta': 'assets/videos/CapsulasEmbalador/TarjetaOE.mp4'},
        {'titulo': 'Uso de Stop', 'ruta': 'assets/videos/CapsulasEmbalador/Stop.mp4'},
        {'titulo': 'Guias de Embalaje', 'ruta': 'assets/videos/CapsulasEmbalador/Visualizarguiasembalaje.mp4'},
      ],
      'Supervisor': [
        {'titulo': 'Asignar OE', 'ruta': 'assets/videos/CapsulasSupervisor/AsignarUnaOe.mp4'},
        {'titulo': 'Asignar Mesón', 'ruta': 'assets/videos/CapsulasSupervisor/AsignarUnMeson.mp4'},
        {'titulo': 'Clonar OE', 'ruta': 'assets/videos/CapsulasSupervisor/clonaroe.mp4'},
        {'titulo': 'Dar una Pausa', 'ruta': 'assets/videos/CapsulasSupervisor/DarUnaPausa.mp4'},
        {'titulo': 'Coe con Solicitud de Cierre', 'ruta': 'assets/videos/CapsulasSupervisor/OeConSolicitudDeCierre.mp4'},
        {'titulo': 'Ver Monitor OE', 'ruta': 'assets/videos/CapsulasSupervisor/VerMonitor.mp4'},

      ],
      'Errores': [
        {'titulo': 'No ver OE asignada', 'ruta': 'assets/videos/CapsulasErrores/Error1.NoSePuedeVerUnaOeAsignada.mp4'},
        {'titulo': 'No cerrar OE', 'ruta': 'assets/videos/CapsulasErrores/Error2.NoSePuedeCerrarUnaOe.mp4'},
        {'titulo': 'Sin Mesón al solicitar', 'ruta': 'assets/videos/CapsulasErrores/Error3.SinMesonAlSolicitarOe.mp4'},
      ],
      'Embalador Privilegios': [
        {'titulo': 'Cerrar una OE', 'ruta': 'assets/videos/CapsulasEmbaladorPrivilegios/Cerraroeconprivi.mp4'},
        {'titulo': 'Trabajar en la OE', 'ruta': 'assets/videos/CapsulasEmbaladorPrivilegios/TrabajarenlaOeprivi.mp4'},
        {'titulo': 'Pausar una OE', 'ruta': 'assets/videos/CapsulasEmbaladorPrivilegios/pausaroeconprivi.mp4'},
      ],
    };
    return baseDeDatos[categoria] ?? [];
  }

  @override
  Widget build(BuildContext context) {
    final List<Map<String, String>> videosAmostrar = _obtenerVideos();

    return Scaffold(
      backgroundColor: const Color(0xFFF0F0F0),
      appBar: AppBar(
        backgroundColor: const Color(0xFF1C1C1E),
        foregroundColor: const Color(0xFFD9A542),
        title: Text('Cápsulas - $categoria'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(5.0),
        child: GridView.builder(
          //tamaño recuadros de video
          gridDelegate: const SliverGridDelegateWithMaxCrossAxisExtent(
            maxCrossAxisExtent: 220,
            crossAxisSpacing: 16.0,
            mainAxisSpacing: 16.0,
            childAspectRatio: 0.9, 
          ),
          itemCount: videosAmostrar.length,
          itemBuilder: (context, index) {
            final video = videosAmostrar[index];

            return GestureDetector(
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => ReproductorScreen(
                      rutaVideo: video['ruta']!,
                      tituloVideo: video['titulo']!, // titulos
                    ),
                  ),
                );
              },
              child: Column(
                children: [
                  Expanded(
                    child: Container(
                      decoration: BoxDecoration(
                        color: const Color(0xFF1C1C1E),
                        borderRadius: BorderRadius.circular(8),
                      ),
                      child: const Center(
                        child: Icon(Icons.play_arrow, size: 40, color: Color(0xFFD9A542)),
                      ),
                    ),
                  ),
                  const SizedBox(height: 8),
                  // mostrar el titulo del video
                  Text(
                    video['titulo']!,
                    textAlign: TextAlign.center,
                    style: const TextStyle(fontWeight: FontWeight.bold, fontSize: 14),
                    maxLines: 2,
                    overflow: TextOverflow.ellipsis,
                  ),
                ],
              ),
            );
          },
        ),
      ),
    );
  }
}