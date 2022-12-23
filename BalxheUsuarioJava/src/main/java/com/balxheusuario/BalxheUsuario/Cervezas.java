package com.balxheusuario.BalxheUsuario;

public class Cervezas {

	
	//Atributos
	String cervezaNombre;
	String cervezainfo;
	int cervezaStock;
	int cervezaPrecio;
	String cervezaImg;
	
	//Atributos para el id autoincrementable
	private int id;
	private static int total=0;
	
	//Metodos para imprimir el id de la cerveza
			public void imprimirid() {
				System.out.println();
	}
	//Metodos
			public void imprimirinfo() {
				System.out.println("Cerveza Nombre" + this.cervezaNombre);
				System.out.println("Cerveza Información" + this.cervezainfo);
				System.out.println("Cerveza en Stock" + this.cervezaStock);
				System.out.println("Cerveza Precio" + this.cervezaPrecio);
				System.out.println("Cerveza Imagen" + this.cervezaImg);	
			}
			
			//Constructor

	public Cervezas(String cervezaNombre, String cervezainfo, int cervezaStock, int cervezaPrecio, String cervezaImg) {
		total++;
		this.id=total;
		this.cervezaNombre = cervezaNombre;
		this.cervezainfo = cervezainfo;
		this.cervezaStock = cervezaStock;
		this.cervezaPrecio = cervezaPrecio;
		this.cervezaImg = cervezaImg;
	}
	//contructor solo para el id
	public Cervezas() {
		total++;
		this.id=total;
	}
	//Getters y Setters
	public String getCervezaNombre() {
		return cervezaNombre;
	}
	public void setCervezaNombre(String cervezaNombre) {
		this.cervezaNombre = cervezaNombre;
	}
	public String getCervezainfo() {
		return cervezainfo;
	}
	public void setCervezainfo(String cervezainfo) {
		this.cervezainfo = cervezainfo;
	}
	public int getCervezaStock() {
		return cervezaStock;
	}
	public void setCervezaStock(int cervezaStock) {
		this.cervezaStock = cervezaStock;
	}
	public int getCervezaPrecio() {
		return cervezaPrecio;
	}
	public void setCervezaPrecio(int cervezaPrecio) {
		this.cervezaPrecio = cervezaPrecio;
	}
	public String getCervezaImg() {
		return cervezaImg;
	}
	public void setCervezaImg(String cervezaImg) {
		this.cervezaImg = cervezaImg;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	//To String
	@Override
	public String toString() {
		return "Cervezas [cervezaNombre=" + cervezaNombre + ", cervezainfo=" + cervezainfo + ", cervezaStock="
				+ cervezaStock + ", cervezaPrecio=" + cervezaPrecio + ", cervezaImg=" + cervezaImg + ", id=" + id + "]";
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
