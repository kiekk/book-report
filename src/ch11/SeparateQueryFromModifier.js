export function alertForMiscreant(people, alarm) {
    for (const p of people) {
        if (p === 'Don') {
            setOffAlarms(alarm, p);
            return;
        }
        if (p === 'John') {
            setOffAlarms(alarm, p);
            return;
        }
    }
    return '';
}

function setOffAlarms(alarm, p) {
    alarm.setOff("Found Miscreant " + p);
}

export function findMiscreant(people, alarm) {
    for (const p of people) {
        if (p === 'Don') {
            return 'Don';
        }
        if (p === 'John') {
            return 'John';
        }
    }
    return '';
}