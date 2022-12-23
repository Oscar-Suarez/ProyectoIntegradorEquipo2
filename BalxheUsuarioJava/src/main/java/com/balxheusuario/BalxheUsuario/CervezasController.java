package com.balxheusuario.BalxheUsuario;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping(path="/balxhe/Cervezas/")
public class CervezasController {

	private final CervezasService cervService;
	
@Autowired
	public CervezasController (CervezasService cervService) {
	this.cervService=cervService;
}

//Ahora Controller depende del service. Ya estan conectadas
@GetMapping
	public List<Cervezas> getCervezas(){
	return cervService.getCervezas();
}

//Metodo get para traer a solo 1 cerveza

@GetMapping (path="{CervezasId}")
public Cervezas getCervezas (@PathVariable ("CervezaId") int CervezaId) {
	return cervService.getCervezas(CervezaId);
}





















}
