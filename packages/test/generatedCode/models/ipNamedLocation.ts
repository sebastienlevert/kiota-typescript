import {IpRange, NamedLocation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IpNamedLocation extends NamedLocation, Partial<Parsable> {
    /** List of IP address ranges in IPv4 CIDR format (e.g. 1.2.3.4/32) or any allowable IPv6 format from IETF RFC596. Required. */
    ipRanges?: IpRange[];
    /** true if this location is explicitly trusted. Optional. Default value is false. */
    isTrusted?: boolean;
}
