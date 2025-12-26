# Simple Spotify API Implementation
I made this project in college to take a "Laboratorio III" (*laboratory 3*) final exam.   
The commit `2f7f37051f762ce4639d7b63ed1632d6a3bb1fbd` is the one that was shown to the professors of the subject.   
## Why?
I decided to upload the project after the professors and I liked the result. I think this is a very important project to show my skills when managing API requests through a cool-looking frontend.   
So now, I want to publish SSAI and allow others to try and test it.   
Nowadays, it is not published in a domain, but it will (I hope).   
## If you want to test it, TODOs (by you):
### Environment variables
Create the file: `./backend/.env`   
That contains the following:
- `PORT=8080`
- `CLIENT_ID=<your_Spotify_client_id>`
- `CLIENT_SECRET=<your_Spotify_client_secret>`   
Read this if you don't know how to obtain and set up your spotify `CLIENT_ ` credentials: [Apps | Spotify for Developers](https://developer.spotify.com/documentation/web-api/concepts/apps)
### Install dependencies
`cd ./backend/ && npm i && cd ../frontend/ && npm i`
### Execute `./init.sh` script
`chmod +x ./init.sh && ./init.sh`
