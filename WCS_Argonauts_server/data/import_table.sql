
-- FILE FOR CREATION OF THE PSQL DB (we just need an id autoincrementing and a name)

BEGIN;

DROP TABLE IF EXISTS "argo";

CREATE TABLE IF NOT EXISTS "argo" (
  "id" serial PRIMARY KEY,
  "name" text NOT NULL UNIQUE
);

COMMIT;