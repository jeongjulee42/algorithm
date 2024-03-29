SELECT ANIMAL_ID, NAME FROM ANIMAL_INS ORDER BY ANIMAL_ID;
SELECT ANIMAL_ID, NAME, DATETIME FROM ANIMAL_INS ORDER BY NAME ASC, DATETIME DESC;
SELECT NAME, DATETIME FROM ANIMAL_INS ORDER BY ANIMAL_ID DESC;
SELECT ANIMAL_ID, NAME FROM ANIMAL_INS WHERE INTAKE_CONDITION != 'Aged' ORDER BY ANIMAL_ID;
SELECT NAME FROM ANIMAL_INS ORDER BY DATETIME LIMIT 1;
SELECT ANIMAL_ID FROM ANIMAL_INS WHERE NAME IS NOT NULL;
SELECT ANIMAL_ID, NAME FROM ANIMAL_INS WHERE INTAKE_CONDITION = 'Sick'
SELECT COUNT(*) AS 'count' FROM ANIMAL_INS 
SELECT DATETIME as '시간' FROM ANIMAL_INS ORDER BY DATETIME ASC LIMIT 1;
SELECT COUNT(DISTINCT(NAME)) AS count FROM ANIMAL_INS WHERE NAME IS NOT NULL;
SELECT NAME, COUNT(NAME) FROM ANIMAL_INS GROUP BY NAME HAVING NAME IS NOT NULL AND COUNT(NAME) > 1 ORDER BY NAME; 
SELECT ANIMAL_ID, NAME FROM ANIMAL_INS WHERE NAME LIKE '%el%' AND ANIMAL_TYPE = 'Dog' ORDER BY NAME;
SELECT ANIMAL_TYPE, IF(NAME IS NULL, 'No name', NAME), SEX_UPON_INTAKE FROM ANIMAL_INS ORDER BY ANIMAL_ID;
SELECT ANIMAL_ID, NAME, LEFT(DATETIME, 10) AS '날짜' FROM ANIMAL_INS ORDER BY ANIMAL_ID;
SELECT ANIMAL_TYPE, COUNT(ANIMAL_ID) AS 'count' FROM ANIMAL_INS GROUP BY ANIMAL_TYPE ORDER BY ANIMAL_TYPE;
SELECT ANIMAL_ID, NAME, IF(SEX_UPON_INTAKE LIKE '%Neutered%' OR SEX_UPON_INTAKE LIKE '%Spayed%', 'O','X') AS '중성화' FROM ANIMAL_INS ORDER BY ANIMAL_ID;
SELECT ANIMAL_ID FROM ANIMAL_INS WHERE NAME IS NULL ORDER BY ANIMAL_ID;
SELECT DATE_FORMAT(DATETIME, '%H') AS HOUR, COUNT(DATE_FORMAT(DATETIME, '%H')) AS COUNT FROM ANIMAL_OUTS GROUP BY HOUR HAVING HOUR BETWEEN 9 AND 19 ORDER BY HOUR ASC;
SELECT ANIMAL_ID, NAME, SEX_UPON_INTAKE FROM ANIMAL_INS WHERE NAME IN('Lucy', 'Ella', 'Pickle', 'Rogan', 'Sabrina', 'Mitty') ORDER BY ANIMAL_ID;
SELECT * FROM ANIMAL_INS ORDER BY ANIMAL_ID;