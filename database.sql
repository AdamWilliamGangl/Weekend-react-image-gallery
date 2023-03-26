-- Create the database
CREATE TABLE "reactGallery"(
"id" SERIAL PRIMARY KEY,
"path" varchar(300) NOT NULL,
"description" varchar(300) NOT NULL,
"likes" integer NOT NULL);

--Add in sample values that are locally hosted
INSERT INTO "reactGallery" ("path", "description", "likes")
VALUES 
('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.', '0'),
('images/Day-Trip-New-York.webp', 'Day Trop to New York.', '0'),
('images/Summer-Camp-Gotham.webp', 'Summer Camp in Gotham..', '0'),
('images/gimages/Weekend-in-Space.webp', 'Weekend in Space.', '0');

--GET route for retrieving items from database SQL text
SELECT * FROM "reactGallery" ORDER BY "id"

--PUT route for updating likes SQL text
UPDATE "reactGallery" SET likes = likes +1 WHERE ID=$1