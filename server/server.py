from flask import Flask
from flask_restful import Resource, Api


from api.swen_344_db_utils import *
from api.example_api import *

app = Flask(__name__) #create Flask instance

api = Api(app) #api router

api.add_resource(ExampleApi,'/get_all_data')
api.add_resource(EditNutrikit,'/postUpdatedData')

if __name__ == '__main__':
    print("Loading db");
    exec_sql_file('nutrikit.sql');
    print("Starting flask");
    app.run(debug=True), #starts Flask



