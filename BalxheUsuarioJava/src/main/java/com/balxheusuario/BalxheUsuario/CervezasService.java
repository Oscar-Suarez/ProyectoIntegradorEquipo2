package com.balxheusuario.BalxheUsuario;

import java.util.ArrayList;

import org.springframework.stereotype.Service;

@Service



public class CervezasService {
	public final ArrayList<Cervezas> lista= new ArrayList<Cervezas>();
	public CervezasService() {
		lista.add(new Cervezas ("Barrilito 355ml", "La Cerveza Barrilito es una cerveza de estilo American Pilsner, que se caracteriza por tener un perfil de sabor a lúpulo más pronunciado que las Pilsners tradicionales de Bohemia. Esta cerveza tiene un contenido alcohólico de 3.4º y está elaborada con materias primas de alta calidad, lo que le da un color dorado brillante y un aroma suave. La Cerveza Barrilito es ideal para disfrutar en cualquier ocasión, ya sea en solitario o en compañía de amigos. Es una cerveza refrescante y fácil de beber, que se puede disfrutar tanto en verano como en invierno. Además, su perfil de sabor equilibrado la hace ideal para maridar con una amplia variedad de platos. Si te gustan las cervezas ligeras y refrescantes, definitivamente debes probar La Cerveza Barrilito.",100, 18, "barrilito.png"));
		lista.add(new Cervezas ("Corona Extra 355ml", "Corona Extra es una cerveza de estilo Pilsner de 4.5º de alcohol que ha ganado una gran popularidad a nivel mundial. Actualmente se vende en más de 180 países en los cinco continentes, lo que la convierte en una de las cervezas más reconocidas y apreciadas en el mundo. Corona Extra fue elaborada por primera vez en la Ciudad de México en 1927 en la Cervecería Modelo, una de las cervecerías más importantes de México. ",100, 20, "corona-extra.png"));
		lista.add(new Cervezas ("Modelo Especial 355ml", "Cerveza color dorado brillante, un sabor dulce y bien equilibrado con lúpulos ligeros y un final fresco.",100, 22, "Modelo-especial.png"));
		lista.add(new Cervezas ("Modelo Negra 355ml", "Cerveza oscura con sabor intenso y equilibrado, aroma a caramelo y malta tostada y un sabor con un final poco intenso por su selección de lúpulo.",100, 25, "modelo-negra.png"));
		lista.add(new Cervezas ("Victoria 355ml", "Esta cerveza ofrece un agradable aroma a maltas y lúpulo de la más alta calidad, color ámbar y consistente espuma.",100, 21, "victoria.png"));
		lista.add(new Cervezas ("Tecate Light 355ml", "Tecate Light es una cerveza tipo light lager, con un sabor ligero, balanceado y suave que ofrece al consumidor un sabor único gracias a sus ingredientes de óptima calidad. 3.9% Alc. Vol. Historia: En 1992, Tecate lanza Tecate Light, la primera cerveza Light en México.",100, 20, "Tecate-light.png"));
		
		lista.add(new Cervezas ("Bohemia 355ml", "Bohemia es una cerveza mexicana producida por la cervecería Cuauhtémoc Moctezuma. Se trata de una cerveza de tipo Pilsner, es decir, una cerveza de malta clara con un perfil de sabor a lúpulo pronunciado. Se caracteriza por su sabor suave y refrescante, así como por su color dorado claro y su espuma blanca y consistente.", 200, 25, "bohemia.png"));
		lista.add(new Cervezas ("Heineken 355ml", "Heineken es una cerveza holandesa producida por la cervecería Heineken International. Es una cerveza de tipo Pilsner, es decir, una cerveza de malta clara con un perfil de sabor a lúpulo pronunciado. Se caracteriza por su sabor suave y refrescante, así como por su color dorado claro y su espuma blanca y consistente.", 57, 21, "heineken.png"));
		lista.add(new Cervezas ("Cerveza Indio 355ml", "INDIO es una cerveza obscura estilo Lager Vienna que se caracteriza por su sabor único y especial. Esta cerveza fue creada a partir de la fusión de dos ingredientes clave: la malta dorada y el caramelo tostado. Esta combinación le da a INDIO leves tonos de dulzor y reduce los niveles de amargor, lo que la hace muy agradable y fácil de beber.",100, 25, "indio.png"));
		lista.add(new Cervezas ("Cerveza Sol 355ml", "Cerveza Sol es el nombre de una cerveza mexicana del grupo Cervecería Cuauhtémoc Moctezuma fundada en la Ciudad de México en 1899, de características clara del tipo lager, poco amarga con un grado alcohólico de 4.2° GL y 129 calorías, desarrollada en la Ciudad de México por la extinta cervecera El Salto del Agua. Su sabor y el significado universal de su nombre, le han permitido incursionar en más de 50 países desde América (principalmente América Latina), hasta Europa, Asia, y el Medio Oriente.",100, 30, "sol.png"));
		lista.add(new Cervezas ("Cerveza Tecate Original 355ml", "Tecate es una cerveza tipo Pilsner caracterizada por un cuerpo robusto. Elaborada con ingredientes 100% naturales los cuales proporcionan un sabor balanceado y la hacen una cerveza inimitable. La marca Tecate nace en Baja California Norte, en un pueblo llamado por el mismo nombre. En 1954, la cervecera Tecate es adquirida por Cervecería Cuauhtémoc quien proyecta el desarrollo de la marca a nivel nacional caracterizándose por la innovación en sus empaques, fue la primera cerveza en lata en México. ",100, 35, "tecate.png"));
		lista.add(new Cervezas ("Minerva Colonial 355ml", "Esta es una cerveza de color dorado brillante con aroma suave a malta, con notas a cítricos estilo Kölsch de fermentación mixta. Para lograr el gran cuerpo que tiene, se incorpora a la mezcla malta de trigo y se extiende el tiempo de reposo posterior a la fermentación.\r\n"
				+ "\r\n"
				+ "Cerveza clara fresca y suave. Logra el balance perfecto con aromas sutiles a naranja y pan.",50, 55, "Minerva-colonial.png"));
        lista.add(new Cervezas ("Minerva Viena 355ml", "La Minerva Viena obtiene su nombre de una cerveza que se elabora en marzo de cada año, específicamente para el Oktoberfest. Es una cerveza de fermentación baja y color ámbar rojizo, presenta un tenue y limpio aroma a nuez y caramelo. Al degustarla se puede saborear su distintivo y suave dulzor proveniente de la malta aromática. La terminación es duradera y la sensación en boca es maltosa. Esta cerveza va mejor con platillos agridulces, pescado, o vegetales.",35, 48, "Minerva-viena.png"));
        lista.add(new Cervezas ("Minerva Pale Ale 355ml", "Cerveza de estilo English Mild Ale recibió la medalla de Oro en su categoría en el World Beer Cup 2010,sus lúpulos ingleses del estilo Kent Golding, imparten un aroma y sabor en completo balance con sus maltas caramelo y cuerpo medio,ideal para maridar con quesos ingleses y hamburguesas.",10, 41, "Minerva-PaleAle.png"));
        lista.add(new Cervezas ("Minerva Stout 355ml", "La cerveza de estilo Stout es una cerveza de fermentación tipo Ale que se caracteriza por tener un gran cuerpo y un color oscuro. Esta cerveza es muy apreciada por los amantes de las cervezas de sabor intenso y potente, ya que suele tener un perfil de sabor más complejo y marcado que otras cervezas. La cerveza Stout se obtiene a partir de la mezcla de malta tostada con lúpulo y levadura, lo que le da un sabor y aroma únicos. Oscura sabor a cafe y chocolate.",20, 49, "Minerva-Shout.png"));
        lista.add(new Cervezas ("Minerva Lager Light 355ml", "La cerveza artesanal es una opción muy popular entre los amantes de la cerveza debido a su sabor único y su proceso de elaboración más tradicional. Una de las características más interesantes de esta cerveza es que solo tiene 85 calorías, lo que la convierte en una opción más ligera y saludable para aquellas personas que están preocupadas por su ingesta calórica.",20, 55, "Minerva-Lager.png"));
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