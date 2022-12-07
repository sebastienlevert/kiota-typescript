import {Extension, FollowupFlag, MultiValueLegacyExtendedProperty, OutlookItem, Phone, PhysicalAddress, ProfilePhoto, SingleValueLegacyExtendedProperty, TypedEmailAddress, Website} from './index';
import {DateOnly, Parsable} from '@microsoft/kiota-abstractions';

export interface Contact extends OutlookItem, Partial<Parsable> {
    /** The name of the contact's assistant. */
    assistantName?: string;
    /** The contact's birthday. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    birthday?: Date;
    /** The names of the contact's children. */
    children?: string[];
    /** The name of the contact's company. */
    companyName?: string;
    /** The contact's department. */
    department?: string;
    /** The contact's display name. You can specify the display name in a create or update operation. Note that later updates to other properties may cause an automatically generated value to overwrite the displayName value you have specified. To preserve a pre-existing value, always include it as displayName in an update operation. */
    displayName?: string;
    /** The contact's email addresses. */
    emailAddresses?: TypedEmailAddress[];
    /** The collection of open extensions defined for the contact. Nullable. */
    extensions?: Extension[];
    /** The name the contact is filed under. */
    fileAs?: string;
    /** The flag property */
    flag?: FollowupFlag;
    /** The contact's gender. */
    gender?: string;
    /** The contact's generation. */
    generation?: string;
    /** The contact's given name. */
    givenName?: string;
    /** The imAddresses property */
    imAddresses?: string[];
    /** The initials property */
    initials?: string;
    /** The isFavorite property */
    isFavorite?: boolean;
    /** The jobTitle property */
    jobTitle?: string;
    /** The manager property */
    manager?: string;
    /** The middleName property */
    middleName?: string;
    /** The collection of multi-value extended properties defined for the contact. Read-only. Nullable. */
    multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[];
    /** The nickName property */
    nickName?: string;
    /** The officeLocation property */
    officeLocation?: string;
    /** The parentFolderId property */
    parentFolderId?: string;
    /** The personalNotes property */
    personalNotes?: string;
    /** The phones property */
    phones?: Phone[];
    /** The photo property */
    photo?: ProfilePhoto;
    /** The postalAddresses property */
    postalAddresses?: PhysicalAddress[];
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
    /** The websites property */
    websites?: Website[];
    /** The weddingAnniversary property */
    weddingAnniversary?: DateOnly;
    /** The yomiCompanyName property */
    yomiCompanyName?: string;
    /** The yomiGivenName property */
    yomiGivenName?: string;
    /** The yomiSurname property */
    yomiSurname?: string;
}
