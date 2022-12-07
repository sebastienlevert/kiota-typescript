import {ItemFacet} from './index';
import {DateOnly, Parsable} from '@microsoft/kiota-abstractions';

export interface PersonAward extends ItemFacet, Partial<Parsable> {
    /** Descpription of the award or honor. */
    description?: string;
    /** Name of the award or honor. */
    displayName?: string;
    /** The date that the award or honor was granted. */
    issuedDate?: DateOnly;
    /** Authority which granted the award or honor. */
    issuingAuthority?: string;
    /** URL referencing a thumbnail of the award or honor. */
    thumbnailUrl?: string;
    /** URL referencing the award or honor. */
    webUrl?: string;
}
