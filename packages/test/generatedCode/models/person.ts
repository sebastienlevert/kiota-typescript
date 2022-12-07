import {Entity, Location, PersonDataSource, Phone, RankedEmailAddress, Website} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Person extends Entity, Partial<Parsable> {
    /** The person's birthday. */
    birthday?: string;
    /** The name of the person's company. */
    companyName?: string;
    /** The person's department. */
    department?: string;
    /** The person's display name. */
    displayName?: string;
    /** The person's email addresses. */
    emailAddresses?: RankedEmailAddress[];
    /** The person's given name. */
    givenName?: string;
    /** true if the user has flagged this person as a favorite. */
    isFavorite?: boolean;
    /** The type of mailbox that is represented by the person's email address. */
    mailboxType?: string;
    /** The location of the person's office. */
    officeLocation?: string;
    /** Free-form notes that the user has taken about this person. */
    personNotes?: string;
    /** The type of person, for example distribution list. */
    personType?: string;
    /** The person's phone numbers. */
    phones?: Phone[];
    /** The person's addresses. */
    postalAddresses?: Location[];
    /** The person's profession. */
    profession?: string;
    /** The sources the user data comes from, for example Directory or Outlook Contacts. */
    sources?: PersonDataSource[];
    /** The person's surname. */
    surname?: string;
    /** The person's title. */
    title?: string;
    /** The user principal name (UPN) of the person. The UPN is an Internet-style login name for the person based on the Internet standard RFC 822. By convention, this should map to the person's email name. The general format is alias@domain. */
    userPrincipalName?: string;
    /** The person's websites. */
    websites?: Website[];
    /** The phonetic Japanese name of the person's company. */
    yomiCompany?: string;
}
