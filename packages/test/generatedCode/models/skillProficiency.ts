import {ItemFacet} from './index';
import {SkillProficiencyLevel} from './skillProficiencyLevel';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SkillProficiency extends ItemFacet, Partial<Parsable> {
    /** Contains categories a user has associated with the skill (for example, personal, professional, hobby). */
    categories?: string[];
    /** Contains experience scenario tags a user has associated with the interest. Allowed values in the collection are: askMeAbout, ableToMentor, wantsToLearn, wantsToImprove. */
    collaborationTags?: string[];
    /** Contains a friendly name for the skill. */
    displayName?: string;
    /** The proficiency property */
    proficiency?: SkillProficiencyLevel;
    /** The thumbnailUrl property */
    thumbnailUrl?: string;
    /** Contains a link to an information source about the skill. */
    webUrl?: string;
}
