import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {Image} from "cloudinary-react";
import {useNavigate} from "react-router-dom";


export default function CollectionViewCard(props) {
    const [data, setData] = useState(props.data)
    let collectionId = props.data.id
    useEffect(() => {
        setData(props.data)
    }, [props.data]);
    const navigate = useNavigate()
    return ( <> { props.isViewCreate ? <><Card sx={{position: {xs: "static", sm: "absolute"}, margin: "5px", minWidth: 300, left: "900px", width: "200px", top: "100px"}}>
            <CollectionCardContent imageId={props.imageId} data={data}/>
            <CardActions>
                <Button size="small">Open</Button>
            </CardActions>
        </Card></>  :  <Card sx={ {width: 300, margin: "5px"}}>
                <CollectionCardContent imageId={props.imageId} data={data}/>
                <CardActions>
                    <Button onClick={() => {navigate(`/collectionView/${collectionId}`)}} size="small">Open</Button>
                </CardActions>
            </Card>
    }</>

    );
}

const CollectionCardContent = (props) => {
    return (<CardContent>
        <Image cloudName={"dck9jx6qr"} publicId={props.imageId} width={"275"} crop={"scale"}/>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {props.data.name}
        </Typography>
        <Typography sx={{ mb: 1 }} color="text.secondary">
            {props.data.topic}
        </Typography>
        <Typography component={'span'} sx={{ mb: 1.5 }}>
            <ReactMarkdown children={props.data.description} remarkPlugins={[remarkGfm]}></ReactMarkdown>
            <br />
        </Typography>
    </CardContent>)
}
