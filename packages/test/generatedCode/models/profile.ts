import {EducationalActivity, Entity, ItemAddress, ItemEmail, ItemPatent, ItemPhone, ItemPublication, LanguageProficiency, PersonAnnotation, PersonAnnualEvent, PersonAward, PersonCertification, PersonInterest, PersonName, PersonWebsite, ProjectParticipation, SkillProficiency, UserAccountInformation, WebAccount, WorkPosition} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Profile extends Entity, Partial<Parsable> {
    /** The account property */
    account?: UserAccountInformation[];
    /** Represents details of addresses associated with the user. */
    addresses?: ItemAddress[];
    /** Represents the details of meaningful dates associated with a person. */
    anniversaries?: PersonAnnualEvent[];
    /** Represents the details of awards or honors associated with a person. */
    awards?: PersonAward[];
    /** Represents the details of certifications associated with a person. */
    certifications?: PersonCertification[];
    /** Represents data that a user has supplied related to undergraduate, graduate, postgraduate or other educational activities. */
    educationalActivities?: EducationalActivity[];
    /** Represents detailed information about email addresses associated with the user. */
    emails?: ItemEmail[];
    /** Provides detailed information about interests the user has associated with themselves in various services. */
    interests?: PersonInterest[];
    /** Represents detailed information about languages that a user has added to their profile. */
    languages?: LanguageProficiency[];
    /** Represents the names a user has added to their profile. */
    names?: PersonName[];
    /** Represents notes that a user has added to their profile. */
    notes?: PersonAnnotation[];
    /** Represents patents that a user has added to their profile. */
    patents?: ItemPatent[];
    /** Represents detailed information about phone numbers associated with a user in various services. */
    phones?: ItemPhone[];
    /** Represents detailed information about work positions associated with a user's profile. */
    positions?: WorkPosition[];
    /** Represents detailed information about projects associated with a user. */
    projects?: ProjectParticipation[];
    /** Represents details of any publications a user has added to their profile. */
    publications?: ItemPublication[];
    /** Represents detailed information about skills associated with a user in various services. */
    skills?: SkillProficiency[];
    /** Represents web accounts the user has indicated they use or has added to their user profile. */
    webAccounts?: WebAccount[];
    /** Represents detailed information about websites associated with a user in various services. */
    websites?: PersonWebsite[];
}
