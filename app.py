import os.path
import json
import random
from flask import Flask, Response
from flask import send_from_directory

SRC_DIR = os.path.abspath(os.path.dirname(__file__))
DATA_DIR = os.path.join(SRC_DIR, 'data')

app = Flask(__name__)

@app.route('/')
def home():
    return app.send_static_file('index.html')

@app.route('/data/<path:path>')
def send_file(path):
    print("/data" + "/" + path)
    return send_from_directory(DATA_DIR, path)



@app.route('/api/standings.json')
def standings():
    try:
        name_file = 'data/drivers.json'
        with open(name_file) as data_file:
            data = json.load(data_file, encoding="utf-8")
            item_random = random.choice(data)
            data.remove(item_random)
            item_random['points'] += 1
            data.append(item_random)
            print(SRC_DIR)


             # Writing JSON data
            file = open(name_file, "w")
            file.write(json.dumps(data, indent=4, sort_keys=True, encoding="utf-8"))
            file.close()
            result = {"success" : "ok"}
            js = json.dumps(result)
            return Response(js, status=400, mimetype='application/json')
    except IOError:
        result = {"error" : "file_error"}
        js = json.dumps(result)
        return Response(js, status=400, mimetype='application/json')


@app.route('/api/team/<int:team_id>.json')
def team_details(team_id):
    try:
        with open('data/teams.json') as data_file:
            data = json.load(data_file)
            result = [x for x in data if x['id']==team_id]
            js = json.dumps(result)
            return Response(js, status=200, mimetype='application/json')
    except IOError:
        result = {"error" : "file_error"}
        js = json.dumps(result)
        return Response(js, status=400, mimetype='application/json')



if __name__ == '__main__':
    app.run(debug=True)
