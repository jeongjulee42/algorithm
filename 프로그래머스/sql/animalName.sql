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