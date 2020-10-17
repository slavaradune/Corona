const DICT = {
    rules: 'Правила Соревнований',
    kids4_5: 'Дети 4-5 лет',
    white_orange_belts: 'Дети 6+ лет белые оранжевые пояса',
    blue_belts: 'Синие пояса',
    yellow_belts: 'Желтые пояса',
    green_belts: 'Зеленые пояса',
    kids6_9: 'Дети 6-9 лет',
    '10+': 'Возраст 10+ лет',
    exercise: 'Задание',
    challenge: 'Челлендж',
    both: 'Всего',
    points: 'Оценка',
    date: 'Число',
    time_till_the_end: 'Время до конца задания: ',
    time_elapsed: 'Задание окончено, просим подождать следующего задания',
    left: 'Осталось: ',
    standings: 'Турнирная таблица',
    name: 'Имя',
    city: 'Город',
    total_points: 'Набранные баллы',
    title: 'Corona Fight',
    stretching: 'Разминка и растяжки',
    results: 'Результаты по категориям',


    // youtube ids
    stretching_id: 'AD6igTFbiRE',
    rules_video_id: 'evChzZ4vBm0',

    // kids4_5_chvideo: '_WMcFZDH11E',
    // white_orange_chvideo: '_WMcFZDH11E',
    // blue_chvideo: '_WMcFZDH11E',
    // yellow_chvideo: '_WMcFZDH11E',
    // green_chvideo: '_WMcFZDH11E',

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

        if (days % 10 === 1 && days % 100 !== 11) {
            daysStr += days + ' день';
        } else if ((days % 10 === 2 && days % 100 !== 12) ||
            (days % 10 === 3 && days % 100 !== 13 || (days % 10 === 4 && days % 100 !== 14))) {
            daysStr += days + ' дня';
        } else {
            daysStr += days + ' дней';
        }

        if (days === 0) {
            return timeStr
        }

        return daysStr + ' и ' + timeStr
    },


};

export {DICT};