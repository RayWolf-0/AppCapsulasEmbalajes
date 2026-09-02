/**
 * Catálogo completo de Cápsulas de Video y Manuales de Embalaje Mamut
 */

export const CATEGORIES = [
  {
    id: 'embalador',
    name: 'Embalador',
    slug: 'Embalador',
    icon: 'Package',
    color: '#D9A542',
    description: 'Guías operativas esenciales para el proceso de embalaje de Órdenes de Entrega (OE).',
    totalItems: 9
  },
  {
    id: 'supervisor',
    name: 'Supervisor',
    slug: 'Supervisor',
    icon: 'ShieldCheck',
    color: '#3B82F6',
    description: 'Herramientas de asignación, clonación, monitoreo y gestión de mesones.',
    totalItems: 6
  },
  {
    id: 'errores',
    name: 'Errores',
    slug: 'Errores',
    icon: 'AlertTriangle',
    color: '#EF4444',
    description: 'Resolución de problemas frecuentes al trabajar, ver o cerrar una OE.',
    totalItems: 3
  },
  {
    id: 'embalador_privilegios',
    name: 'Embalador Privilegios',
    slug: 'Embalador Privilegios',
    icon: 'KeyRound',
    color: '#10B981',
    description: 'Acciones avanzadas de cierre, trabajo y pausa con privilegios especiales.',
    totalItems: 3
  }
];

export const MANUALS = [
  {
    id: 'manual_embalador',
    title: 'Manual de Embalador',
    category: 'Manuales',
    file: '/Capsulas/assets/Documentos/ManualEmbalador.pdf',
    icon: 'FileText',
    badge: 'PDF',
    description: 'Documentación completa paso a paso para el rol de Embalador en bodega.',
    size: '968 KB'
  },
  {
    id: 'manual_supervisor',
    title: 'Manual de Supervisor',
    category: 'Manuales',
    file: '/Capsulas/assets/Documentos/ManualSupervisor.pdf',
    icon: 'BookOpen',
    badge: 'PDF',
    description: 'Guía de procedimientos, supervisión de mesones y flujos de control.',
    size: '721 KB'
  }
];

export const CAPSULES_DATA = {
  'Embalador': [
    {
      id: 'emb-1',
      title: 'Trabajar en la OE',
      categoria: 'Embalador',
      ruta: '/Capsulas/assets/videos/CapsulasEmbalador/Trabajarunaoe.webm',
      formato: 'webm',
      descripcion: 'Flujo detallado para iniciar y registrar el trabajo sobre una Orden de Entrega asignada.'
    },
    {
      id: 'emb-2',
      title: 'Solicitar OE',
      categoria: 'Embalador',
      ruta: '/Capsulas/assets/videos/CapsulasEmbalador/Solicitaroe.mp4',
      formato: 'mp4',
      descripcion: 'Procedimiento estándar para solicitar una nueva OE cuando estés disponible en el mesón.'
    },
    {
      id: 'emb-3',
      title: 'Quitar Pausa',
      categoria: 'Embalador',
      ruta: '/Capsulas/assets/videos/CapsulasEmbalador/Quitarpausa.webm',
      formato: 'webm',
      descripcion: 'Cómo reanudar las actividades y el conteo de tiempo tras un período de pausa.'
    },
    {
      id: 'emb-4',
      title: 'Solicitar Pausa',
      categoria: 'Embalador',
      ruta: '/Capsulas/assets/videos/CapsulasEmbalador/Solicitarunapausa.webm',
      formato: 'webm',
      descripcion: 'Envío de solicitud formal de pausa al supervisor por motivos justificados.'
    },
    {
      id: 'emb-5',
      title: 'Solicitud Cierre',
      categoria: 'Embalador',
      ruta: '/Capsulas/assets/videos/CapsulasEmbalador/Solicitudcierre.webm',
      formato: 'webm',
      descripcion: 'Pasos para solicitar el cierre de una OE una vez finalizado el proceso de empaque.'
    },
    {
      id: 'emb-6',
      title: 'Tablero Resumen',
      categoria: 'Embalador',
      ruta: '/Capsulas/assets/videos/CapsulasEmbalador/Tableroresumen.webm',
      formato: 'webm',
      descripcion: 'Interpretación de métricas, pedidos en cola y estado en el tablero resumen.'
    },
    {
      id: 'emb-7',
      title: 'Tarjeta OE',
      categoria: 'Embalador',
      ruta: '/Capsulas/assets/videos/CapsulasEmbalador/Tarjetaoe.webm',
      formato: 'webm',
      descripcion: 'Lectura de datos de la tarjeta de la OE: ítems, bultos y especificaciones.'
    },
    {
      id: 'emb-8',
      title: 'Uso de Stop',
      categoria: 'Embalador',
      ruta: '/Capsulas/assets/videos/CapsulasEmbalador/Stop.webm',
      formato: 'webm',
      descripcion: 'Uso correcto del botón de emergencia o Stop ante discrepancias de stock o cajas.'
    },
    {
      id: 'emb-9',
      title: 'Guías de Embalaje',
      categoria: 'Embalador',
      ruta: '/Capsulas/assets/videos/CapsulasEmbalador/Visualizarguias.webm',
      formato: 'webm',
      descripcion: 'Visualización y validación de las guías de despacho y etiquetas de bulto.'
    }
  ],
  'Supervisor': [
    {
      id: 'sup-1',
      title: 'Asignar OE',
      categoria: 'Supervisor',
      ruta: '/Capsulas/assets/videos/CapsulasSupervisor/Asignarunaoe.webm',
      formato: 'webm',
      descripcion: 'Cómo asignar manualmente una OE prioritaria a un embalador o mesón específico.'
    },
    {
      id: 'sup-2',
      title: 'Asignar Mesón',
      categoria: 'Supervisor',
      ruta: '/Capsulas/assets/videos/CapsulasSupervisor/Asignarunmeson.webm',
      formato: 'webm',
      descripcion: 'Configuración y vinculación de puestos de trabajo físicos (mesones) a los operarios.'
    },
    {
      id: 'sup-3',
      title: 'Clonar OE',
      categoria: 'Supervisor',
      ruta: '/Capsulas/assets/videos/CapsulasSupervisor/Clonaroe.webm',
      formato: 'webm',
      descripcion: 'Proceso de clonación de OE en caso de división de carga o entregas parciales.'
    },
    {
      id: 'sup-4',
      title: 'Dar una Pausa',
      categoria: 'Supervisor',
      ruta: '/Capsulas/assets/videos/CapsulasSupervisor/Darunapausa.webm',
      formato: 'webm',
      descripcion: 'Aprobación y registro de pausas activas o descansos para los embaladores.'
    },
    {
      id: 'sup-5',
      title: 'OE con Solicitud de Cierre',
      categoria: 'Supervisor',
      ruta: '/Capsulas/assets/videos/CapsulasSupervisor/Oeconsolicituddecierre.webm',
      formato: 'webm',
      descripcion: 'Revisión y validación final de OEs que solicitaron cierre para liberar el mesón.'
    },
    {
      id: 'sup-6',
      title: 'Ver Monitor OE',
      categoria: 'Supervisor',
      ruta: '/Capsulas/assets/videos/CapsulasSupervisor/Vermonitoroe.webm',
      formato: 'webm',
      descripcion: 'Uso del monitor en vivo para visualizar el avance general de toda la bodega.'
    }
  ],
  'Errores': [
    {
      id: 'err-1',
      title: 'No ver OE asignada',
      categoria: 'Errores',
      ruta: '/Capsulas/assets/videos/CapsulasErrores/Error1.Nosepuedeverunaoeasignada.webm',
      formato: 'webm',
      descripcion: 'Solución cuando el embalador no visualiza la orden que el supervisor le asignó.'
    },
    {
      id: 'err-2',
      title: 'No cerrar OE',
      categoria: 'Errores',
      ruta: '/Capsulas/assets/videos/CapsulasErrores/Error2.Nosepuedecerrarunaoe.webm',
      formato: 'webm',
      descripcion: 'Diagnóstico y solución ante bloqueos al intentar cerrar una orden finalizada.'
    },
    {
      id: 'err-3',
      title: 'Sin Mesón al solicitar',
      categoria: 'Errores',
      ruta: '/Capsulas/assets/videos/CapsulasErrores/Error3.Sinmesonalsolicitaroe.webm',
      formato: 'webm',
      descripcion: 'Qué hacer cuando el sistema arroja el error de mesón no asignado al pedir OE.'
    }
  ],
  'Embalador Privilegios': [
    {
      id: 'priv-1',
      title: 'Cerrar una OE',
      categoria: 'Embalador Privilegios',
      ruta: '/Capsulas/assets/videos/CapsulasEmbaladorPrivilegios/Cerraroe.webm',
      formato: 'webm',
      descripcion: 'Cierre directo e inmediato de una orden sin requerir aprobación de supervisión.'
    },
    {
      id: 'priv-2',
      title: 'Trabajar en la OE',
      categoria: 'Embalador Privilegios',
      ruta: '/Capsulas/assets/videos/CapsulasEmbaladorPrivilegios/Trabajaroe.webm',
      formato: 'webm',
      descripcion: 'Edición y modificación de ítems de la orden durante la sesión de embalaje.'
    },
    {
      id: 'priv-3',
      title: 'Pausar una OE',
      categoria: 'Embalador Privilegios',
      ruta: '/Capsulas/assets/videos/CapsulasEmbaladorPrivilegios/Pausaroe.webm',
      formato: 'webm',
      descripcion: 'Pausa directa de emergencia sobre la OE con motivos especiales autorizados.'
    }
  ]
};

// Obtener lista aplanada con todas las cápsulas para búsqueda global
export const ALL_CAPSULES = Object.values(CAPSULES_DATA).flat();