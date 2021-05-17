DROP table if EXISTS nutrikit CASCADE;

CREATE TABLE nutrikit (
        name varchar(40),
        calories float,
        totalFat float,
        saturatedFat float,
        transFat float,
        protein float,
        carbohydrate float,
        category VARCHAR(30)
);

INSERT INTO nutrikit (name,calories,totalFat,saturatedFat,transFat,protein,carbohydrate,category)
        VALUES ('bread',200,1.1,0.0,0.0,4.0,13.8,'grains');
INSERT INTO nutrikit (name,calories,totalFat,saturatedFat,transFat,protein,carbohydrate,category)
        VALUES ('bagel',300,1.7,0.1,0.0,13.8,68,'grains');
INSERT INTO nutrikit (name,calories,totalFat,saturatedFat,transFat,protein,carbohydrate,category)
        VALUES ('pita',250,1.7,0.3,0.0,6.3,35.2,'grains');
INSERT INTO nutrikit (name,calories,totalFat,saturatedFat,transFat,protein,carbohydrate,category)
        VALUES ('naan',210,3.3,0.1,0.0,2.7,16.9,'grains');
INSERT INTO nutrikit (name,calories,totalFat,saturatedFat,transFat,protein,carbohydrate,category)
        VALUES ('tortilla',120,0.5,0.1,0.0,1.1,8.5,'grains');

INSERT INTO nutrikit (name,calories,totalFat,saturatedFat,transFat,protein,carbohydrate,category)
        VALUES ('milk',300,3.9,2.4,0.0,3.2,4.8,'dairy');
INSERT INTO nutrikit (name,calories,totalFat,saturatedFat,transFat,protein,carbohydrate,category)
        VALUES ('yoghurt',200,5.0,0.0,0.0,9.0,3.98,'dairy');
INSERT INTO nutrikit (name,calories,totalFat,saturatedFat,transFat,protein,carbohydrate,category)
        VALUES ('cheddar cheese',200,9.0,6.0,0.0,7.0,0.0,'dairy');
INSERT INTO nutrikit (name,calories,totalFat,saturatedFat,transFat,protein,carbohydrate,category)
        VALUES ('skim milk',100,0.2,0.1,0.0,8.3,12.5,'dairy');
INSERT INTO nutrikit (name,calories,totalFat,saturatedFat,transFat,protein,carbohydrate,category)
        VALUES ('cottage cheese',80,4.3,0.0,0.0,11.12,3.98,'dairy');

INSERT INTO nutrikit (name,calories,totalFat,saturatedFat,transFat,protein,carbohydrate,category)
        VALUES ('romaine',30,0.3,0.0,0.0,1.2,3.3,'vegetables');
INSERT INTO nutrikit (name,calories,totalFat,saturatedFat,transFat,protein,carbohydrate,category)
        VALUES ('green beans',40,0.22,0.0,0.0,1.83,6.97,'vegetables');
INSERT INTO nutrikit (name,calories,totalFat,saturatedFat,transFat,protein,carbohydrate,category)
        VALUES ('squash',100,0.2,0.0,0.0,1.2,3.4,'vegetables');
INSERT INTO nutrikit (name,calories,totalFat,saturatedFat,transFat,protein,carbohydrate,category)
        VALUES ('spinach',50,0.4,0.0,0.0,2.9,3.6,'vegetables');
INSERT INTO nutrikit (name,calories,totalFat,saturatedFat,transFat,protein,carbohydrate,category)
        VALUES ('kale',10,0.9,0.0,0.0,4.3,8.8,'vegetables');

INSERT INTO nutrikit (name,calories,totalFat,saturatedFat,transFat,protein,carbohydrate,category)
        VALUES ('orange',300,0.12,0.0,0.0,0.94,11.75,'fruits');
INSERT INTO nutrikit (name,calories,totalFat,saturatedFat,transFat,protein,carbohydrate,category)
        VALUES ('banana',200,0.33,0.0,0.0,1.09,22.84,'fruits');
INSERT INTO nutrikit (name,calories,totalFat,saturatedFat,transFat,protein,carbohydrate,category)
        VALUES ('pineapple',100,0.12,0.0,0.0,0.54,13.12,'fruits');
INSERT INTO nutrikit (name,calories,totalFat,saturatedFat,transFat,protein,carbohydrate,category)
        VALUES ('grapes',80,0.16,0.0,0.0,0.72,18.1,'fruits');
INSERT INTO nutrikit (name,calories,totalFat,saturatedFat,transFat,protein,carbohydrate,category)
        VALUES ('blueberries',50,0.33,0.0,0.0,0.74,14.49,'fruits');

INSERT INTO nutrikit (name,calories,totalFat,saturatedFat,transFat,protein,carbohydrate,category)
        VALUES ('steak',300,5.73,2.183,0.182,29.44,0.0,'proteins');
INSERT INTO nutrikit (name,calories,totalFat,saturatedFat,transFat,protein,carbohydrate,category)
        VALUES ('ground beef',200,13.1,5.3,0.6,15.18,0.0,'proteins');
INSERT INTO nutrikit (name,calories,totalFat,saturatedFat,transFat,protein,carbohydrate,category)
        VALUES ('chicken',100,9.3,2.5,0.1,27.14,0.0,'proteins');
INSERT INTO nutrikit (name,calories,totalFat,saturatedFat,transFat,protein,carbohydrate,category)
        VALUES ('fish',80,6.34,1.0,0.0,19.84,0.0,'proteins');
INSERT INTO nutrikit (name,calories,totalFat,saturatedFat,transFat,protein,carbohydrate,category)
        VALUES ('soy',50,19.94,2.884,0.0,36.49,30.16,'proteins');
