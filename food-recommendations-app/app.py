from flask import Flask
from flask_cors import CORS
import requests
from random import randint
import json
import os

app = Flask(__name__)
cors = CORS(app)

yelp_api_key = os.environ['YELP_TOKEN']
caldining_api_key = os.environ['CALDINING_TOKEN']

@app.route("/", methods=["GET", "POST"])
def dining_hall_rec():
    url = "https://caldining.p.rapidapi.com/menu"
    headers = {
        'x-rapidapi-key': caldining_api_key,
        'x-rapidapi-host': "caldining.p.rapidapi.com"
    }    
    response = requests.request("GET", url, headers=headers)
    result = json.loads(json.loads(response.text))
    return json.dumps(result, indent = 2)

@app.route("/restaurants", methods=["GET", "POST"])
def random_yelp_rec():
    search = "food"
    # Default Berkeley coordinates
    latitude = 37.866948799999996
    longitude = -122.2531663
    headers = {'Authorization': 'Bearer %s' % yelp_api_key}
    r = requests.request('GET', f"https://api.yelp.com/v3/businesses/search?term={search}&latitude={latitude}&longitude={longitude}", headers=headers, params=None)
    places = r.json()  
    new_places = []
    for business in places['businesses']:
        if business['rating'] >= 4 and not business['is_closed'] and business['distance'] < 1609:
            new_places.append(business)
    number = len(new_places)
    pick = randint(0, number - 1)
    choice = new_places[pick]["name"]
    return str(choice)

if __name__=="__main__":
    app.run()