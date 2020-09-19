import React from 'react';
import {Row, Col, Card} from 'react-bootstrap';
import Language from "../Language";
import {Consts} from '../Consts';
import Loading from "./Loading";
import StandingsTable from "./StandingsTable";


class CategoriesStandings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            standings: null,
        };

        this.categories = [
            {name: 'kids4_5', minAge:4, maxAge:5},
            {name: 'kids6_9', minAge:6, maxAge:9},
            {name: '10+', minAge:10, maxAge:120},
        ]
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

    inCategory(part, cat) {
        return part.age <= cat.maxAge && part.age >= cat.minAge
    }

    buildCard(cat) {
        let DICT = Language.getDict();
        let data = this.state.standings.filter(d => this.inCategory(d, cat));
        return (
            <Col md={4} sm={12} style={{marginTop: '20px'}}>
                <Card>
                    <Card.Title>{DICT[cat.name]}</Card.Title>
                    <Card.Body>
                        <StandingsTable standings={data} maxResults={undefined}/>
                    </Card.Body>
                </Card>
            </Col>
        );
    }

    buildCategories() {
        let rows = [];
        let i = 0;
        let categories = this.categories;
        while( i < categories.length) {
            let columns = [];
            for (let j = 0; j < 3; j++) {
                if (i + j < categories.length) {
                    columns.push(this.buildCard(categories[i + j]));
                }
            }
            rows.push(
                <Row style={{margin: '20px'}}>
                    {columns}
                </Row>
            );
            i += 3;
        }
        return rows;
    }

    render() {
        if (!this.state.standings) {
            return <Loading/>
        }
        let comp = this.buildCategories();
        return (comp);
    }
}

export default CategoriesStandings;