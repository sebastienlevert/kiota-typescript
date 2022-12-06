import {DirectoryObject} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Contract extends DirectoryObject, Partial<Parsable> {
    /** Type of contract. Possible values are:  SyndicationPartner, BreadthPartner, ResellerPartner. See more in the table below. */
    contractType?: string;
    /** The unique identifier for the customer tenant referenced by this partnership. Corresponds to the id property of the customer tenant's organization resource. */
    customerId?: string;
    /** A copy of the customer tenant's default domain name. The copy is made when the partnership with the customer is established. It is not automatically updated if the customer tenant's default domain name changes. */
    defaultDomainName?: string;
    /** A copy of the customer tenant's display name. The copy is made when the partnership with the customer is established. It is not automatically updated if the customer tenant's display name changes. */
    displayName?: string;
}
