-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: balxhebd
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `idProducto` int NOT NULL AUTO_INCREMENT,
  `nombreProducto` varchar(50) NOT NULL,
  `precio` decimal(6,2) NOT NULL,
  `descripcion` varchar(200) NOT NULL,
  `volumen` int NOT NULL,
  `gradosAlc` decimal(4,2) NOT NULL,
  `tipo` varchar(45) NOT NULL,
  `FK_idCompania` int NOT NULL,
  PRIMARY KEY (`idProducto`),
  UNIQUE KEY `idProducto_UNIQUE` (`idProducto`),
  KEY `fk_productos_compania_idx` (`FK_idCompania`),
  CONSTRAINT `fk_productos_compania` FOREIGN KEY (`FK_idCompania`) REFERENCES `compania` (`idCompania`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Barrilito',10.00,'Cerveza elaborada con materias primas de alta calidad, color dorado brillante y aroma suave.',325,3.40,'Pilsener',1),(2,'Corona Extra',12.00,'Cerveza clara orgullosamente de origen mexicana.',355,4.50,'Pilsener',1),(3,'Modelo Especial',12.00,'Cerveza color dorado brillante, un sabor dulce y bien equilibrado con lúpulos ligeros y un final fresco.',355,4.50,'Pilsener',1),(4,'Modelo Negra',14.00,'Cerveza oscura con sabor intenso y equilibrado, aroma a caramelo y malta tostada y un sabor con un final poco intenso por su selección de lúpulo.',355,5.30,'Lager Munich',1),(5,'Victoria',12.00,'. Esta cerveza ofrece un agradable aroma a maltas y lúpulo de la más alta calidad, color ámbar y consistente espuma. ',355,4.80,'Lager',1),(6,'Bohemia',15.00,'Es una cerveza dorada. Su producción es cuidadosa hasta el más mínimo detalle, hecha con lúpulo Styrian que contribuye en gran medida a su sabor y aroma.',355,4.70,'Pilsener',2),(7,'Heineken',18.00,'Cerveza clara fermentada en el fondo de tanques horizontales, lo que la hace mas clara, pura y durable. ',355,5.00,'Pale Lager',2),(8,'Indio',13.00,'Cerveza obscura estilo creada de la fusión de dos ingredientes, la malta dorada y caramelo tostado, dándole leves tonos de dulzor reduciendo los niveles de amargor.',355,4.10,'Lager Vienna',2),(9,'Sol',12.00,'Cerveza clara con exquisito aroma, poco amarga y refrescante.',355,4.20,'Lager',2),(10,'Tecate original',11.00,'Cerveza color dorado, caracterizada por un cuerpo robusto con un sabor balanceado',355,4.50,'Pilsener',2),(11,'Colonial',38.00,'Cerveza color amarillo pálido con aroma suave a malta y notas cítricas.',355,5.00,'Kölsch',3),(12,'IPA',40.00,'Cerveza de color dorado brillante. Te deleitará su pronunciado aroma frutal y frescos cítricos, su amargor dejará en la boca un sabor memorable.',355,6.50,'India Pale Ale',3),(13,'Pale Ale',38.00,'Cerveza color ámbar y sus lúpulos ingleses del estilo Kent Golding brindan un aroma y amargor en completo balance con sus maltas a caramelo.',355,6.00,'Pale Ale',3),(14,'Stout',40.00,'Esta cerveza de gran cuerpo y color negro profundo tiene un aroma y sabor a cacao y café gracias a su malta tostada.',355,6.00,'Stout',3),(15,'Viena',39.00,'Es una cerveza de fermentación baja y color rojizo, presenta un tenue y limpio aroma a nuez y caramelo.',355,5.00,'Vienna',3);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-20 16:15:44
