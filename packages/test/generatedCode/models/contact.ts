import {EmailAddress, Extension, MultiValueLegacyExtendedProperty, OutlookItem, PhysicalAddress, ProfilePhoto, SingleValueLegacyExtendedProperty} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Contact extends OutlookItem, Partial<Parsable> {
    /** The name of the contact's assistant. */
    assistantName?: string;
    /** The contact's birthday. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    birthday?: Date;
    /** The contact's business address. */
    businessAddress?: PhysicalAddress;
    /** The business home page of the contact. */
    businessHomePage?: string;
    /** The contact's business phone numbers. */
    businessPhones?: string[];
    /** The names of the contact's children. */
    children?: string[];
    /** The name of the contact's company. */
    companyName?: string;
    /** The contact's department. */
    department?: string;
    /** The contact's display name. You can specify the display name in a create or update operation. Note that later updates to other properties may cause an automatically generated value to overwrite the displayName value you have specified. To preserve a pre-existing value, always include it as displayName in an update operation. */
    displayName?: string;
    /** The contact's email addresses. */
    emailAddresses?: EmailAddress[];
    /** The collection of open extensions defined for the contact. Read-only. Nullable. */
    extensions?: Extension[];
    /** The name the contact is filed under. */
    fileAs?: string;
    /** The contact's generation. */
    generation?: string;
    /** The contact's given name. */
    givenName?: string;
    /** The contact's home address. */
    homeAddress?: PhysicalAddress;
    /** The contact's home phone numbers. */
    homePhones?: string[];
    /** The imAddresses property */
    imAddresses?: string[];
    /** The initials property */
    initials?: string;
    /** The jobTitle property */
    jobTitle?: string;
    /** The manager property */
    manager?: string;
    /** The middleName property */
    middleName?: string;
    /** The mobilePhone property */
    mobilePhone?: string;
    /** The collection of multi-value extended properties defined for the contact. Read-only. Nullable. */
    multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[];
    /** The nickName property */
    nickName?: string;
    /** The officeLocation property */
    officeLocation?: string;
    /** The otherAddress property */
    otherAddress?: PhysicalAddress;
    /** The parentFolderId property */
    parentFolderId?: string;
    /** The personalNotes property */
    personalNotes?: string;
    /** Optional contact picture. You can get or set a photo for a contact. */
    photo?: ProfilePhoto;
    /** The profession property */
    profession?: string;
    /** The collection of single-value extended properties defined for the contact. Read-only. Nullable. */
    singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[];
    /** The spouseName property */
    spouseName?: string;
    /** The surname property */
    surname?: string;
    /** The title property */
    title?: string;
    /** The yomiCompanyName property */
    yomiCompanyName?: string;
    /** The yomiGivenName property */
    yomiGivenName?: string;
    /** The yomiSurname property */
    yomiSurname?: string;
}
