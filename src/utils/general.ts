import { get } from 'lodash';
import numeral from 'numeral';
import Config from '../config.ts';
import {RoleCodeLabel} from './enums';

export function defaultPriceFormat (value: number|string) {
    return numeral(value).format(Config.formats.defaultPrice);
}

export function getDefaultRoleCodeLabel (name: string) {
    return get(RoleCodeLabel, `default.${name}`);
}
