import {CompanyDetail, ItemFacet, PositionDetail, RelatedPerson} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ProjectParticipation extends ItemFacet, Partial<Parsable> {
    /** Contains categories a user has associated with the project (for example, digital transformation, oil rig). */
    categories?: string[];
    /** The client property */
    client?: CompanyDetail;
    /** Contains experience scenario tags a user has associated with the interest. Allowed values in the collection are: askMeAbout, ableToMentor, wantsToLearn, wantsToImprove. */
    collaborationTags?: string[];
    /** Lists people that also worked on the project. */
    colleagues?: RelatedPerson[];
    /** The detail property */
    detail?: PositionDetail;
    /** Contains a friendly name for the project. */
    displayName?: string;
    /** The Person or people who sponsored the project. */
    sponsors?: RelatedPerson[];
    /** The thumbnailUrl property */
    thumbnailUrl?: string;
}
