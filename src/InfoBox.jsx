import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import SunnyIcon from '@mui/icons-material/Sunny';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({Info}){
    let INIT_URL = "https://images.hindustantimes.com/img/2024/08/15/1600x900/On-Thursday--the-Safdarjung-weather-station--which_1723741815895.jpg";
    const HOT_URL = "https://thumbs.dreamstime.com/b/hot-weather-25574291.jpg";
    const COLD_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3YyZOW_2o-uKHIUSaSDJyNu8sKEjabzRWrD_ms92TFncF-qcXh2ZxxyE&s=10";
    const RAIN_URL = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=0&k=20&c=lNvbIw1wReb-owe7_rMgW8lZz1zElqs5BOY1AZhyRXs=";
    return (
        <div className='info'>
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={Info.humidity > 80 ? RAIN_URL : Info.temp > 15 ? HOT_URL : COLD_URL}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {Info.city} &nbsp;
                     {Info.humidity > 80 ? <ThunderstormIcon/>: Info.temp > 15 ? <SunnyIcon/> : <SevereColdIcon/>}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                    <p>Temprature: {Info.temp} &deg;C</p>
                    <p> Humidity: {Info.humidity}%</p>
                    <p> Min Temprature: {Info.temp_min}&deg;C</p>
                    <p> Max Temprature: {Info.temp_max}&deg;C</p>
                    <p> The weather can be described as {Info.weather} and fells like {Info.fellslike}&deg;C</p>
                </Typography>
            </CardContent>
            </Card>
            </div>
        </div>
    );
}