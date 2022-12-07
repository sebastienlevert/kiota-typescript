import {ItemFacet} from './index';
import {DateOnly, Parsable} from '@microsoft/kiota-abstractions';

export interface ItemPatent extends ItemFacet, Partial<Parsable> {
    /** Descpription of the patent or filing. */
    description?: string;
    /** Title of the patent or filing. */
    displayName?: string;
    /** Indicates the patent is pending. */
    isPending?: boolean;
    /** The date that the patent was granted. */
    issuedDate?: DateOnly;
    /** Authority which granted the patent. */
    issuingAuthority?: string;
    /** The patent number. */
    number?: string;
    /** URL referencing the patent or filing. */
    webUrl?: string;
}
