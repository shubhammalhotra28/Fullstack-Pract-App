from flask_restful import Resource

from flask_restful import request
from flask_restful import reqparse
import json
from .swen_344_db_utils import *

parser = reqparse.RequestParser()

class ExampleApi(Resource):

    def get(self):

        fruits_sql = "Select * from nutrikit where category = '{}'".format('fruits')
        vegetables_sql = "Select * from nutrikit where category = '{}'".format('vegetables')
        proteins_sql = "Select * from nutrikit where category = '{}'".format('proteins')
        grains_sql = "Select * from nutrikit where category = '{}'".format('grains')
        dairy_sql = "Select * from nutrikit where category = '{}'".format('dairy')

        fruits = exec_get_all(fruits_sql)
        vegetables = exec_get_all(vegetables_sql)
        proteins = exec_get_all(proteins_sql)
        grains = exec_get_all(grains_sql)
        dairy = exec_get_all(dairy_sql)
        
        result = {
            "fruits": fruits,
            "vegetables":vegetables,
            "grains":grains,
            'dairy':dairy,
            "proteins":proteins
        }


        return result

class EditNutrikit(Resource):
    """
    Edit the nutrikit : this method just updates it to the db, as it is mentioned we are not supposed to
    change any pre existing stuff. So, this changes to the db which can be verified witht the network
    getting the successful message of json with 200 status code.
    """

    def put(self):
        parser.add_argument("menuItem")
        parser.add_argument("field")
        parser.add_argument("value")
        args = parser.parse_args()

        sql = "Update Nutrikit SET {} = '{}' where name = '{}'".format(args['field'],args['value'],args['menuItem']
                                                                       )
        exec_commit(sql)

        json = {
            'statusCode': 200
        }

        return json