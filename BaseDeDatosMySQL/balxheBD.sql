select * from compania;
select * from productos;
-- Agregamos las compañías de cerveza en la columna compania
INSERT INTO compania
	(compania)
    VALUES
    ('Modelo'),
    ('Cuauhtémoc'),
    ('Minerva');

-- Agregamos las marcas de cerveza en la columna marcas
INSERT INTO productos
	(nombreProducto, precio, descripcion, volumen, gradosAlc, tipo, FK_idCompania)
    VALUES
    -- Grupo Modelo
    ('Barrilito', 10.0, 'Cerveza elaborada con materias primas de alta calidad, color dorado brillante y aroma suave.', 325, 3.4,'Pilsener',1),
    ('Corona Extra', 12.0,'Cerveza clara orgullosamente de origen mexicana.' , 355, 4.5,'Pilsener', 1),
    ('Modelo Especial', 12.0,'Cerveza color dorado brillante, un sabor dulce y bien equilibrado con lúpulos ligeros y un final fresco.', 355, 4.5,'Pilsener', 1),
    ('Modelo Negra', 14.0, 'Cerveza oscura con sabor intenso y equilibrado, aroma a caramelo y malta tostada y un sabor con un final poco intenso por su selección de lúpulo.', 355, 5.3,'Lager Munich', 1),
    ('Victoria', 12.0,'. Esta cerveza ofrece un agradable aroma a maltas y lúpulo de la más alta calidad, color ámbar y consistente espuma. ', 355, 4.8, 'Lager', 1),
    
    -- Grupo Cuauhtémoc
    ('Bohemia', 15.0, 'Es una cerveza dorada. Su producción es cuidadosa hasta el más mínimo detalle, hecha con lúpulo Styrian que contribuye en gran medida a su sabor y aroma.', 355, 4.7, 'Pilsener', 2),
    ('Heineken', 18.0, 'Cerveza clara fermentada en el fondo de tanques horizontales, lo que la hace mas clara, pura y durable. ' ,355, 5.0, 'Pale Lager', 2),
    ('Indio', 13.0, 'Cerveza obscura estilo creada de la fusión de dos ingredientes, la malta dorada y caramelo tostado, dándole leves tonos de dulzor reduciendo los niveles de amargor.', 355, 4.1, 'Lager Vienna', 2),
    ('Sol', 12.0, 'Cerveza clara con exquisito aroma, poco amarga y refrescante.' , 355, 4.2, 'Lager', 2),
    ('Tecate original', 11.0, 'Cerveza color dorado, caracterizada por un cuerpo robusto con un sabor balanceado' , 355, 4.5, 'Pilsener', 2),
    
    -- Grupo Minerva
    ('Colonial', 38.0, 'Cerveza color amarillo pálido con aroma suave a malta y notas cítricas.', 355, 5.0, 'Kölsch', 3),
    ('IPA', 40.0,'Cerveza de color dorado brillante. Te deleitará su pronunciado aroma frutal y frescos cítricos, su amargor dejará en la boca un sabor memorable.', 355, 6.5, 'India Pale Ale', 3),
    ('Pale Ale', 38.0,'Cerveza color ámbar y sus lúpulos ingleses del estilo Kent Golding brindan un aroma y amargor en completo balance con sus maltas a caramelo.', 355, 6.0, 'Pale Ale', 3),
    ('Stout', 40.0,'Esta cerveza de gran cuerpo y color negro profundo tiene un aroma y sabor a cacao y café gracias a su malta tostada.', 355, 6.0, 'Stout', 3),
    ('Viena', 39.0, 'Es una cerveza de fermentación baja y color rojizo, presenta un tenue y limpio aroma a nuez y caramelo.', 355, 5.0, 'Vienna',  3);



    -- Lineas para correción de error en la FK 
-- SET FOREIGN_KEY_CHECKS=0;
-- SHOW GLOBAL VARIABLES LIKE 'FOREIGN_KEY_CHECKS';