import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:video_player/video_player.dart';

class ReproductorScreen extends StatefulWidget {
  final String rutaVideo;

  const ReproductorScreen({super.key, required this.rutaVideo});

  @override
  State<ReproductorScreen> createState() => _ReproductorScreenState();

}

class _ReproductorScreenState extends State<ReproductorScreen> {
  late VideoPlayerController _controller;
  bool _estaInicializado = false;

  @override
  void initState() {
    super.initState();
    SystemChrome.setPreferredOrientations([
      DeviceOrientation.landscapeRight,
      DeviceOrientation.landscapeLeft,
    ]);
    SystemChrome.setEnabledSystemUIMode(SystemUiMode.immersiveSticky);

    _controller = VideoPlayerController.asset(widget.rutaVideo)
    ..initialize().then((_) {
      setState(() {
        _estaInicializado = true;

      });
      _controller.play();
    });
  }

  @override
  void dispose() {
    SystemChrome.setPreferredOrientations([
      DeviceOrientation.portraitUp,
      DeviceOrientation.portraitDown,
    ]);
    SystemChrome.setEnabledSystemUIMode(SystemUiMode.edgeToEdge);
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context){
    return Scaffold(
      backgroundColor: const Color(0xFF1C1C1E), // Color de fondo de la pantalla, gris oscuro carbon
      body: Stack(
        alignment: Alignment.center,
        children: [
          //Video Player
          _estaInicializado ? AspectRatio(
            aspectRatio: _controller.value.aspectRatio,
            child: VideoPlayer(_controller),
          )
          : const CircularProgressIndicator(
            color: Color(0xFFD9A542), // Color del indicador de carga, AMARILLO DORADO
          ),
          //Controles de reproducción
          if (_estaInicializado)
            GestureDetector(
              onTap: (){
                setState((){
                  _controller.value.isPlaying ? _controller.pause() : _controller.play();
                });
              },
              child: Container(
                color: Colors.transparent, //esta capa detecta el toque para reproducir/pausar el video
                child: Center(
                  child: Icon(
                    _controller.value.isPlaying
                    ? Icons.pause 
                    : Icons.play_arrow, color: const Color(0xFFD9A542).withValues(alpha: 0.8),
                    size: 80.0, // Color del icono de reproducción/pausa, AMARILLO DORADO
                  ),

                ),
              ),
            ),

          Positioned(
            top: 20,
            left: 20,
            child: IconButton(
              icon: const Icon(Icons.arrow_back_ios, color: Colors.white, size: 30.0),
              onPressed: (){
                Navigator.pop(context);
              },// Color del icono de retroceso, blanco
            )
          )

        ],
      )
    );
  }

}