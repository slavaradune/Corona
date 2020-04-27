import React from 'react';
import {Consts} from '../Consts';
import StandingsTable from "./StandingsTable";
import Loading from "./Loading";


class Standings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            standings: null,
        }
    }


    componentDidMount() {
        fetch(Consts.server_url + '/standings', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(result => {
            result.json().then(
                data => {
                    this.setState({standings: data.result})
                }
            )
        })
    }


    render() {
        const { standings } = this.state;
        if (!standings) {
            return <Loading/>
        }
        return (
            <StandingsTable standings={standings}/>
        );
    }
}

export default Standings;