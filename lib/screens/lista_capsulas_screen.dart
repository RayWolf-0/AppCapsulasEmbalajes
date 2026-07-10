import 'package:flutter/material.dart';
import 'reproductor_screen.dart';

class ListaCapsulasScreen extends StatelessWidget {
  final String categoria;

  const ListaCapsulasScreen({super.key, required this.categoria});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Cápsulas - $categoria'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: GridView.builder(
          gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: 2, // Número de columnas
            crossAxisSpacing: 16.0, // Espacio horizontal entre elementos
            mainAxisSpacing: 16.0, // Espacio vertical entre elementos
          ),
          itemCount: 10, // Número de elementos en la cuadrícula
          itemBuilder: (context, index) {
            return GestureDetector(
              onTap: () {
                // Navegar a la pantalla de reproducción al hacer clic en una cápsula
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => ReproductorScreen(
                      rutaVideo: 'assets/videos/CapsulasEmbalador/Cerraroe${index + 1}.mp4', // Ruta del video de la cápsula
                    ),
                  ),
                );
              },
              child: Container(
                color: const Color(0xFF1C1C1E), // Color de fondo de la cápsula, gris oscuro carbon
                child: const Icon(
                  Icons.play_arrow,
                  size: 50,
                  color: Color(0xFFD9A542), // Color del icono de reproducción
                )
              ),
            );
          },
        ),
      ),
    );
  }
}