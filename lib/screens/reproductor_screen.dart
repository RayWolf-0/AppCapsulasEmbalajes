import 'package:flutter/material.dart';
import 'package:video_player/video_player.dart';
import 'package:chewie/chewie.dart';

class ReproductorScreen extends StatefulWidget {
  final String rutaVideo;
  final String tituloVideo;

  const ReproductorScreen({super.key, required this.rutaVideo, required this.tituloVideo});

  @override
  State<ReproductorScreen> createState() => _ReproductorScreenState();

}

class _ReproductorScreenState extends State<ReproductorScreen> {
  late VideoPlayerController _videoPlayerController;
  ChewieController? _chewieController;
  bool _huboError = false;
  String _mensajeError = '';

  @override
  void initState() {
    super.initState();
    _videoPlayerController = VideoPlayerController.asset(widget.rutaVideo);
    _videoPlayerController.initialize().then((_){
      setState((){
        _chewieController = ChewieController(
          videoPlayerController: _videoPlayerController,
          autoPlay: true,
          looping: false,
          materialProgressColors: ChewieProgressColors(
            playedColor: const Color.fromARGB(255, 240, 230, 185), // Color de la barra de progreso
            handleColor: const Color.fromARGB(255, 241, 189, 159), // Color del control de la barra de progreso
            bufferedColor: const Color.fromARGB(255, 200, 200, 200), // Color de la barra de buffer
          ),
        );
      });
    }).catchError((error){
      setState((){
        _huboError = true;
        _mensajeError = 'Error al cargar el video: \n$error';
      });
    });
  }

  @override
  void dispose() {
    _videoPlayerController.dispose();
    _chewieController?.dispose();
    super.dispose();
  }


  @override
  Widget build(BuildContext context){
    return Scaffold(
      backgroundColor: const Color(0xFF1C1C1E), // Color de fondo de la pantalla, gris oscuro carbon
      appBar: AppBar(
        title: Text(widget.tituloVideo),
        backgroundColor: const Color(0xFF1C1C1E), // Color de la barra de navegación, gris oscuro carbon
        foregroundColor: const Color(0xFFD9A542), // Color del texto y los iconos, AMARILLO DORADO
      ),
      body: Center(
        child: _huboError
        ? Padding(
          padding: const EdgeInsets.all(16.0),
          child: Text(
            _mensajeError,
            style: const TextStyle(color: Colors.red, fontSize: 16),
            textAlign: TextAlign.center,
          ),
        )
        : _chewieController != null && _chewieController!.videoPlayerController.value.isInitialized
          ? Chewie(controller: _chewieController!)
          : const CircularProgressIndicator(
            valueColor: AlwaysStoppedAnimation<Color>(Color(0xFFD9A542)), // Color del indicador de carga, AMARILLO DORADO
          ),
      )
    );
  }

}