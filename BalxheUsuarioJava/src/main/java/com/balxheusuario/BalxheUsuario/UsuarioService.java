package com.balxheusuario.BalxheUsuario;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class UsuarioService {
	
	private UsuarioRepository usuarioRepository;
	
	@Autowired
	public UsuarioService(UsuarioRepository usuarioRepository) {
		this.usuarioRepository=usuarioRepository;
	}
	
	

	public List<Usuario> getUsuarios() {
		return usuarioRepository.findAll();
		
	}
	// Metodo GET para un usuario por id

	public Usuario getUsuario(Long idUsuario) {

		return usuarioRepository.findById(idUsuario)
				.orElseThrow(() -> new IllegalStateException("El usuario con el id solicitado no existe"));
	}
	
	
	
	//Metodo POST para agregar un usuario
	public void addUsuario(Usuario user) { //guardando entidades del tipo usuario
		Optional<Usuario> userByName = usuarioRepository.findByUsername(user.getNombreUsuario());//sacando el valor de mi BD y lo pongo en una variable temporal (como en el foreach)
		if (userByName.isPresent()) { //evaluo si ese dato que esta en esa variable existe en mi BD
			throw new IllegalStateException("El usuario con el nombre que escribiste ya existe");
		}
		usuarioRepository.save(user);}


	//Metodo UPDATE para actualizar contrasenias de usuarios
	public void updateUsuario(Long idUsuario, String contraseniaActual, String nuevaContrasenia) {
		//primero evaluo si mi usuario existe
		if(!usuarioRepository.existsById(idUsuario)) {
			//si no existe, arroja una excepcion
			throw new IllegalStateException("El usuario no existe");
		}
			//cuando el existsById arroja un true (que si existe en la BD), saco el valor y lo pongo en una variable temporal llamada user
			Usuario user = usuarioRepository.getById(idUsuario); //esta es la variable
			//despues que las dos contrasenias no sean nulas
			if(nuevaContrasenia == null || contraseniaActual == null) {
				//si son nulas, mando mi excepcion
				throw new IllegalStateException("Constrasenias nulas");
			}
			//evaluo que las contrasenias no sean iguales (que la nueva no sea igual a la anterior)
			if (contraseniaActual.equals(user.getContrasenia())) {
				//si las constrasenias son diferentes
				if (!nuevaContrasenia.equals(user.getContrasenia())) {
					//seteo o actualizo con el setter la nueva contrasenia
					user.setContrasenia(nuevaContrasenia);
					//guardo al usuario en su BD con la nueva contrasenia
					usuarioRepository.save(user);
				}else {
					throw new IllegalStateException("La nueva contrasenia es igual a la actual");
				}
			}else {
				throw new IllegalStateException("Contrasea actual incorrecta");
		}
	}
	
	
	
}
