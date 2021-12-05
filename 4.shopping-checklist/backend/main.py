from fastapi import FastAPI
from fastapi.params import Query
import requests
import re

app = FastAPI()

api_url = "https://api.giphy.com/v1/gifs"
search_end_point = "search"
api_key = "zJScAImb1Ci99DMsEG1FM6C16Z6vd0xE"


def getImageURL(pageURL: str):
    # https://media0.giphy.com/media/3o7TKr5t9drIximd8c/200.webp?cid=9c470232vnodaknuaos60spf732j0ci3iawtcgyobx4lrtdc&rid=200.webp&ct=g
    # https://i.giphy.com/media/3o7TKr5t9drIximd8c/200.webp?cid=9c470232vnodaknuaos60spf732j0ci3iawtcgyobx4lrtdc&rid=200.webp&ct=g
    pageURL = pageURL.split("?")[0]
    return re.sub(r"media\d", "i", pageURL)


def searchGiphy(query: str):
    request = requests.get(f"{api_url}/{search_end_point}?api_key={api_key}&q={query}")
    return request.json()


def filterResults(imagesArray: any):
    # return preview_webp.url && fixed_height.webp
    chosenImages = []

    for imageObject in imagesArray:
        imagePagePreview = imageObject["images"]["preview_webp"]["url"]
        imagePageURL = imageObject["images"]["fixed_height"]["webp"]

        chosenImages.append(
            {
                "preview": getImageURL(imagePagePreview),
                "url": getImageURL(imagePageURL),
            }
        )

        if len(chosenImages) == 7:
            break

    return chosenImages


@app.get("/search")
def read_item(query: str):
    images = searchGiphy(query)
    chosenImages = filterResults(images["data"])
    return chosenImages
