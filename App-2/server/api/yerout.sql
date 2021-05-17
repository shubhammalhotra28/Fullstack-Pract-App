DROP TABLE IF EXISTS score_updates CASCADE;

CREATE TABLE score_updates (
    id   SERIAL PRIMARY KEY NOT NULL,
    home_score      INTEGER NOT NULL DEFAULT 0,
    away_score      INTEGER NOT NULL DEFAULT 0,
    time_created    TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO score_updates(home_score, away_score, time_created)
VALUES                   (0,          0,    '2021-05-04 06:55PM')