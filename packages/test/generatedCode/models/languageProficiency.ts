import {ItemFacet} from './index';
import {LanguageProficiencyLevel} from './languageProficiencyLevel';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface LanguageProficiency extends ItemFacet, Partial<Parsable> {
    /** Contains the long-form name for the language. */
    displayName?: string;
    /** The proficiency property */
    proficiency?: LanguageProficiencyLevel;
    /** The reading property */
    reading?: LanguageProficiencyLevel;
    /** The spoken property */
    spoken?: LanguageProficiencyLevel;
    /** Contains the four-character BCP47 name for the language (en-US, no-NB, en-AU). */
    tag?: string;
    /** The thumbnailUrl property */
    thumbnailUrl?: string;
    /** The written property */
    written?: LanguageProficiencyLevel;
}
