package com.balxheusuario.BalxheUsuario;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity//esta anotación nos dice que User.java es una entidad de una base de datos, y que sus datos persistiran
@Table(name="usuario") //especificia que la informacion se guardara en una tabla llamada "usuarios" dentro de mi BD

public class Usuario {
	@Id //Especifico que es mi llave primaria, y usando este @Id le digo que ese valor es lo que conectara a otras tablas
	//Anotaciones enfocadas a decirle a JAVA que esta clase es una entidad de mi BD

	@GeneratedValue(strategy = GenerationType.IDENTITY)//Indica que el valor de este atributo se genera de forma automatica, osea que cada que genere un dato se inserte en una nueva fila. El argumento "strategy" especifica como se genera se valor, cuando susamos el "Generation.Identity" le decimos que el valos se va a agregar mediante una secuencia (el valor autoincrementable de la BD)
	
	@Column(name="idUsuario", unique=true, nullable=false)
	Long idUsuario;
	@Column(name="nombreYApellido", nullable=false)
	String nombreYApellido;
	@Column(name="nombreUsuario", nullable=false)
	String nombreUsuario; 
	@Column(name="fechaNacimiento", nullable=false)
	int fechaNacimiento; 
	@Column(name="telefono", nullable=false)
	int telefono; 
	@Column(name="correo", nullable=false)
	String correo; 
	@Column(name="contrasenia", nullable=false)
	String contrasenia;
	
		//Constructor
	public Usuario(Long idUsuario, String nombreYApellido, String nombreUsuario, int fechaNacimiento, int telefono,String correo, String contrasenia) {
		
		this.idUsuario = idUsuario;
		this.nombreYApellido = nombreYApellido;
		this.nombreUsuario = nombreUsuario;
		this.fechaNacimiento = fechaNacimiento;
		this.telefono = telefono;
		this.correo = correo;
		this.contrasenia = contrasenia;
	}
	
	public Usuario() {
	}
	
	//Getters Setters
	public Long getIdUsuario() {
		return idUsuario;
	}
	public void setIdUsuario(Long idUsuario) {
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
