package com.balxheusuario.BalxheUsuario;

import java.util.ArrayList;

import org.springframework.stereotype.Service;

@Service



public class CervezasService {
	public final ArrayList<Cervezas> lista= new ArrayList<Cervezas>();
	public CervezasService() {
		lista.add(new Cervezas ("Tecate Light 355ml", "Cerveza Ligera",100, 20, "Tecate-light.jpg"));
		lista.add(new Cervezas ("Barrilito 355ml", "Cerveza elaborada con materias primas de alta calidad, color dorado brillante y aroma suave.",100, 18, "barrilito.jpg"));
		lista.add(new Cervezas ("Corona Extra 355ml", "Cerveza clara orgullosamente de origen mexicana.",100, 20, "corona-extra.jpg"));
		lista.add(new Cervezas ("Modelo Especial 355ml", "Cerveza color dorado brillante, un sabor dulce y bien equilibrado con lúpulos ligeros y un final fresco.",100, 22, "Modelo-especial.jpg"));
		lista.add(new Cervezas ("Modelo Negra 355ml", "Cerveza oscura con sabor intenso y equilibrado, aroma a caramelo y malta tostada y un sabor con un final poco intenso por su selección de lúpulo.",100, 25, "modelo-negra.jpg"));
		lista.add(new Cervezas ("Victoria 355ml", "Esta cerveza ofrece un agradable aroma a maltas y lúpulo de la más alta calidad, color ámbar y consistente espuma.",100, 21, "victoria.jpg"));
		lista.add(new Cervezas ("Bohemia 355ml", "Bohemia es una cerveza mexicana producida por la cervecería Cuauhtémoc Moctezuma. Se trata de una cerveza de tipo Pilsner, es decir, una cerveza de malta clara con un perfil de sabor a lúpulo pronunciado. Se caracteriza por su sabor suave y refrescante, así como por su color dorado claro y su espuma blanca y consistente.", 200, 25, "bohemia.jpg"));
		lista.add(new Cervezas ("Heineken 355ml", "Heineken es una cerveza holandesa producida por la cervecería Heineken International. Es una cerveza de tipo Pilsner, es decir, una cerveza de malta clara con un perfil de sabor a lúpulo pronunciado. Se caracteriza por su sabor suave y refrescante, así como por su color dorado claro y su espuma blanca y consistente.", 57, 21, "heineken.jpg"));
		lista.add(new Cervezas ("Cerveza Indio 355ml", "Cerveza mexicana de malta clara",100, 25, "indio.jpg"));
		lista.add(new Cervezas ("Cerveza Sol 355ml", "Cerveza mexicana de malta clara con sabor a limón",100, 30, "sol.jpg"));
		lista.add(new Cervezas ("Cerveza Tecate Original 355ml", "Cerveza mexicana de malta oscura",100, 35, "tecate.jpg"));
		lista.add(new Cervezas ("Minerva Colonial 355ml", "Clara con maltas",50, 55, "Minerva-colonial.jpg"));
        lista.add(new Cervezas ("Minerva Viena 355ml", "Rojiza con maltas tostadas",35, 48, "Minerva-viena.jpg"));
        lista.add(new Cervezas ("Minerva Pale Ale 355ml", "Ambar con maltas",10, 41, "Minerva-PaleAle.jpg"));
        lista.add(new Cervezas ("Minerva Stout 355ml", "Oscura sabor a cafe y chocolate",20, 49, "Minerva-Shout.jpg"));
        lista.add(new Cervezas ("Minerva Lager Light 355ml", "Fresca y ligera",20, 55, "Minerva-Lager.jpg"));
	}
//Metodo CRUD
public ArrayList<Cervezas> getCervezas(){
	return lista;
}

//Metodo para traer a 1 sola cerveza de nuestra lista. La traeemos por el id
public Cervezas getCervezas(int CervezasId) { 
	Cervezas temporalCervezas=null;
	for (Cervezas cerv:lista) {
		if(cerv.getId() == CervezasId) {
			temporalCervezas=cerv;
		}
	}
return temporalCervezas;
}

//Meto







}