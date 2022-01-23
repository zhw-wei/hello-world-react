import React from 'react';
import { request } from '../config/AxiosReqest'


class SendRequest extends React.Component {

    getData = () => {
        request.get("/path", {})
            .then(response => console.log(response))
    }


    render(): React.ReactNode {
        return <>

        </>
    }
}