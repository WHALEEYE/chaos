import {format, parseISO} from 'date-fns';
import {Languages} from "../lib/enums";

export default function Date({dateString, lan}: { dateString: string, lan: Languages }) {
    const date = parseISO(dateString);
    const formatString = lan === Languages.CHN ? 'yyyy年M月d日' : 'LLLL d, yyyy';
    return <time dateTime={dateString}>{format(date, formatString)}</time>
}