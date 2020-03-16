import React from 'react';
import config from '../config';
import {load} from './spreadsheet';
import {Table} from 'react-bootstrap';
import Language from "../Language";


class Standings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            standings: [],
            error: null
        }
    }


    componentDidMount() {
        window.gapi.load("client", this.initClient);
    }

    onLoad = (data, error) => {
        if (data) {
            const standings = data.standings;
            this.setState({ standings: standings });
        } else {
            this.setState({ error: error.message });
        }
    };

    initClient = () => {
        window.gapi.client
            .init({
                apiKey: config.apiKey,
                clientId: config.clientId,
                discoveryDocs: config.discoveryDocs,
                scope: 'https://www.googleapis.com/auth/spreadsheets'
            })
            .then(() => {
                load(this.onLoad);
            });
    };

    render() {
        let DICT = Language.getDict();
        const { standings, error } = this.state;
        if (error) {
            return <div>{this.state.error}</div>;
        }
        return (
            <Table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>{DICT.name}</th>
                    <th>{DICT.city}</th>
                    <th>{DICT.total_points}</th>
                </tr>
                </thead>
                <tbody>
                {standings.sort((a, b) => b.total_points - a.total_points).map((standing, i) => (
                    (standing.name !== '') ?
                    <tr key={i}>
                        <td>
                            {(i + 1)}
                        </td>
                        <td>
                            {standing.name}
                        </td>
                        <td>
                            {standing.city}
                        </td>
                        <td>
                            {standing.total_points}
                        </td>
                    </tr> :
                        undefined
                ))}
                </tbody>
            </Table>
        );
    }
}

export default Standings;