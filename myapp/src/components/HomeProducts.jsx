import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import './Home.css';

const HomeProducts = () => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:8012/view")
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
                console.error("There was an error fetching the data:", error);
            });
    }, []); // The empty array ensures this effect runs only once when the component mounts.

    return (
        <div>
            <br /><br />
            <h1 style={{ margin: 'auto' }}>PRODUCTS</h1>
            <br /><br />
            <Grid container spacing={2}>
                {data.map((val, index) => (
                    <Grid item xs={4} sm={4} md={3} key={index}>
                        <Card sx={{ maxWidth: 220, maxHeight: 220 }}>
                            <CardMedia
                                sx={{ minHeight: 110 }}
                                image={val.image}
                                title={val.category}
                            />
                            <CardContent>
                                <h4>{val.title}</h4>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <br /><br />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button style={{ backgroundColor: "black" }} variant="contained">More</Button>
            </div>
        </div>
    );
};

export default HomeProducts;
