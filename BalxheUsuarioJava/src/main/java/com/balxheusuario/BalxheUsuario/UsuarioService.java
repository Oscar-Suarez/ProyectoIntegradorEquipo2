package com.balxheusuario.BalxheUsuario;

import java.util.List;

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
		// TODO Auto-generated method stub
		return usuarioRepository.findAll();
	}
	public Usuario getUsuario(Long idUsuario) {

        return null;
    }
	public void deleteUsuario(Long idUsuario) {
		// TODO Auto-generated method stub
		
	}
	public void addUsuario(Usuario usuario) {
		// TODO Auto-generated method stub
		
	}
	
	
	
}
