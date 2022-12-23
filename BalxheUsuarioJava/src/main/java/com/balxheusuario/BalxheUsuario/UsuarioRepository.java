package com.balxheusuario.BalxheUsuario;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;



public interface UsuarioRepository extends JpaRepository <Usuario , Long>{

	@Query("SELECT u FROM Usuario u WHERE u.nombreUsuario=?1")
	Optional <Usuario> findByUsername(String nombreUsuario);  
}
