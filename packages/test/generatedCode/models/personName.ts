import {ItemFacet, PersonNamePronounciation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PersonName extends ItemFacet, Partial<Parsable> {
    /** Provides an ordered rendering of firstName and lastName depending on the locale of the user or their device. */
    displayName?: string;
    /** First name of the user. */
    first?: string;
    /** Initials of the user. */
    initials?: string;
    /** Contains the name for the language (en-US, no-NB, en-AU) following IETF BCP47 format. */
    languageTag?: string;
    /** Last name of the user. */
    last?: string;
    /** Maiden name of the user. */
    maiden?: string;
    /** Middle name of the user. */
    middle?: string;
    /** Nickname of the user. */
    nickname?: string;
    /** The pronunciation property */
    pronunciation?: PersonNamePronounciation;
    /** Designators used after the users name (eg: PhD.) */
    suffix?: string;
    /** Honorifics used to prefix a users name (eg: Dr, Sir, Madam, Mrs.) */
    title?: string;
}
