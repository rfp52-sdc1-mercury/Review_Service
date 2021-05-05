CREATE TABLE reviews (
	review_id serial PRIMARY KEY,
	product int,
  page int,
  count int,
	rating int,
	summary varchar,
	recommend boolean,
	response varchar,
	body varchar,
	date date,
  reviewer_name varchar,
  reviewer_emal varchar,
  helpfulness int
);

CREATE TABLE photos (
  id serial PRIMARY KEY,
  review_id int,
  url varchar,
  FOREIGN KEY(review_id)
    REFERENCES reviews(review_id)
);

CREATE TABLE reviewMeta (
  product_id serial PRIMARY KEY,
  0 int,
  1 int,
  2 int,
  3 int,
  4 int,
  5 int,
  false int,
  true int,
);

CREATE TABLE characteristics (
  id serial PRIMARY KEY,
  product_id int,
  value int
  FOREIGN KEY(product_id)
    REFERENCES reviewMeta(product_id)
);