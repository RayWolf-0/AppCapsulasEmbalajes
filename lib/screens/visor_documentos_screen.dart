import 'package:flutter/material.dart';
import 'package:syncfusion_flutter_pdfviewer/pdfviewer.dart'; 

class VisorDocumentosScreen extends StatelessWidget {
  final String rutaPdf;
  final String titulo;

  const VisorDocumentosScreen({
    super.key,
    required this.rutaPdf,
    required this.titulo,
  });
  

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFF0F0F0), // Color de fondo de la pantalla, gris oscuro carbon
      appBar: AppBar(
        title: Text(titulo),
        backgroundColor: const Color(0xFF1C1C1E), // Color de fondo del AppBar, gris oscuro carbon
        foregroundColor: const Color(0xFFD9A542), // Color del texto del AppBar, AMARILLO DORADO
      ),
      body: SfPdfViewer.asset(
        rutaPdf,
        canShowScrollHead: true,
      ),
    );
  }
}