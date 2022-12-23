-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema BalxheBD
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema BalxheBD
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `BalxheBD` ;
USE `BalxheBD` ;

-- -----------------------------------------------------
-- Table `BalxheBD`.`compania`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BalxheBD`.`compania` (
  `idCompania` INT NOT NULL AUTO_INCREMENT,
  `compania` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`idCompania`),
  UNIQUE INDEX `idCompania_UNIQUE` (`idCompania` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `BalxheBD`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BalxheBD`.`productos` (
  `idProducto` INT NOT NULL AUTO_INCREMENT,
  `nombreProducto` VARCHAR(50) NOT NULL,
  `precio` DECIMAL(6,2) NOT NULL,
  `descripcion` VARCHAR(200) NOT NULL,
  `volumen` INT NOT NULL,
  `gradosAlc` DECIMAL(4,2) NOT NULL,
  `tipo` VARCHAR(45) NOT NULL,
  `FK_idCompania` INT NOT NULL,
  PRIMARY KEY (`idProducto`),
  INDEX `fk_productos_compania_idx` (`FK_idCompania` ASC) VISIBLE,
  UNIQUE INDEX `idProducto_UNIQUE` (`idProducto` ASC) VISIBLE,
  CONSTRAINT `fk_productos_compania`
    FOREIGN KEY (`FK_idCompania`)
    REFERENCES `BalxheBD`.`compania` (`idCompania`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `BalxheBD`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BalxheBD`.`usuario` (
  `id_usuario` INT NOT NULL AUTO_INCREMENT,
  `nombreyapellido` VARCHAR(100) NOT NULL,
  `nombre_usuario` VARCHAR(45) NOT NULL,
  `fecha_nacimiento` INT NOT NULL,
  `telefono` INT NOT NULL,
  `correo` VARCHAR(60) NOT NULL,
  `contrasenia` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE INDEX `idUsuario_UNIQUE` (`id_usuario` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `BalxheBD`.`ordenes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BalxheBD`.`ordenes` (
  `idOrdenes` INT NOT NULL AUTO_INCREMENT,
  `fechaOrden` DATE NOT NULL,
  `fechaEntrega` DATE NOT NULL,
  `estadoPedido` VARCHAR(45) NOT NULL,
  `resumenOrden` VARCHAR(2000) NOT NULL,
  `infoPago` VARCHAR(2000) NOT NULL,
  `FK_idUsuario` INT NOT NULL,
  PRIMARY KEY (`idOrdenes`),
  INDEX `fk_ordenes_usuario1_idx` (`FK_idUsuario` ASC) VISIBLE,
  UNIQUE INDEX `idOrdenes_UNIQUE` (`idOrdenes` ASC) VISIBLE,
  CONSTRAINT `fk_ordenes_usuario1`
    FOREIGN KEY (`FK_idUsuario`)
    REFERENCES `BalxheBD`.`usuario` (`id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `BalxheBD`.`detallesOrden`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BalxheBD`.`detallesOrden` (
  `idDetallesOrden` INT NOT NULL AUTO_INCREMENT,
  `cantidadOrdenada` INT NOT NULL,
  `horaOrden` TIME NOT NULL,
  `FK_idProducto` INT NOT NULL,
  `FK_idOrdenes` INT NOT NULL,
  PRIMARY KEY (`idDetallesOrden`),
  INDEX `fk_detallesOrden_productos1_idx` (`FK_idProducto` ASC) VISIBLE,
  INDEX `fk_detallesOrden_ordenes1_idx` (`FK_idOrdenes` ASC) VISIBLE,
  UNIQUE INDEX `idDetallesOrden_UNIQUE` (`idDetallesOrden` ASC) VISIBLE,
  CONSTRAINT `fk_detallesOrden_productos1`
    FOREIGN KEY (`FK_idProducto`)
    REFERENCES `BalxheBD`.`productos` (`idProducto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_detallesOrden_ordenes1`
    FOREIGN KEY (`FK_idOrdenes`)
    REFERENCES `BalxheBD`.`ordenes` (`idOrdenes`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `BalxheBD`.`direccion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `BalxheBD`.`direccion` (
  `idDireccion` INT NOT NULL AUTO_INCREMENT,
  `calle` VARCHAR(100) NOT NULL,
  `colonia` VARCHAR(100) NOT NULL,
  `numInterior` VARCHAR(10) NOT NULL,
  `numExterior` VARCHAR(10) NOT NULL,
  `delegacionMunicipio` VARCHAR(100) NOT NULL,
  `codigoPostal` INT NOT NULL,
  `referencia(s)` VARCHAR(500) NOT NULL,
  `usuario_idUsuario` INT NOT NULL,
  PRIMARY KEY (`idDireccion`),
  INDEX `fk_direccion_usuario1_idx` (`usuario_idUsuario` ASC) VISIBLE,
  UNIQUE INDEX `idDireccion_UNIQUE` (`idDireccion` ASC) VISIBLE,
  CONSTRAINT `fk_direccion_usuario1`
    FOREIGN KEY (`usuario_idUsuario`)
    REFERENCES `BalxheBD`.`usuario` (`id_usuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
