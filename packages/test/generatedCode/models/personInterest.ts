import {ItemFacet} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PersonInterest extends ItemFacet, Partial<Parsable> {
    /** Contains categories a user has associated with the interest (for example, personal, recipies). */
    categories?: string[];
    /** Contains experience scenario tags a user has associated with the interest. Allowed values in the collection are: askMeAbout, ableToMentor, wantsToLearn, wantsToImprove. */
    collaborationTags?: string[];
    /** Contains a description of the interest. */
    description?: string;
    /** Contains a friendly name for the interest. */
    displayName?: string;
    /** The thumbnailUrl property */
    thumbnailUrl?: string;
    /** Contains a link to a web page or resource about the interest. */
    webUrl?: string;
}
