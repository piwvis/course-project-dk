import React from "react";
import {connect, useSelector} from "react-redux";
import {Container, Grid, Stack, Typography} from "@mui/material";
import {StyledButton} from "../styled/StyledButton";
import {useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {getCollectionData} from "../../redux/collection-reducer";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import {Image} from "cloudinary-react";

function CollectionViewPage(props) {
    const fields = useSelector((state) => state.collectionUser.fields)
    const params = useParams();
    useEffect(() => {
        props.getCollectionData(params.collectionId);
        console.log(props)
    }, [props.isFetching]);
    return (<Container>
                { params === undefined ? <span>Loading</span> : <> <Stack spacing={2}> <Typography variant={"h6"}>Collection View</Typography>
                <span>Collection Name: {props.collection.name}</span>
                <span>Items Count: {props.collection.itemsCount} </span>
                <span>Topic: {props.collection.topic} </span>
                <span>Description:  <ReactMarkdown children={props.collection.description} remarkPlugins={[remarkGfm]}/></span>
                <span>Image</span>
                <Image cloudName={"dck9jx6qr"} publicId={props.collection.image} width={"275"} crop={"scale"}/>
                    <span>Fields:</span>
                    <Container >
                        <Stack spacing={2} padding={1}>
                            {fields.map( (f, index) => <div key={index}><span>Field Name: {f.name} Field Type: {f.type}</span></div> )}
                        </Stack>
                    </Container>
                </Stack> <StyledButton><Link style={{textDecoration: 'none', color:'white'}} to="/createItem">Create Item</Link></StyledButton></>}
        </Container>
    );
}
const mapStateToProps = (state) => {
    return {collection: state.collectionUser.collection, fields: state.collectionUser}
}

export default connect(mapStateToProps, {getCollectionData})(CollectionViewPage)
