import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {Image} from "cloudinary-react";


export default function BasicCard(props) {
    const [data, setData] = useState(props.data)
    useEffect(() => {
        setData(props.data)
    }, [props.data]);
    return (
        <Card sx={{position: {xs: "static", sm: "absolute"}, minWidth: 300, left: "900px", width: "200px", top: "100px"}}>
            <CardContent>
                <Image cloudName={"dck9jx6qr"} publicId={props.imageId} width={"275"} crop={"scale"}/>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {data.name}
                </Typography>
                <Typography component={'span'} sx={{ mb: 1.5 }}>
                    <ReactMarkdown children={data.description} remarkPlugins={[remarkGfm]}></ReactMarkdown>
                    <br />
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Open</Button>
            </CardActions>
        </Card>
    );
}

