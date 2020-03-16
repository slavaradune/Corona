import config from '../config';

export function load(callback) {
    window.gapi.client.load("sheets", "v4", () => {
        window.gapi.client.sheets.spreadsheets.values
            .get({
                spreadsheetId: config.spreadsheetId,
                range: "Sheet1!A2:F"
            })
            .then(
                response => {
                    const data = response.result.values;
                    const standings = data.map(r => ({
                        name: r[0],
                        age: r[1],
                        kyu: r[2],
                        city: r[3],
                        total_points: r[4],
                    })) || [];
                    callback({
                        standings: standings
                    });
                },
                response => {
                    callback(false, response.result.error);
                }
            );
    });
}