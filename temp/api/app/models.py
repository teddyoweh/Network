# -*- coding=utf-8 -*-
# Name: teddy oweh
# Email: teddyoweh@teddyoweh.com
# Message: Feel Free To Contact Me on Enquires or Questions.
 
import pandas as pd
import requests
import io
import requests
from bs4 import BeautifulSoup
class UniInfo:
    
    def __init__(self):
        def icon(url):
          

            req = requests.get(url)
            soup = BeautifulSoup(req.text, "lxml")

            #Obtiene el favicon de Twitter
            icons  = ['icon','apple-touch-icon','shortcut icon']
            for icon in icons:
                try:
                    iconurl = soup.find("link",{"rel":icon})['href']
                except:pass
            iconurl = iconurl.strip(' ')
            if iconurl.startswith('/'):
                iconurl = iconurl.strip('/')
                iconurl = '{}{}'.format(url,iconurl)
            else:pass

            return iconurl
        self.url = "https://raw.githubusercontent.com/endSly/world-universities-csv/master/world-universities.csv"
        s=requests.get(self.url).content
        csa = io.StringIO(s.decode('utf-8'))
        c=pd.read_csv(io.StringIO(s.decode('utf-8')),names=['country','name','website'])
        uninames = []
        uniwebsite = []
        unicountry = []

        for r,t,u in zip(c['name'],c['website'],c['country']):
            uninames.append(r)
            uniwebsite.append(t)
            unicountry.append(u)   
        database = {}
        unilogos = []
        
        for axa in uniwebsite:
            unilogos.append(icon(axa))
        for nam,site,cnr,icon in zip(uninames,uniwebsite,unicountry,unilogos):
            database[nam]={
                'website':site,
                    'country':cnr,
                    'logo':icon
            }
        self.database = database
    def database(self):
        return self.database
    def country(self,name):
        return self.database[name]['country']
    def logo(self,name):
        return self.database[name]['logo']
    def website(self,name):
        return self.database[name]['website']
    def allnames(self):
        return self.database.keys()


uni = UniInfo()
print(uni.allnames())