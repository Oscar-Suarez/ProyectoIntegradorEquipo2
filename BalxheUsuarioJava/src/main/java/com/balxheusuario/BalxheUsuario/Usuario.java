package com.balxheusuario.BalxheUsuario;

public class Usuario {
	//Valores o atributos
	int idUsuario;
	String nombreYApellido;
	String nombreUsuario; 
	int fechaNacimiento; 
	int telefono; 
	String correo; 
	String contrasenia;
		//Constructor
	public Usuario(int idUsuario, String nombreYApellido, String nombreUsuario, int fechaNacimiento, int telefono,
			String correo, String contrasenia) {
		
		this.idUsuario = idUsuario;
		this.nombreYApellido = nombreYApellido;
		this.nombreUsuario = nombreUsuario;
		this.fechaNacimiento = fechaNacimiento;
		this.telefono = telefono;
		this.correo = correo;
		this.contrasenia = contrasenia;
	}
	//Getters Setters
	public int getIdUsuario() {
		return idUsuario;
	}
	public void setIdUsuario(int idUsuario) {
		this.idUsuario = idUsuario;
	}
	public String getNombreYApellido() {
		return nombreYApellido;
	}
	public void setNombreYApellido(String nombreYApellido) {
		this.nombreYApellido = nombreYApellido;
	}
	public String getNombreUsuario() {
		return nombreUsuario;
	}
	public void setNombreUsuario(String nombreUsuario) {
		this.nombreUsuario = nombreUsuario;
	}
	public int getFechaNacimiento() {
		return fechaNacimiento;
	}
	public void setFechaNacimiento(int fechaNacimiento) {
		this.fechaNacimiento = fechaNacimiento;
	}
	public int getTelefono() {
		return telefono;
	}
	public void setTelefono(int telefono) {
		this.telefono = telefono;
	}
	public String getCorreo() {
		return correo;
	}
	public void setCorreo(String correo) {
		this.correo = correo;
	}
	public String getContrasenia() {
		return contrasenia;
	}
	public void setContrasenia(String contrasenia) {
		this.contrasenia = contrasenia;
	}
	//tostring
	@Override
	public String toString() {
		return "Usuario [idUsuario=" + idUsuario + ", nombreYApellido=" + nombreYApellido + ", nombreUsuario="
				+ nombreUsuario + ", fechaNacimiento=" + fechaNacimiento + ", telefono=" + telefono + ", correo="
				+ correo + ", contrasenia=" + contrasenia + "]";
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
}
