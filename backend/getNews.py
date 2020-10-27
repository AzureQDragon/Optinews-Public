import requests

url = "https://rapidapi.p.rapidapi.com/trending"

querystring = {"limit":"1","langs":"en","skip":"7"}

headers = {
    'x-rapidapi-host': "news67.p.rapidapi.com",
    'x-rapidapi-key': "a2d1c86f07msh3cc2eabceeffeb3p165ddajsnf21781b4f2a3"
    }

response = requests.request("GET", url, headers=headers, params=querystring)

responseText = response.json()
print(responseText[0]['title'])

