import 'package:flutter/material.dart';
import 'reproductor_screen.dart';

class ListaCapsulasScreen extends StatelessWidget {
  final String categoria;

  const ListaCapsulasScreen({super.key, required this.categoria});

  //Lista 
  List<Map<String, String>> _obtenerVideos() {
    final Map<String, List<Map<String, String>>> baseDeDatos = {
      'Embalador': [
        {'titulo': 'Trabajar en la OE', 'ruta': 'assets/videos/CapsulasEmbalador/Trabajarunaoe.webm'},
        {'titulo': 'Solicitar OE', 'ruta': 'assets/videos/CapsulasEmbalador/solicitaroe.webm'},
        {'titulo': 'Quitar Pausa', 'ruta': 'assets/videos/CapsulasEmbalador/Quitarpausa.webm'},
        {'titulo': 'Solicitar Pausa', 'ruta': 'assets/videos/CapsulasEmbalador/Solicitarunapausa.webm'},
        {'titulo': 'Solicitud Cierre', 'ruta': 'assets/videos/CapsulasEmbalador/Solicitudcierre.webm'},
        {'titulo': 'Tablero Resumen', 'ruta': 'assets/videos/CapsulasEmbalador/Tableroresumen.webm'},
        {'titulo': 'Tarjeta OE', 'ruta': 'assets/videos/CapsulasEmbalador/Tarjetaoe.webm'},
        {'titulo': 'Uso de Stop', 'ruta': 'assets/videos/CapsulasEmbalador/Stop.webm'},
        {'titulo': 'Guias de Embalaje', 'ruta': 'assets/videos/CapsulasEmbalador/Visualizarguias.webm'},
      ],
      'Supervisor': [
        {'titulo': 'Asignar OE', 'ruta': 'assets/videos/CapsulasSupervisor/Asignarunaoe.webm'},
        {'titulo': 'Asignar Mesón', 'ruta': 'assets/videos/CapsulasSupervisor/Asignarunmeson.webm'},
        {'titulo': 'Clonar OE', 'ruta': 'assets/videos/CapsulasSupervisor/Clonaroe.webm'},
        {'titulo': 'Dar una Pausa', 'ruta': 'assets/videos/CapsulasSupervisor/Darunapausa.webm'},
        {'titulo': 'Coe con Solicitud de Cierre', 'ruta': 'assets/videos/CapsulasSupervisor/Oeconsolicituddecierre.webm'},
        {'titulo': 'Ver Monitor OE', 'ruta': 'assets/videos/CapsulasSupervisor/Vermonitoroe.webm'},

      ],
      'Errores': [
        {'titulo': 'No ver OE asignada', 'ruta': 'assets/videos/CapsulasErrores/Error1.Nosepuedeverunaoeasignada.webm'},
        {'titulo': 'No cerrar OE', 'ruta': 'assets/videos/CapsulasErrores/Error2.Nosepuedecerrarunaoe.webm'},
        {'titulo': 'Sin Mesón al solicitar', 'ruta': 'assets/videos/CapsulasErrores/Error3.Sinmesonalsolicitaroe.webm'},
      ],
      'Embalador Privilegios': [
        {'titulo': 'Cerrar una OE', 'ruta': 'assets/videos/CapsulasEmbaladorPrivilegios/Cerraroe.webm'},
        {'titulo': 'Trabajar en la OE', 'ruta': 'assets/videos/CapsulasEmbaladorPrivilegios/Trabajaroe.webm'},
        {'titulo': 'Pausar una OE', 'ruta': 'assets/videos/CapsulasEmbaladorPrivilegios/Pausaroe.webm'},
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