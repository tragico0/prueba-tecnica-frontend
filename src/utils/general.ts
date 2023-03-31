import numeral from 'numeral';
import Config from '../config.ts';

export function defaultPriceFormat (value: number|string) {
    return numeral(value).format(Config.formats.defaultPrice);
}
