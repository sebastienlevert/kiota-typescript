import {IpRange} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IPv6CidrRange extends IpRange, Partial<Parsable> {
    /** IPv6 address in CIDR notation. Not nullable. */
    cidrAddress?: string;
}
