import express from 'express';
import fs from 'fs';
import getWeather from './openWeather.js';
import getRestaurant from './restaurant.js';
import cors from 'cors';

export const app = express();
const port = 3000;

const options = {
  origin: '*', // 접근 권한을 부여하는 도메인
  credentials: true, // 응답 헤더에 Access-Control-Allow-Credentials 추가
  optionsSuccessStatus: 200, // 응답 상태 200으로 설정
};

app.use(cors(options));

app.use(express.static('../client'));

app.get('/', function (req, res) {
  res.sendFile('index.html');
});

getRestaurant(app);
getWeather(app);

app.listen(port, () => {
  console.log(`
  server is open! 
  http://localhost:3000`);
});
