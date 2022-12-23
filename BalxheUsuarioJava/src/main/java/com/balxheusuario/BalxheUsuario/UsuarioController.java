package com.balxheusuario.BalxheUsuario;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path= "/api/usuarios/")
@CrossOrigin(origins = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE })

public class UsuarioController{

	
		//constante para utilizar el autowied (para crear una instanncia del tipo usuario aqui dentro y reconocer todos los metodos que implemente la union de user+serviceUser)
		private final UsuarioService usuarioService;
		@Autowired
		public UsuarioController(UsuarioService usuarioService) {
			this.usuarioService= usuarioService;
		}
		
		//Get para traer todos los usuarios
		//Get mapping
		@GetMapping
		public List<Usuario> getUsuarios(){
			return usuarioService.getUsuarios();
		}//getUsuarios

		@GetMapping(path="{idUsuario}")
		public Usuario getUsuario(@PathVariable ("idUsuario") Long idUsuario) {
			return usuarioService.getUsuario(idUsuario);
		}
		
		//POST Mapping
		@PostMapping
		public void postUsuario(@RequestBody Usuario usuario) {
			usuarioService.addUsuario(usuario);
		}//postUsuario

		//METODO PUT mapping

		@PutMapping(path="{userId}")
		public void updateUsuario (@PathVariable ("userId") Long idUsuario,
				@RequestParam String contraseniaActual,
				@RequestParam String nuevaContrasenia) {	
			usuarioService.updateUsuario(idUsuario, contraseniaActual, nuevaContrasenia);
		}


	
	
	}
	

