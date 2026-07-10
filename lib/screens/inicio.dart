import 'package:flutter/material.dart';
import 'menu_screen.dart';

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
              //modo oscuro + adelante
            },
          ),
        ],

      ),
      body: SafeArea(
        child: Column(
          children: [
            const Spacer(),
            // Logo de la aplicación
            Padding(padding: const EdgeInsets.symmetric(horizontal: 40.0),
              child: Image.asset(
                'assets/images/mamut.png', // logo Mamut
                fit: BoxFit.contain,
              ),
            ),

            SizedBox(
              width: 250,
              height: 55,
              child: ElevatedButton(
                style: ElevatedButton.styleFrom(
                  backgroundColor: const Color(0xFFD9A542), // Color de fondo del botón, AMARILLO DORADO
                  foregroundColor: const Color(0xFF1C1C1E), // Color del texto del botón, gris oscuro carbon
                  elevation: 0,
                  side: const BorderSide(color: Colors.black12), // Borde del botón, negro
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(8), // Bordes redondeados
                  ),
                ), 
                onPressed: (){
                  // Navegar a la pantalla de menú
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (context) => const MenuScreen(),
                    ),
                  );
                },
                child: const Text('Ver Capsulas',
                  style: TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.w600,
                  ),
                ),
              ),
            ),
            const SizedBox(height: 15), //espacio entre botones
            TextButton(
              onPressed: (){
                // Acción del botón "Salir"
                showDialog(
                  context: context,
                  builder: (BuildContext context) {
                    return AlertDialog(
                      title: const Text('Confirmación'),
                      content: const Text('¿Estás seguro de que deseas salir de la aplicación?'),
                      actions: [
                        TextButton(
                          onPressed: () {
                            Navigator.of(context).pop(); // Cierra el diálogo
                          },
                          child: const Text('Cancelar'),
                        ),
                        TextButton(
                          onPressed: () {
                            Navigator.of(context).pop(); // Cierra el diálogo
                            Navigator.of(context).pop(); // Cierra la pantalla de inicio
                          },
                          child: const Text('Salir'),
                        ),
                      ],
                    );
                  },
                );
              },
              child: const Text(
                'Salir',
                style: TextStyle(
                  color: Color(0xFFD9A542), // Color del texto del botón, AMARILLO DORADO
                  fontSize: 16,
                ),
              ),
            ),

            const Spacer(),
            //footer
            const Padding(
              padding: EdgeInsets.only(bottom: 20.0),
              child: Text(
                '© 2024 Mamut. Todos los derechos reservados.',
                style: TextStyle(
                  color: Colors.black38, // Color del texto del footer, blanco con opacidad
                  fontSize: 14,
                ),
              ),
            ),
          ],
        )
      )

    );
  }
}