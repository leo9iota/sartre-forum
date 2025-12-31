import { DateTime } from 'luxon';

export function relativeTime(date: string) {
    const datetime = DateTime.fromISO(date);
    return datetime.toRelative();
}
