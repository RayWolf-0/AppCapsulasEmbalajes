import 'package:capsulas_embalaje/screens/visor_documentos_screen.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import 'lista_capsulas_screen.dart';

class MenuScreen extends StatelessWidget {
  const MenuScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Cápsulas Embalaje'),
        centerTitle: true,
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Image.asset(
              'assets/images/mamut.png', // logo Mamut
              width: 150,
              height: 150,
            ),
            const SizedBox(height: 20),
            _crearBoton(context, 'Embalador'),
            const SizedBox(height: 20),
            _crearBoton(context, 'Supervisor'),
            const SizedBox(height: 20),
            _crearBoton(context, 'Errores'),
            const SizedBox(height: 20),
            _crearBoton(context, 'Embalador Privilegios'),
            const SizedBox(height: 30),
            _crearBoton(context, 'Manual de Embalador'),
            const SizedBox(height: 20),
            _crearBoton(context, 'Manual de Supervisor'),

          ],
        ),
      ),
    );
  }

  Widget _crearBoton(BuildContext context, String titulo) {
    return SizedBox(
      width: 250,
      height: 55,
      child: ElevatedButton(
        style: ElevatedButton.styleFrom(
          backgroundColor: const Color(0xFFD9A542), // Color del botón, AMARILLO DORADO
          foregroundColor: Colors.black87, // Color del texto del botón
          elevation: 0,
          side: const BorderSide(color: Colors.black87, width: 2), // Bordes negros del botón
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(8), // Bordes redondeados
          ),
        ),
        onPressed: () async {
          if (titulo.contains('Manual')){
            String rutaArchivo = titulo == 'Manual de Embalador' ? 'assets/Documentos/ManualEmbalador.pdf' : 'assets/Documentos/ManualSupervisor.pdf';
            if (kIsWeb){
              final Uri url = Uri.parse(rutaArchivo);
              if (await canLaunchUrl(url)){  
              } else{
                debugPrint('no se pudo abrir el documento');
              }
              } else {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => VisorDocumentosScreen(rutaPdf: rutaArchivo, titulo: titulo),
                  ),
                );
              }
            } else {
              Navigator.push(
                context,
                MaterialPageRoute(builder: (context) => ListaCapsulasScreen(categoria: titulo)),
              );
            }
        },
        child: Text(titulo,
          style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold),),
      ),
    );

  }

}