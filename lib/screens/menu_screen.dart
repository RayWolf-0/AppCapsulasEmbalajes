import 'package:flutter/material.dart';
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

          ],
        ),
      ),
    );
  }

  Widget _crearBoton(BuildContext context, String categoria) {
    return SizedBox(
      width: 200,
      height: 50,
      child: ElevatedButton(
        onPressed: () {
          // Navegar a la pantalla de lista de cápsulas
          Navigator.push(
            context,
            MaterialPageRoute(builder: (context) => ListaCapsulasScreen(categoria: categoria),),
          );
        },
        child: Text(categoria,
        style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold),),
      ),
    );
  }

}