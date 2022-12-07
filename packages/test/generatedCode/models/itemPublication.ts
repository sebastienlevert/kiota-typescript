import {ItemFacet} from './index';
import {DateOnly, Parsable} from '@microsoft/kiota-abstractions';

export interface ItemPublication extends ItemFacet, Partial<Parsable> {
    /** Description of the publication. */
    description?: string;
    /** Title of the publication. */
    displayName?: string;
    /** The date that the publication was published. */
    publishedDate?: DateOnly;
    /** Publication or publisher for the publication. */
    publisher?: string;
    /** URL referencing a thumbnail of the publication. */
    thumbnailUrl?: string;
    /** URL referencing the publication. */
    webUrl?: string;
}
