import axios from 'axios';

const token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjE5OTAwNDM2LWU5ODAtNDBmNC1iZGQyLTZhOWM4NTE3ZDQ5ZSIsImlhdCI6MTcxOTAzNjUyMywic3ViIjoiZGV2ZWxvcGVyL2Q2ODJhNjQwLWU4YTQtMGEwZS1mMGRmLTg0Y2I1MDgzMjdkOCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI0OS4yMDQuMjM5LjI2Il0sInR5cGUiOiJjbGllbnQifV19.aXYIVHg3NDLSZqydSc2x-GPRWdnqLLd99EFPGG3d6EsQMenUutpdc1apjxwz_QmVd-w37Hyd_1ayobPnq-sZVA";
const playerTag = "80RCLGLJR";  
const url = `https://api.clashroyale.com/v1/players/%23${playerTag}/upcomingchests`;

const headers = {
  Authorization: `Bearer ${token}`
};

async function getClans() {
  try {
    const response = await axios.get(url, { headers });
    const result=response.data;
    console.log(result);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

getClans();
