from flask import Flask
from flask_restful import Resource, Api


from api.swen_344_db_utils import *
from api.score_updates import *

app = Flask(__name__) #create Flask instance

api = Api(app) #api router

api.add_resource(ScoreUpdates,'/score-updates')
api.add_resource(PostUpdates,'/postData')

if __name__ == '__main__':
    print("Loading db");
    exec_sql_file('yerout.sql')
    print("Starting flask")
    app.run(debug=True), #starts Flask



