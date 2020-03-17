import React from 'react';
import {Table} from 'react-bootstrap';
import Language from "../Language";
import {Consts} from '../Consts';


class Standings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            standings: null,
            error: null
        }
    }


    componentDidMount() {
        fetch(Consts.server_url + '/standings', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            // mode: 'no-cors'
        }).then(result => {
            result.json().then(
            data => this.setState({standings: data.result})
        )
        })
    }


    render() {
        let DICT = Language.getDict();
        const { standings, error } = this.state;
        if (!standings) {
            return null
        }
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