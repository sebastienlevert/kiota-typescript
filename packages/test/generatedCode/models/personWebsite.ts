import {ItemFacet} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PersonWebsite extends ItemFacet, Partial<Parsable> {
    /** Contains categories a user has associated with the website (for example, personal, recipes). */
    categories?: string[];
    /** Contains a description of the website. */
    description?: string;
    /** Contains a friendly name for the website. */
    displayName?: string;
    /** The thumbnailUrl property */
    thumbnailUrl?: string;
    /** Contains a link to the website itself. */
    webUrl?: string;
}
