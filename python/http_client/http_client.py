import requests
import json

from requests import status_codes

# Web APIにGetアクセスし、レスポンスを扱う
get_url = "https://api.github.com/zen"  # 禅の言葉をいただけるありがたいAPI

response = requests.get(url=get_url)

print("Status: {0}".format(response.status_code))
print("Zen: {0}\n\n".format(response.text))


# JsonデータをPostし、レスポンスのJsonデータを扱う
post_url = "https://httpbin.org/post"  # postデータとその他メタデータが返ってくるAPI

headers = {
    "Content-Type": "application/json"
}

payload = {
    "name": "Usamin",
    "age": 17
}

response = requests.post(url=post_url, data=json.dumps(payload), headers=headers)

# requestsモジュールのバージョンが2.4.2以降のとき、jsonデータのpostはjson引数にdict型を与えれば自動でJsonに変換してくれる
# この場合、以下のように"applicaiton/json"のヘッダー指定が不要となる
# response = requests.post(url=post_url, json=payload)

if response.status_code != 200:
    print(response.text)
else:
    response_json = response.json()
    print(response_json, "\n\n")
    print("Your IP: {0}".format(response_json["origin"]))
