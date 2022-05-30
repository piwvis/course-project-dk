import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";


export default function ItemViewCard(props) {
    const [data, setData] = useState(props.data)
    useEffect(() => {
        setData(props.data)
    }, [props.data]);
    const navigate = useNavigate()
    return ( <> { props.isViewCreate ? <><Card sx={{position: {xs: "static", sm: "absolute"}, margin: "5px", minWidth: 300, left: "900px", width: "200px", top: "100px"}}>
            <ItemCardContent data={data}/>
            <CardActions>
                <Button size="small">Open</Button>
            </CardActions>
        </Card></>  :  <Card sx={ {width: 300, margin: "5px"}}>
                <ItemCardContent  data={data}/>
               {/* <CardActions>
                    <Button onClick={() => {navigate(`/collectionView/${}`)}} size="small">Open</Button>
                </CardActions>*/}
            </Card>
    }</>

    );
}

const ItemCardContent = (props) => {
    return (<CardContent>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {props.data.name}
        </Typography>
    </CardContent>)
}
