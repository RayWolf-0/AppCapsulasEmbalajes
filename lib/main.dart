import 'package:flutter/material.dart';
import 'screens/inicio.dart';

void main() {
  runApp(const CapsulasEmbalaje());
}

class CapsulasEmbalaje extends StatelessWidget {
  const CapsulasEmbalaje({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Cápsulas Embalaje',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        scaffoldBackgroundColor: const Color(0xFFF0F0F0), //fondo gris claro
        appBarTheme: const AppBarTheme(
          backgroundColor: Color(0xFF1C1C1E), // Color de la barra de navegación, gris oscuro carbon
          foregroundColor: Color(0xFFD9A542), // Color del texto y los iconos, AMARILLO DORADO
        ),
        elevatedButtonTheme: ElevatedButtonThemeData(
          style: ElevatedButton.styleFrom(
            backgroundColor: const Color(0xFFD9A542), // Color de fondo del botón, AMARILLO DORADO
            foregroundColor: Color(0xFF1C1C1E), // Color del texto del botón
          ),
        ),
      ),
      home: const InicioScreen(),
    );
  }
}