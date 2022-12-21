package com.balxheusuario.BalxheUsuario;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


public class UsuarioController {
	@RestController
	@RequestMapping(path= "/api/usuarios/")
	public class usercontroller {
		//constante para utilizar el autowied (para crear una instanncia del tipo usuario aqui dentro y reconocer todos los metodos que implemente la union de user+serviceUser)
		private final UsuarioService usuarioService;
		@Autowired
		public usercontroller(UsuarioService usuarioService) {
			this.usuarioService= usuarioService;
		}
		
		//Get para traer todos los usuarios
		//Get mapping
		@GetMapping
		public List<Usuario> getUsuarios(){
			return usuarioService.getUsuarios();
		}//getUsuarios

		@GetMapping(path="{userId}")
		public Usuario getUsuario(@PathVariable ("idUsuario") Long idUsuario) {
			return usuarioService.getUsuario(idUsuario);
		}

		//DELETE Mapping
		@DeleteMapping
		public void deleteUsuario(@PathVariable ("idUsuario") Long idUsuario) {
			usuarioService.deleteUsuario(idUsuario);
		}//deleteUsuario
		
		//POST Mapping
		@PostMapping
		public void postUsuario(@RequestBody Usuario usuario) {
			usuarioService.addUsuario(usuario);
		}//postUsuario
/*
		//METODO PUT mapping
		@PutMapping(path="{idUsuario}")
		public void updateUsuario (@PathVariable ("idUsuario") Long idUsuario,
				@RequestParam String currencontrasenia,
				@RequestParam String nuevacontrasenia), {	
			    @RequestParam String nombreapellido), {	
				@RequestParam String nuevacontrasenia), {	
					@RequestParam String nuevacontrasenia), {	
			userService.updateUser(userId, currentPassword, newPassword);
		}//updateUsuario
*/
	
	
	}
	
}
