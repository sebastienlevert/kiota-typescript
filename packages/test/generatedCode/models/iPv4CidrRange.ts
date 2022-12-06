import {IpRange} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IPv4CidrRange extends IpRange, Partial<Parsable> {
    /** IPv4 address in CIDR notation. Not nullable. */
    cidrAddress?: string;
}
