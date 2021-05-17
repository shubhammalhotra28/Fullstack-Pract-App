import json
from flask_restful import Resource
from flask_restful import request
from flask_restful import reqparse
from .swen_344_db_utils import *

parser = reqparse.RequestParser()



class ScoreUpdates(Resource):
    def get(self):
       return exec_get_all("""
        SELECT home_score, away_score, TO_JSON(time_created)
            FROM score_updates
            ORDER BY time_created DESC
        """)


class PostUpdates(Resource):
    def post(self):
        parser.add_argument("home_score")
        parser.add_argument("away_score")
        args = parser.parse_args()
        sql = "Insert into score_updates (home_score,away_score) VALUES ('{}','{}')".format(args['home_score'],args['away_score'])
        print(sql)
        exec_commit(sql)
        json = {
            'statusCode': 200
        }

        return json

