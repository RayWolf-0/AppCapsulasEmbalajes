import 'package:flutter/material.dart';
import 'menu_screen.dart';
import 'package:flutter/services.dart';

class InicioScreen extends StatelessWidget {
  const InicioScreen({super.key});

  @override
  Widget build(BuildContext context){
    return Scaffold(
      backgroundColor: const Color(0xFFF0F0F0), // Color de fondo de la pantalla, gris oscuro carbon
      appBar: AppBar(
        backgroundColor: Colors.transparent, // Color de fondo transparente
        elevation: 0, //esto quita la sombra
        centerTitle: true,
        title: const Text('Capsulas Embalaje',
          style: TextStyle(
            color: Colors.black87, // Color del texto, AMARILLO DORADO
            fontSize: 30,
            fontWeight: FontWeight.bold,
          ),
        ),

        actions: [
          IconButton(
            icon: const Icon(Icons.tonality, color: Colors.black87), // Color del icono del menú, AMARILLO DORADO
            onPressed: () {
              //modo oscuro
            },
          ),
        ],

      ),
      body: SafeArea(
        child: Center(
          child: SingleChildScrollView(
            child: Padding(
              padding: const EdgeInsets.symmetric(vertical: 20.0),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children:[
                Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Image.asset(
                    'assets/images/mamut.png',
                    height: MediaQuery.of(context).size.height * 0.35,
                    fit: BoxFit.contain,
                  ),
                ),
                const SizedBox(height: 40,),
                SizedBox(
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
                    onPressed: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(
                          builder: (context) => const MenuScreen(),
                        ),
                      );
                    },
                    child: const Text(
                      'Ver Capsulas',
                      style: TextStyle(
                        color: Colors.black87,
                        fontSize: 18,
                        fontWeight: FontWeight.w600,
                      ),
                    ),
                  ),
                ),

                const SizedBox(height: 15),
                TextButton(
                  onPressed: (){
                    showDialog(
                      context: context,
                      builder: (BuildContext context){
                        return AlertDialog(
                          title: const Text('Confirmación'),
                          content: const Text('¿Desea salir de la aplicación?'),
                          actions: [
                            TextButton(
                              onPressed: (){
                                Navigator.of(context).pop(); // Cierra el diálogo
                                SystemNavigator.pop(); // Cierra la aplicación
                              },
                              child: const Text('Salir'),
                            ),
                          ],
                        );
                      }
                    );
                  },
                  child: const Text(
                    'Salir',
                    style: TextStyle(
                      color: Colors.black87, // Color del texto del botón, AMARILLO DORADO
                      fontSize: 16,
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                ),
                const SizedBox(height: 40),
                //footer
                const Text(
                  '© 2024 Mamut. Todos los derechos reservados.',
                  style: TextStyle(
                    color: Colors.black54, // Color del texto del footer
                    fontSize: 14,
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    ),
  );

  }
}