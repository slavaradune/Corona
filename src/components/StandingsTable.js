import React from 'react';
import {Table} from 'react-bootstrap';
import Language from "../Language";
import {Consts} from '../Consts';
import StandingDetails from "./StandingDetails";


class StandingsTable extends React.Component {
    constructor(props) {
        super(props);
        let arr;
        (arr = []).length = props.standings.length;
        arr.fill(false);
        this.state = {
            selected: arr,
            maxResults: props.maxResults,
            standings: props.standings,
        }
    }

    componentWillReceiveProps(props) {
        let arr;
        (arr = []).length = props.standings.length;
        arr.fill(false);
        this.setState({
            selected: arr,
            maxResults: props.maxResults,
            standings: props.standings,
        });
    }

    render() {
        let DICT = Language.getDict();
        const { standings } = this.state;
        if (!standings) {
            return null
        }
        let prevPoints = 100000;
        let place = 0;
        let placeToPrint = 0;
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
                {standings.sort((a, b) => b.total_points - a.total_points).map((standing, i) => {
                    if (this.state.maxResults && i >= this.state.maxResults) {
                        return;
                    }
                    let newPlace = false;
                    place++;
                    if (parseInt(standing.total_points) < prevPoints) {
                        prevPoints = parseInt(standing.total_points);
                        newPlace = true;
                    }
                    if (newPlace) {
                        placeToPrint = place;
                    }
                    return (standing.name !== '') ?
                        [
                            <tr key={i} onClick={() => {
                                this.state.selected[i] = (!this.state.selected[i]);
                                this.setState({selected: this.state.selected})}}>
                                <td>
                                    {placeToPrint}
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
                            </tr>
                            , (this.state.selected[i]) ? <StandingDetails standing_details={standing.standing_details}/> : undefined] :
                        undefined
                })}
                </tbody>
            </Table>
        );
    }
}

export default StandingsTable;