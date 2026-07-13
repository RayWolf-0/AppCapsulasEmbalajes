import 'package:flutter/material.dart';
import 'reproductor_screen.dart';

class ListaCapsulasScreen extends StatelessWidget {
  final String categoria;

  const ListaCapsulasScreen({super.key, required this.categoria});

  Map<String, List<String>> _obtenerVideos() {
    return {
      'Embalador': [
        'assets/videos/CapsulasEmbalador/Cerraroe.mp4',
        'assets/videos/CapsulasEmbalador/ComoSolicitarUnaOe.mp4',
        'assets/videos/CapsulasEmbalador/QuitarPausa.mp4',
        'assets/videos/CapsulasEmbalador/SolicitarPausa.mp4',
        'assets/videos/CapsulasEmbalador/SolicitudDeCierre.mp4',
        'assets/videos/CapsulasEmbalador/TableroResumen.mp4',
        'assets/videos/CapsulasEmbalador/UsoDeStop.mp4',
      ],
      'Supervisor': [
        'assets/videos/CapsulasSupervisor/AsignarUnaOe.mp4',
        'assets/videos/CapsulasSupervisor/AsignarUnMeson.mp4',
        'assets/videos/CapsulasSupervisor/clonaroe.mp4',
        'assets/videos/CapsulasSupervisor/DarUnaPausa.mp4',
        'assets/videos/CapsulasSupervisor/OeConSolicitudDeCierre.mp4',
        'assets/videos/CapsulasSupervisor/VerMonitorOe.mp4',

      ],
      'Errores': [
        'assets/videos/CapsulasErrores/Error1.NoSePuedeVerUnaOeAsignada.mp4',
        'assets/videos/CapsulasErrores/Error2.NoSePuedeCerrarUnaOe.mp4',
        'assets/videos/CapsulasErrores/Error3.SinMesonAlSolicitarOe.mp4',
      ],
    };
  }

  @override
  Widget build(BuildContext context) {
    final Map<String, List<String>> baseDeDatos = _obtenerVideos();
    final List<String> videosAmostrar = baseDeDatos[categoria] ?? [];

    return Scaffold(
      backgroundColor: const Color(0xFFF0F0F0),
      appBar: AppBar(
        backgroundColor: const Color(0xFF1C1C1E),
        foregroundColor: const Color(0xFFD9A542),
        title: Text('Cápsulas - $categoria'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: GridView.builder(
          gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: 2,
            crossAxisSpacing: 16.0,
            mainAxisSpacing: 16.0,
          ),
          // cantidad exacta de videos a mostrar en la grilla
          itemCount: videosAmostrar.length, 
          itemBuilder: (context, index) {
            
            // ruta exacta del video
            final rutaExacta = videosAmostrar[index];

            return GestureDetector(
              onTap: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => ReproductorScreen(
                      rutaVideo: rutaExacta, // ruta
                    ),
                  ),
                );
              },
              child: Container(
                decoration: BoxDecoration(
                  color: const Color(0xFF1C1C1E),
                  borderRadius: BorderRadius.circular(8),
                ),
                child: const Center(
                  child: Icon(
                    Icons.play_arrow,
                    size: 50,
                    color: Color(0xFFD9A542),
                  ),
                ),
              ),
            );
          },
        ),
      ),
    );
  }
}