import {IpRange} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IPv4Range extends IpRange, Partial<Parsable> {
    /** Lower address. */
    lowerAddress?: string;
    /** Upper address. */
    upperAddress?: string;
}
