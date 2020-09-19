import React from 'react';
import Language from "../Language";


function calcSum(a,b) {
    let x = parseInt(a);
    let y = parseInt(b);
    if (isNaN(x)){
        x = 0;
    }

    if (isNaN(y)){
        y = 0;
    }

    return x + y;
}

class StandingDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            standing_details: props.standing_details,
        }
    }


    render() {
        let DICT = Language.getDict();
        const { standing_details } = this.state;
        if (!standing_details) {
            return <span>hi</span>
        }
        return (
            [
                <tr style={{background: '#9CE6C1'}}>
                    <th/>
                    <th>{DICT.date}</th>
                    {/*<th>{DICT.exercise}</th>*/}
                    <th/>
                    <th>{DICT.points}</th>
                    {/*<th>{DICT.challenge}</th>*/}
                    {/*<th>{DICT.both}</th>*/}
                </tr>,
                standing_details.map((detail, i) => (
                        <tr key={i} style={{background: '#B3E2CA'}}>
                            <td/>
                            <td>
                                {detail.date}
                            </td>
                            {/*<td>*/}
                                {/*{detail.exercise}*/}
                            {/*</td>*/}
                            <td/>
                            <td>
                                {detail.challenge}
                            </td>
                            {/*<td>*/}
                                {/*{calcSum(detail.exercise, detail.challenge)}*/}
                            {/*</td>*/}
                        </tr>
                ))
                ]
        );

    }
}

export default StandingDetails;