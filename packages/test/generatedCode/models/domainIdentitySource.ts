import {IdentitySource} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DomainIdentitySource extends IdentitySource, Partial<Parsable> {
    /** The name of the identity source, typically also the domain name. Read only. */
    displayName?: string;
    /** The domain name. Read only. */
    domainName?: string;
}
