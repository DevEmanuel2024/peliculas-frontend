-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-03-2026 a las 04:18:11
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `gestion_proyectos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `costo`
--

CREATE TABLE `costo` (
  `IdGasto` int(11) NOT NULL,
  `id_proyecto` varchar(20) NOT NULL,
  `Fecha` date NOT NULL,
  `Tipo` varchar(50) DEFAULT NULL,
  `Descripcion` varchar(100) DEFAULT NULL,
  `Valor` decimal(12,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `costo`
--

INSERT INTO `costo` (`IdGasto`, `id_proyecto`, `Fecha`, `Tipo`, `Descripcion`, `Valor`) VALUES
(1, 'PROY-001', '2024-01-15', 'Licencias', 'Licencia Jira anual', 1200000.00),
(1, 'PROY-002', '2024-02-10', 'Capacitación', 'Curso de Node.js', 600000.00),
(1, 'PROY-003', '2024-01-25', 'Infraestructura', 'Servidor local', 12000000.00),
(1, 'PROY-004', '2023-08-10', 'Licencias', 'Power BI Premium', 800000.00),
(1, 'PROY-005', '2024-03-05', 'Hardware', 'Equipos de grabación', 3500000.00),
(1, 'PROY-006', '2024-04-01', 'Servicios', 'API de IA para chatbot', 1800000.00),
(2, 'PROY-001', '2024-01-20', 'Hardware', 'Compra de laptops', 8000000.00),
(2, 'PROY-002', '2024-02-15', 'Software', 'Licencia Adobe XD', 450000.00),
(2, 'PROY-003', '2024-02-20', 'Servicios', 'Consultoría de seguridad', 2500000.00),
(3, 'PROY-001', '2024-02-05', 'Servicios', 'Hosting servidor cloud', 950000.00);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleado`
--

CREATE TABLE `empleado` (
  `IdEmpleado` int(11) NOT NULL,
  `DocumentoIdentidad` varchar(20) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `Direccion` varchar(100) DEFAULT NULL,
  `Telefono` varchar(20) DEFAULT NULL,
  `TituloProfesional` varchar(100) DEFAULT NULL,
  `AnosExperiencia` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `empleado`
--

INSERT INTO `empleado` (`IdEmpleado`, `DocumentoIdentidad`, `Nombre`, `Direccion`, `Telefono`, `TituloProfesional`, `AnosExperiencia`) VALUES
(1, '1001234567', 'Emanuel Lenis', 'Cra 50 #30-10, Medellín', '350459023', 'Ingeniero de Sistemas', 5),
(2, '1002345678', 'Alejandro Lenis', 'Cl 80 #15-20, Medellín', '3012223344', 'Desarrollador Full Stack', 3),
(3, '1003456789', 'Juan David Ospina', 'Av 4N #22-30, Cali', '3023334455', 'Arquitecto de Software', 8),
(4, '1004567890', 'María Fernanda Torres', 'Cra 43 #5-10, Barranquilla', '3034445566', 'Analista de Datos', 4),
(5, '1005678901', 'Andrés Felipe Zapata', 'Cl 100 #30-50, Bogotá', '3045556677', 'DevOps Engineer', 6),
(6, '1006789012', 'Valentina Cárdenas', 'Cra 70 #60-10, Medellín', '3056667788', 'QA Engineer', 2),
(7, '1007890123', 'Sebastián Morales', 'Cra 15 #90-20, Bogotá', '3067778899', 'Desarrollador Backend', 4),
(8, '1008901234', 'Camila Herrera', 'Cl 55 #8-30, Pereira', '3078889900', 'Diseñadora UX/UI', 3),
(9, '1009012345', 'Diego Alejandro Ruiz', 'Cra 5 #12-10, Cartagena', '3089990011', 'Desarrollador Mobile', 5),
(10, '1010123456', 'Natalia Vargas', 'Av Las Américas, Manizales', '3090001122', 'Scrum Master', 7),
(11, '', 'Carmen', 'calle 9 ', '320707789', 'Derecho', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empresa`
--

CREATE TABLE `empresa` (
  `NIT` varchar(20) NOT NULL,
  `RazonSocial` varchar(100) NOT NULL,
  `Direccion` varchar(100) DEFAULT NULL,
  `Ciudad` varchar(50) DEFAULT NULL,
  `Telefono` varchar(20) DEFAULT NULL,
  `CorreoElectronico` varchar(100) DEFAULT NULL,
  `Codigo` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `empresa`
--

INSERT INTO `empresa` (`NIT`, `RazonSocial`, `Direccion`, `Ciudad`, `Telefono`, `CorreoElectronico`, `Codigo`) VALUES
('900111001-1', 'TechSolutions S.A.S', 'Cra 45 #80-20', 'Medellín', '6042201100', 'info@techsolutions.co', 'EMP-001'),
('900222002-2', 'Innovasoft Ltda', 'Cl 72 #15-30', 'Bogotá', '6013201200', 'contacto@innovasoft.co', 'EMP-002'),
('900333003-3', 'DataBridge Corp', 'Av 30 #55-10', 'Cali', '6023101300', 'hello@databridge.co', 'EMP-003'),
('900444004-4', 'CodeFactory S.A', 'Cra 10 #20-05', 'Barranquilla', '6053201400', 'ventas@codefactory.co', 'EMP-004'),
('900555005-5', 'CloudMinds S.A.S', 'Cl 100 #9-61', 'Bogotá', '6013301500', 'ops@cloudminds.co', 'EMP-005'),
('900666006-6', 'NexusTech Ltda', 'Cra 70 #45-30', 'Medellín', '6044101600', 'nexus@nexustech.co', 'EMP-006'),
('900777007-7', 'Sistemas Ágiles S.A', 'Cl 50 #8-30', 'Pereira', '6063201700', 'info@sistemasagiles.co', 'EMP-007'),
('900888008-8', 'DigitalWave Corp', 'Cra 5 #10-22', 'Cartagena', '6053101800', 'dw@digitalwave.co', 'EMP-008'),
('900999009-9', 'Algotech S.A.S', 'Av Las Américas 40', 'Manizales', '6063401900', 'algotech@algotech.co', 'EMP-009'),
('901000010-0', 'SoftColombia Ltda', 'Cl 30 #25-15', 'Bucaramanga', '6073202000', 'sc@softcolombia.co', 'EMP-010');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `entregable`
--

CREATE TABLE `entregable` (
  `NumeroFase` int(11) NOT NULL,
  `id_proyecto` varchar(20) NOT NULL,
  `id_empleado` int(11) NOT NULL,
  `Nombre` varchar(100) DEFAULT NULL,
  `Estado` varchar(50) DEFAULT NULL,
  `Descripcion` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `entregable`
--

INSERT INTO `entregable` (`NumeroFase`, `id_proyecto`, `id_empleado`, `Nombre`, `Estado`, `Descripcion`) VALUES
(1, 'PROY-001', 1, 'Documento de requisitos', 'Entregado', 'Requisitos funcionales'),
(1, 'PROY-002', 4, 'Análisis de requerimientos', 'Entregado', 'Requerimientos del sistema'),
(1, 'PROY-003', 2, 'Documento de alcance', 'Entregado', 'Acta de inicio del proyecto'),
(1, 'PROY-004', 4, 'Modelo dimensional', 'Entregado', 'Star schema para BI'),
(1, 'PROY-005', 10, 'Plan de contenidos', 'Entregado', 'Malla curricular de cursos'),
(2, 'PROY-001', 3, 'Diagrama de arquitectura', 'Entregado', 'Diagrama C4 del sistema'),
(2, 'PROY-002', 8, 'Wireframes App Móvil', 'En revisión', 'Pantallas del flujo de usuario'),
(2, 'PROY-003', 7, 'Componentes React', 'En desarrollo', 'Librería de componentes UI'),
(2, 'PROY-005', 9, 'Módulo de usuarios LMS', 'En desarrollo', 'Gestión de estudiantes'),
(3, 'PROY-001', 2, 'Módulo de autenticación', 'En desarrollo', 'Login con JWT');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fase`
--

CREATE TABLE `fase` (
  `NumeroFase` int(11) NOT NULL,
  `id_proyecto` varchar(20) NOT NULL,
  `Nombre` varchar(100) DEFAULT NULL,
  `FechaInicio` date DEFAULT NULL,
  `FechaFin` date DEFAULT NULL,
  `Estado` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `fase`
--

INSERT INTO `fase` (`NumeroFase`, `id_proyecto`, `Nombre`, `FechaInicio`, `FechaFin`, `Estado`) VALUES
(1, 'PROY-001', 'Levantamiento de requisitos', '2024-01-10', '2024-01-31', 'Completada'),
(1, 'PROY-002', 'Análisis de requerimientos', '2024-02-01', '2024-02-20', 'Completada'),
(1, 'PROY-003', 'Definición del alcance', '2024-01-20', '2024-02-10', 'Completada'),
(1, 'PROY-004', 'Modelado de datos', '2023-08-01', '2023-09-30', 'Completada'),
(1, 'PROY-005', 'Análisis pedagógico', '2024-03-01', '2024-03-31', 'Completada'),
(2, 'PROY-001', 'Diseño de arquitectura', '2024-02-01', '2024-02-28', 'Completada'),
(2, 'PROY-002', 'Diseño UI/UX', '2024-02-21', '2024-03-20', 'En progreso'),
(2, 'PROY-003', 'Desarrollo frontend', '2024-02-11', '2024-04-30', 'En progreso'),
(2, 'PROY-005', 'Desarrollo de módulos', '2024-04-01', '2024-07-31', 'En progreso'),
(3, 'PROY-001', 'Desarrollo backend', '2024-03-01', '2024-05-31', 'En progreso');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lenguaje`
--

CREATE TABLE `lenguaje` (
  `NombreLenguaje` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `lenguaje`
--

INSERT INTO `lenguaje` (`NombreLenguaje`) VALUES
('C#'),
('Go'),
('Java'),
('JavaScript'),
('Kotlin'),
('PHP'),
('Python'),
('SQL'),
('Swift'),
('TypeScript');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `manejo_lenguaje`
--

CREATE TABLE `manejo_lenguaje` (
  `IdEmpleado` int(11) NOT NULL,
  `NombreLenguaje` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `manejo_lenguaje`
--

INSERT INTO `manejo_lenguaje` (`IdEmpleado`, `NombreLenguaje`) VALUES
(1, 'JavaScript'),
(1, 'SQL'),
(2, 'JavaScript'),
(2, 'TypeScript'),
(3, 'Java'),
(4, 'Python'),
(4, 'SQL'),
(5, 'Python'),
(6, 'JavaScript'),
(7, 'C#');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `participacion`
--

CREATE TABLE `participacion` (
  `CodigoProyecto` varchar(20) NOT NULL,
  `IdEmpleado` int(11) NOT NULL,
  `Rol` varchar(50) DEFAULT NULL,
  `HorasAsignadas` decimal(8,2) DEFAULT NULL,
  `CostoHora` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `participacion`
--

INSERT INTO `participacion` (`CodigoProyecto`, `IdEmpleado`, `Rol`, `HorasAsignadas`, `CostoHora`) VALUES
('PROY-001', 1, 'Líder técnico', 160.00, 75000.00),
('PROY-001', 2, 'Desarrollador senior', 200.00, 60000.00),
('PROY-002', 3, 'Arquitecto', 120.00, 90000.00),
('PROY-002', 4, 'Analista de datos', 140.00, 55000.00),
('PROY-003', 5, 'DevOps', 100.00, 70000.00),
('PROY-003', 6, 'QA Tester', 180.00, 45000.00),
('PROY-004', 7, 'Desarrollador backend', 200.00, 58000.00),
('PROY-005', 8, 'Diseñador UX/UI', 160.00, 52000.00),
('PROY-006', 9, 'Desarrollador mobile', 220.00, 62000.00),
('PROY-007', 10, 'Scrum Master', 180.00, 80000.00);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyecto`
--

CREATE TABLE `proyecto` (
  `CodigoProyecto` varchar(20) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `Descripcion` varchar(100) DEFAULT NULL,
  `Estado` varchar(50) DEFAULT NULL,
  `FechaInicio` date DEFAULT NULL,
  `FechaEstimadaFinalizacion` date DEFAULT NULL,
  `PresupuestoAprobado` decimal(15,2) DEFAULT NULL,
  `NIT_Empresa` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `proyecto`
--

INSERT INTO `proyecto` (`CodigoProyecto`, `Nombre`, `Descripcion`, `Estado`, `FechaInicio`, `FechaEstimadaFinalizacion`, `PresupuestoAprobado`, `NIT_Empresa`) VALUES
('PROY-001', 'Sistema de Nómina', 'Automatización de nómina', 'En progreso', '2024-01-10', '2024-07-10', 45000000.00, '900111001-1'),
('PROY-002', 'App Móvil Inventario', 'App para control de inventario', 'Planeación', '2024-02-01', '2024-09-01', 30000000.00, '900222002-2'),
('PROY-003', 'Portal Web Clientes', 'Portal self-service clientes', 'En progreso', '2024-01-20', '2024-06-20', 22000000.00, '900333003-3'),
('PROY-004', 'BI Dashboard Ventas', 'Tablero de inteligencia de negocios', 'Completado', '2023-08-01', '2024-01-15', 18000000.00, '900444004-4'),
('PROY-005', 'Plataforma E-learning', 'LMS para capacitación interna', 'En progreso', '2024-03-01', '2024-11-30', 55000000.00, '900555005-5'),
('PROY-006', 'Chatbot Atención', 'Bot de atención al cliente', 'Completado', '2024-04-01', '2024-08-31', 15000000.00, '900666006-6'),
('PROY-007', 'ERP Manufactura', 'Sistema de planificación', 'En progreso', '2023-11-01', '2024-12-01', 90000000.00, '900777007-7'),
('PROY-008', 'API de Pagos', 'Integración pasarelas de pago', 'Completado', '2023-09-01', '2024-01-30', 12000000.00, '900888008-8'),
('PROY-009', 'Red IoT Industrial', 'Monitoreo de maquinaria', 'Planeación', '2024-05-01', '2025-01-31', 70000000.00, '900999009-9'),
('PROY-010', 'Sistema de PQRS', 'Gestión de peticiones', 'En progreso', '2024-02-15', '2024-08-15', 20000000.00, '901000010-0');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recurso`
--

CREATE TABLE `recurso` (
  `IdRegistro` int(11) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `Tipo` varchar(50) DEFAULT NULL,
  `Descripcion` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `recurso`
--

INSERT INTO `recurso` (`IdRegistro`, `Nombre`, `Tipo`, `Descripcion`) VALUES
(1, 'Laptop Dell XPS 15', 'Hardware', 'Equipo de desarrollo'),
(2, 'Servidor AWS EC2', 'Cloud', 'Instancia en la nube'),
(3, 'Licencia Jira', 'Software', 'Gestión de proyectos'),
(4, 'Adobe XD', 'Software', 'Diseño UI/UX'),
(5, 'Base de datos RDS MySQL', 'Cloud', 'BD en la nube'),
(6, 'Monitor 27 4K', 'Hardware', 'Monitor alta resolución'),
(7, 'GitHub Enterprise', 'Software', 'Control de versiones'),
(8, 'Slack Premium', 'Software', 'Comunicación de equipos'),
(9, 'Postman Pro', 'Software', 'Pruebas de API'),
(10, 'UPS APC 1500VA', 'Hardware', 'Respaldo de energía');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `uso_recurso`
--

CREATE TABLE `uso_recurso` (
  `NumeroFase` int(11) NOT NULL,
  `id_proyecto` varchar(20) NOT NULL,
  `IdRegistro` int(11) NOT NULL,
  `FechaInicioUso` date DEFAULT NULL,
  `FechaFinUso` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `uso_recurso`
--

INSERT INTO `uso_recurso` (`NumeroFase`, `id_proyecto`, `IdRegistro`, `FechaInicioUso`, `FechaFinUso`) VALUES
(1, 'PROY-001', 1, '2024-01-10', '2024-07-10'),
(1, 'PROY-001', 2, '2024-01-10', '2024-07-10'),
(1, 'PROY-003', 8, '2024-01-20', '2024-06-20'),
(1, 'PROY-005', 1, '2024-03-01', '2024-07-31'),
(2, 'PROY-001', 3, '2024-02-01', '2024-06-30'),
(2, 'PROY-002', 4, '2024-02-21', '2024-04-30'),
(2, 'PROY-002', 6, '2024-02-21', '2024-03-31'),
(2, 'PROY-005', 2, '2024-04-01', '2024-07-31'),
(3, 'PROY-001', 7, '2024-02-01', '2024-04-30'),
(3, 'PROY-001', 9, '2024-02-01', '2024-05-31');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `costo`
--
ALTER TABLE `costo`
  ADD PRIMARY KEY (`IdGasto`,`id_proyecto`),
  ADD KEY `FK_Costo_Proyecto` (`id_proyecto`);

--
-- Indices de la tabla `empleado`
--
ALTER TABLE `empleado`
  ADD PRIMARY KEY (`IdEmpleado`),
  ADD UNIQUE KEY `DocumentoIdentidad` (`DocumentoIdentidad`);

--
-- Indices de la tabla `empresa`
--
ALTER TABLE `empresa`
  ADD PRIMARY KEY (`NIT`);

--
-- Indices de la tabla `entregable`
--
ALTER TABLE `entregable`
  ADD PRIMARY KEY (`NumeroFase`,`id_proyecto`,`id_empleado`),
  ADD KEY `FK_Entregable_Empleado` (`id_empleado`);

--
-- Indices de la tabla `fase`
--
ALTER TABLE `fase`
  ADD PRIMARY KEY (`NumeroFase`,`id_proyecto`),
  ADD KEY `FK_Fase_Proyecto` (`id_proyecto`);

--
-- Indices de la tabla `lenguaje`
--
ALTER TABLE `lenguaje`
  ADD PRIMARY KEY (`NombreLenguaje`);

--
-- Indices de la tabla `manejo_lenguaje`
--
ALTER TABLE `manejo_lenguaje`
  ADD PRIMARY KEY (`IdEmpleado`,`NombreLenguaje`),
  ADD KEY `FK_ML_Lenguaje` (`NombreLenguaje`);

--
-- Indices de la tabla `participacion`
--
ALTER TABLE `participacion`
  ADD PRIMARY KEY (`CodigoProyecto`,`IdEmpleado`),
  ADD KEY `FK_Participacion_Empleado` (`IdEmpleado`);

--
-- Indices de la tabla `proyecto`
--
ALTER TABLE `proyecto`
  ADD PRIMARY KEY (`CodigoProyecto`),
  ADD KEY `FK_Proyecto_Empresa` (`NIT_Empresa`);

--
-- Indices de la tabla `recurso`
--
ALTER TABLE `recurso`
  ADD PRIMARY KEY (`IdRegistro`);

--
-- Indices de la tabla `uso_recurso`
--
ALTER TABLE `uso_recurso`
  ADD PRIMARY KEY (`NumeroFase`,`id_proyecto`,`IdRegistro`),
  ADD KEY `FK_UR_Recurso` (`IdRegistro`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `empleado`
--
ALTER TABLE `empleado`
  MODIFY `IdEmpleado` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `recurso`
--
ALTER TABLE `recurso`
  MODIFY `IdRegistro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `costo`
--
ALTER TABLE `costo`
  ADD CONSTRAINT `FK_Costo_Proyecto` FOREIGN KEY (`id_proyecto`) REFERENCES `proyecto` (`CodigoProyecto`);

--
-- Filtros para la tabla `entregable`
--
ALTER TABLE `entregable`
  ADD CONSTRAINT `FK_Entregable_Empleado` FOREIGN KEY (`id_empleado`) REFERENCES `empleado` (`IdEmpleado`),
  ADD CONSTRAINT `FK_Entregable_Fase` FOREIGN KEY (`NumeroFase`,`id_proyecto`) REFERENCES `fase` (`NumeroFase`, `id_proyecto`);

--
-- Filtros para la tabla `fase`
--
ALTER TABLE `fase`
  ADD CONSTRAINT `FK_Fase_Proyecto` FOREIGN KEY (`id_proyecto`) REFERENCES `proyecto` (`CodigoProyecto`);

--
-- Filtros para la tabla `manejo_lenguaje`
--
ALTER TABLE `manejo_lenguaje`
  ADD CONSTRAINT `FK_ML_Empleado` FOREIGN KEY (`IdEmpleado`) REFERENCES `empleado` (`IdEmpleado`),
  ADD CONSTRAINT `FK_ML_Lenguaje` FOREIGN KEY (`NombreLenguaje`) REFERENCES `lenguaje` (`NombreLenguaje`);

--
-- Filtros para la tabla `participacion`
--
ALTER TABLE `participacion`
  ADD CONSTRAINT `FK_Participacion_Empleado` FOREIGN KEY (`IdEmpleado`) REFERENCES `empleado` (`IdEmpleado`),
  ADD CONSTRAINT `FK_Participacion_Proyecto` FOREIGN KEY (`CodigoProyecto`) REFERENCES `proyecto` (`CodigoProyecto`);

--
-- Filtros para la tabla `proyecto`
--
ALTER TABLE `proyecto`
  ADD CONSTRAINT `FK_Proyecto_Empresa` FOREIGN KEY (`NIT_Empresa`) REFERENCES `empresa` (`NIT`);

--
-- Filtros para la tabla `uso_recurso`
--
ALTER TABLE `uso_recurso`
  ADD CONSTRAINT `FK_UR_Fase` FOREIGN KEY (`NumeroFase`,`id_proyecto`) REFERENCES `fase` (`NumeroFase`, `id_proyecto`),
  ADD CONSTRAINT `FK_UR_Recurso` FOREIGN KEY (`IdRegistro`) REFERENCES `recurso` (`IdRegistro`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
