const DICT = {
    rules: 'כללי התחרות',
    kids4_5: 'ילדים בני 4-5',
    white_orange_belts: 'ילדים בני 6+ חגורות לבנות וכתומות',
    blue_belts: 'חגורות כחולות',
    yellow_belts: 'חגורות צהובות',
    green_belts: 'חגורות ירוקות',
    kids6_9: 'ילדים בני 6-9',
    '10+': 'גילאים 10+',
    exercise: 'משימה',
    challenge: 'אתגר',
    both: 'ביחד',
    points: 'ציון',
    date: 'תאריך',
    time_till_the_end: 'זמן עד סוף המשימה: ',
    time_elapsed: 'המשימה נגמרה, נא להמתין למשימה הבאה',
    left: 'נשאר: ',
    standings: 'טבלת תוצאות',
    name: 'שם',
    city: 'עיר',
    total_points: 'ניקוד מצטבר',
    title: 'Corona Fight',
    stretching: 'חימום ומתיחות',
    results: 'תוצאות לפי מקצים',

    // youtube ids
    stretching_id: 'AD6igTFbiRE',
    rules_video_id: 'mE9TClvsmow',

    // kids4_5_chvideo: 'cTRwOvZxKyA',
    // white_orange_chvideo: 'cTRwOvZxKyA',
    // blue_chvideo: 'cTRwOvZxKyA',
    // yellow_chvideo: 'cTRwOvZxKyA',
    // green_chvideo: 'cTRwOvZxKyA',

    ch_video: 'uPOMjtna0YI',
    kids4_5_exvideo: 'jHb85qic370',
    white_orange_exvideo: 'eFxQ6Zmk1x4',
    blue_exvideo: 'eFxQ6Zmk1x4',
    yellow_exvideo: 'eFxQ6Zmk1x4',
    green_exvideo: 'eFxQ6Zmk1x4',

    end_date: Date.parse('2020-10-19 23:59:59'),


    timeStringBuilder : (days, hours, minutes, seconds) => {
        let seconds_str = "" + seconds;
        let minutes_str = "" + minutes;
        let hours_str = "" + hours;
        if (seconds < 10){
            seconds_str = "0" + seconds_str;
        }
        if (minutes < 10){
            minutes_str = "0" + minutes_str;
        }
        if (hours < 10){
            hours_str = "0" + hours_str;
        }

        let timeStr = hours_str + ':' + minutes_str + ':' + seconds_str;
        let daysStr = '';

        if (days === 1) {
            daysStr += 'יום אחד';
        } else {
            daysStr += days + ' ימים';
        }

        if (days === 0) {
            return timeStr
        }

        return daysStr + ' ו' + timeStr
    },

};

export {DICT};