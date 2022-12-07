import {createExtensionFromDiscriminatorValue} from './createExtensionFromDiscriminatorValue';
import {createFollowupFlagFromDiscriminatorValue} from './createFollowupFlagFromDiscriminatorValue';
import {createMultiValueLegacyExtendedPropertyFromDiscriminatorValue} from './createMultiValueLegacyExtendedPropertyFromDiscriminatorValue';
import {createPhoneFromDiscriminatorValue} from './createPhoneFromDiscriminatorValue';
import {createPhysicalAddressFromDiscriminatorValue} from './createPhysicalAddressFromDiscriminatorValue';
import {createProfilePhotoFromDiscriminatorValue} from './createProfilePhotoFromDiscriminatorValue';
import {createSingleValueLegacyExtendedPropertyFromDiscriminatorValue} from './createSingleValueLegacyExtendedPropertyFromDiscriminatorValue';
import {createTypedEmailAddressFromDiscriminatorValue} from './createTypedEmailAddressFromDiscriminatorValue';
import {createWebsiteFromDiscriminatorValue} from './createWebsiteFromDiscriminatorValue';
import {Extension, FollowupFlag, MultiValueLegacyExtendedProperty, OutlookItem, Phone, PhysicalAddress, ProfilePhoto, SingleValueLegacyExtendedProperty, TypedEmailAddress, Website} from './index';
import {DateOnly, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Contact extends OutlookItem implements Parsable {
    /** The name of the contact's assistant. */
    private _assistantName?: string | undefined;
    /** The contact's birthday. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    private _birthday?: Date | undefined;
    /** The names of the contact's children. */
    private _children?: string[] | undefined;
    /** The name of the contact's company. */
    private _companyName?: string | undefined;
    /** The contact's department. */
    private _department?: string | undefined;
    /** The contact's display name. You can specify the display name in a create or update operation. Note that later updates to other properties may cause an automatically generated value to overwrite the displayName value you have specified. To preserve a pre-existing value, always include it as displayName in an update operation. */
    private _displayName?: string | undefined;
    /** The contact's email addresses. */
    private _emailAddresses?: TypedEmailAddress[] | undefined;
    /** The collection of open extensions defined for the contact. Nullable. */
    private _extensions?: Extension[] | undefined;
    /** The name the contact is filed under. */
    private _fileAs?: string | undefined;
    /** The flag property */
    private _flag?: FollowupFlag | undefined;
    /** The contact's gender. */
    private _gender?: string | undefined;
    /** The contact's generation. */
    private _generation?: string | undefined;
    /** The contact's given name. */
    private _givenName?: string | undefined;
    /** The imAddresses property */
    private _imAddresses?: string[] | undefined;
    /** The initials property */
    private _initials?: string | undefined;
    /** The isFavorite property */
    private _isFavorite?: boolean | undefined;
    /** The jobTitle property */
    private _jobTitle?: string | undefined;
    /** The manager property */
    private _manager?: string | undefined;
    /** The middleName property */
    private _middleName?: string | undefined;
    /** The collection of multi-value extended properties defined for the contact. Read-only. Nullable. */
    private _multiValueExtendedProperties?: MultiValueLegacyExtendedProperty[] | undefined;
    /** The nickName property */
    private _nickName?: string | undefined;
    /** The officeLocation property */
    private _officeLocation?: string | undefined;
    /** The parentFolderId property */
    private _parentFolderId?: string | undefined;
    /** The personalNotes property */
    private _personalNotes?: string | undefined;
    /** The phones property */
    private _phones?: Phone[] | undefined;
    /** The photo property */
    private _photo?: ProfilePhoto | undefined;
    /** The postalAddresses property */
    private _postalAddresses?: PhysicalAddress[] | undefined;
    /** The profession property */
    private _profession?: string | undefined;
    /** The collection of single-value extended properties defined for the contact. Read-only. Nullable. */
    private _singleValueExtendedProperties?: SingleValueLegacyExtendedProperty[] | undefined;
    /** The spouseName property */
    private _spouseName?: string | undefined;
    /** The surname property */
    private _surname?: string | undefined;
    /** The title property */
    private _title?: string | undefined;
    /** The websites property */
    private _websites?: Website[] | undefined;
    /** The weddingAnniversary property */
    private _weddingAnniversary?: DateOnly | undefined;
    /** The yomiCompanyName property */
    private _yomiCompanyName?: string | undefined;
    /** The yomiGivenName property */
    private _yomiGivenName?: string | undefined;
    /** The yomiSurname property */
    private _yomiSurname?: string | undefined;
    /**
     * Gets the assistantName property value. The name of the contact's assistant.
     * @returns a string
     */
    public get assistantName() {
        return this._assistantName;
    };
    /**
     * Sets the assistantName property value. The name of the contact's assistant.
     * @param value Value to set for the assistantName property.
     */
    public set assistantName(value: string | undefined) {
        this._assistantName = value;
    };
    /**
     * Gets the birthday property value. The contact's birthday. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @returns a Date
     */
    public get birthday() {
        return this._birthday;
    };
    /**
     * Sets the birthday property value. The contact's birthday. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z
     * @param value Value to set for the birthday property.
     */
    public set birthday(value: Date | undefined) {
        this._birthday = value;
    };
    /**
     * Gets the children property value. The names of the contact's children.
     * @returns a string
     */
    public get children() {
        return this._children;
    };
    /**
     * Sets the children property value. The names of the contact's children.
     * @param value Value to set for the children property.
     */
    public set children(value: string[] | undefined) {
        this._children = value;
    };
    /**
     * Gets the companyName property value. The name of the contact's company.
     * @returns a string
     */
    public get companyName() {
        return this._companyName;
    };
    /**
     * Sets the companyName property value. The name of the contact's company.
     * @param value Value to set for the companyName property.
     */
    public set companyName(value: string | undefined) {
        this._companyName = value;
    };
    /**
     * Instantiates a new contact and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the department property value. The contact's department.
     * @returns a string
     */
    public get department() {
        return this._department;
    };
    /**
     * Sets the department property value. The contact's department.
     * @param value Value to set for the department property.
     */
    public set department(value: string | undefined) {
        this._department = value;
    };
    /**
     * Gets the displayName property value. The contact's display name. You can specify the display name in a create or update operation. Note that later updates to other properties may cause an automatically generated value to overwrite the displayName value you have specified. To preserve a pre-existing value, always include it as displayName in an update operation.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The contact's display name. You can specify the display name in a create or update operation. Note that later updates to other properties may cause an automatically generated value to overwrite the displayName value you have specified. To preserve a pre-existing value, always include it as displayName in an update operation.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * Gets the emailAddresses property value. The contact's email addresses.
     * @returns a typedEmailAddress
     */
    public get emailAddresses() {
        return this._emailAddresses;
    };
    /**
     * Sets the emailAddresses property value. The contact's email addresses.
     * @param value Value to set for the emailAddresses property.
     */
    public set emailAddresses(value: TypedEmailAddress[] | undefined) {
        this._emailAddresses = value;
    };
    /**
     * Gets the extensions property value. The collection of open extensions defined for the contact. Nullable.
     * @returns a extension
     */
    public get extensions() {
        return this._extensions;
    };
    /**
     * Sets the extensions property value. The collection of open extensions defined for the contact. Nullable.
     * @param value Value to set for the extensions property.
     */
    public set extensions(value: Extension[] | undefined) {
        this._extensions = value;
    };
    /**
     * Gets the fileAs property value. The name the contact is filed under.
     * @returns a string
     */
    public get fileAs() {
        return this._fileAs;
    };
    /**
     * Sets the fileAs property value. The name the contact is filed under.
     * @param value Value to set for the fileAs property.
     */
    public set fileAs(value: string | undefined) {
        this._fileAs = value;
    };
    /**
     * Gets the flag property value. The flag property
     * @returns a followupFlag
     */
    public get flag() {
        return this._flag;
    };
    /**
     * Sets the flag property value. The flag property
     * @param value Value to set for the flag property.
     */
    public set flag(value: FollowupFlag | undefined) {
        this._flag = value;
    };
    /**
     * Gets the gender property value. The contact's gender.
     * @returns a string
     */
    public get gender() {
        return this._gender;
    };
    /**
     * Sets the gender property value. The contact's gender.
     * @param value Value to set for the gender property.
     */
    public set gender(value: string | undefined) {
        this._gender = value;
    };
    /**
     * Gets the generation property value. The contact's generation.
     * @returns a string
     */
    public get generation() {
        return this._generation;
    };
    /**
     * Sets the generation property value. The contact's generation.
     * @param value Value to set for the generation property.
     */
    public set generation(value: string | undefined) {
        this._generation = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "assistantName": n => { this.assistantName = n.getStringValue(); },
            "birthday": n => { this.birthday = n.getDateValue(); },
            "children": n => { this.children = n.getCollectionOfPrimitiveValues<string>(); },
            "companyName": n => { this.companyName = n.getStringValue(); },
            "department": n => { this.department = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "emailAddresses": n => { this.emailAddresses = n.getCollectionOfObjectValues<TypedEmailAddress>(createTypedEmailAddressFromDiscriminatorValue); },
            "extensions": n => { this.extensions = n.getCollectionOfObjectValues<Extension>(createExtensionFromDiscriminatorValue); },
            "fileAs": n => { this.fileAs = n.getStringValue(); },
            "flag": n => { this.flag = n.getObjectValue<FollowupFlag>(createFollowupFlagFromDiscriminatorValue); },
            "gender": n => { this.gender = n.getStringValue(); },
            "generation": n => { this.generation = n.getStringValue(); },
            "givenName": n => { this.givenName = n.getStringValue(); },
            "imAddresses": n => { this.imAddresses = n.getCollectionOfPrimitiveValues<string>(); },
            "initials": n => { this.initials = n.getStringValue(); },
            "isFavorite": n => { this.isFavorite = n.getBooleanValue(); },
            "jobTitle": n => { this.jobTitle = n.getStringValue(); },
            "manager": n => { this.manager = n.getStringValue(); },
            "middleName": n => { this.middleName = n.getStringValue(); },
            "multiValueExtendedProperties": n => { this.multiValueExtendedProperties = n.getCollectionOfObjectValues<MultiValueLegacyExtendedProperty>(createMultiValueLegacyExtendedPropertyFromDiscriminatorValue); },
            "nickName": n => { this.nickName = n.getStringValue(); },
            "officeLocation": n => { this.officeLocation = n.getStringValue(); },
            "parentFolderId": n => { this.parentFolderId = n.getStringValue(); },
            "personalNotes": n => { this.personalNotes = n.getStringValue(); },
            "phones": n => { this.phones = n.getCollectionOfObjectValues<Phone>(createPhoneFromDiscriminatorValue); },
            "photo": n => { this.photo = n.getObjectValue<ProfilePhoto>(createProfilePhotoFromDiscriminatorValue); },
            "postalAddresses": n => { this.postalAddresses = n.getCollectionOfObjectValues<PhysicalAddress>(createPhysicalAddressFromDiscriminatorValue); },
            "profession": n => { this.profession = n.getStringValue(); },
            "singleValueExtendedProperties": n => { this.singleValueExtendedProperties = n.getCollectionOfObjectValues<SingleValueLegacyExtendedProperty>(createSingleValueLegacyExtendedPropertyFromDiscriminatorValue); },
            "spouseName": n => { this.spouseName = n.getStringValue(); },
            "surname": n => { this.surname = n.getStringValue(); },
            "title": n => { this.title = n.getStringValue(); },
            "websites": n => { this.websites = n.getCollectionOfObjectValues<Website>(createWebsiteFromDiscriminatorValue); },
            "weddingAnniversary": n => { this.weddingAnniversary = n.getDateOnlyValue(); },
            "yomiCompanyName": n => { this.yomiCompanyName = n.getStringValue(); },
            "yomiGivenName": n => { this.yomiGivenName = n.getStringValue(); },
            "yomiSurname": n => { this.yomiSurname = n.getStringValue(); },
        };
    };
    /**
     * Gets the givenName property value. The contact's given name.
     * @returns a string
     */
    public get givenName() {
        return this._givenName;
    };
    /**
     * Sets the givenName property value. The contact's given name.
     * @param value Value to set for the givenName property.
     */
    public set givenName(value: string | undefined) {
        this._givenName = value;
    };
    /**
     * Gets the imAddresses property value. The imAddresses property
     * @returns a string
     */
    public get imAddresses() {
        return this._imAddresses;
    };
    /**
     * Sets the imAddresses property value. The imAddresses property
     * @param value Value to set for the imAddresses property.
     */
    public set imAddresses(value: string[] | undefined) {
        this._imAddresses = value;
    };
    /**
     * Gets the initials property value. The initials property
     * @returns a string
     */
    public get initials() {
        return this._initials;
    };
    /**
     * Sets the initials property value. The initials property
     * @param value Value to set for the initials property.
     */
    public set initials(value: string | undefined) {
        this._initials = value;
    };
    /**
     * Gets the isFavorite property value. The isFavorite property
     * @returns a boolean
     */
    public get isFavorite() {
        return this._isFavorite;
    };
    /**
     * Sets the isFavorite property value. The isFavorite property
     * @param value Value to set for the isFavorite property.
     */
    public set isFavorite(value: boolean | undefined) {
        this._isFavorite = value;
    };
    /**
     * Gets the jobTitle property value. The jobTitle property
     * @returns a string
     */
    public get jobTitle() {
        return this._jobTitle;
    };
    /**
     * Sets the jobTitle property value. The jobTitle property
     * @param value Value to set for the jobTitle property.
     */
    public set jobTitle(value: string | undefined) {
        this._jobTitle = value;
    };
    /**
     * Gets the manager property value. The manager property
     * @returns a string
     */
    public get manager() {
        return this._manager;
    };
    /**
     * Sets the manager property value. The manager property
     * @param value Value to set for the manager property.
     */
    public set manager(value: string | undefined) {
        this._manager = value;
    };
    /**
     * Gets the middleName property value. The middleName property
     * @returns a string
     */
    public get middleName() {
        return this._middleName;
    };
    /**
     * Sets the middleName property value. The middleName property
     * @param value Value to set for the middleName property.
     */
    public set middleName(value: string | undefined) {
        this._middleName = value;
    };
    /**
     * Gets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the contact. Read-only. Nullable.
     * @returns a multiValueLegacyExtendedProperty
     */
    public get multiValueExtendedProperties() {
        return this._multiValueExtendedProperties;
    };
    /**
     * Sets the multiValueExtendedProperties property value. The collection of multi-value extended properties defined for the contact. Read-only. Nullable.
     * @param value Value to set for the multiValueExtendedProperties property.
     */
    public set multiValueExtendedProperties(value: MultiValueLegacyExtendedProperty[] | undefined) {
        this._multiValueExtendedProperties = value;
    };
    /**
     * Gets the nickName property value. The nickName property
     * @returns a string
     */
    public get nickName() {
        return this._nickName;
    };
    /**
     * Sets the nickName property value. The nickName property
     * @param value Value to set for the nickName property.
     */
    public set nickName(value: string | undefined) {
        this._nickName = value;
    };
    /**
     * Gets the officeLocation property value. The officeLocation property
     * @returns a string
     */
    public get officeLocation() {
        return this._officeLocation;
    };
    /**
     * Sets the officeLocation property value. The officeLocation property
     * @param value Value to set for the officeLocation property.
     */
    public set officeLocation(value: string | undefined) {
        this._officeLocation = value;
    };
    /**
     * Gets the parentFolderId property value. The parentFolderId property
     * @returns a string
     */
    public get parentFolderId() {
        return this._parentFolderId;
    };
    /**
     * Sets the parentFolderId property value. The parentFolderId property
     * @param value Value to set for the parentFolderId property.
     */
    public set parentFolderId(value: string | undefined) {
        this._parentFolderId = value;
    };
    /**
     * Gets the personalNotes property value. The personalNotes property
     * @returns a string
     */
    public get personalNotes() {
        return this._personalNotes;
    };
    /**
     * Sets the personalNotes property value. The personalNotes property
     * @param value Value to set for the personalNotes property.
     */
    public set personalNotes(value: string | undefined) {
        this._personalNotes = value;
    };
    /**
     * Gets the phones property value. The phones property
     * @returns a phone
     */
    public get phones() {
        return this._phones;
    };
    /**
     * Sets the phones property value. The phones property
     * @param value Value to set for the phones property.
     */
    public set phones(value: Phone[] | undefined) {
        this._phones = value;
    };
    /**
     * Gets the photo property value. The photo property
     * @returns a profilePhoto
     */
    public get photo() {
        return this._photo;
    };
    /**
     * Sets the photo property value. The photo property
     * @param value Value to set for the photo property.
     */
    public set photo(value: ProfilePhoto | undefined) {
        this._photo = value;
    };
    /**
     * Gets the postalAddresses property value. The postalAddresses property
     * @returns a physicalAddress
     */
    public get postalAddresses() {
        return this._postalAddresses;
    };
    /**
     * Sets the postalAddresses property value. The postalAddresses property
     * @param value Value to set for the postalAddresses property.
     */
    public set postalAddresses(value: PhysicalAddress[] | undefined) {
        this._postalAddresses = value;
    };
    /**
     * Gets the profession property value. The profession property
     * @returns a string
     */
    public get profession() {
        return this._profession;
    };
    /**
     * Sets the profession property value. The profession property
     * @param value Value to set for the profession property.
     */
    public set profession(value: string | undefined) {
        this._profession = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("assistantName", this.assistantName);
        writer.writeDateValue("birthday", this.birthday);
        writer.writeCollectionOfPrimitiveValues<string>("children", this.children);
        writer.writeStringValue("companyName", this.companyName);
        writer.writeStringValue("department", this.department);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeCollectionOfObjectValues<TypedEmailAddress>("emailAddresses", this.emailAddresses);
        writer.writeCollectionOfObjectValues<Extension>("extensions", this.extensions);
        writer.writeStringValue("fileAs", this.fileAs);
        writer.writeObjectValue<FollowupFlag>("flag", this.flag);
        writer.writeStringValue("gender", this.gender);
        writer.writeStringValue("generation", this.generation);
        writer.writeStringValue("givenName", this.givenName);
        writer.writeCollectionOfPrimitiveValues<string>("imAddresses", this.imAddresses);
        writer.writeStringValue("initials", this.initials);
        writer.writeBooleanValue("isFavorite", this.isFavorite);
        writer.writeStringValue("jobTitle", this.jobTitle);
        writer.writeStringValue("manager", this.manager);
        writer.writeStringValue("middleName", this.middleName);
        writer.writeCollectionOfObjectValues<MultiValueLegacyExtendedProperty>("multiValueExtendedProperties", this.multiValueExtendedProperties);
        writer.writeStringValue("nickName", this.nickName);
        writer.writeStringValue("officeLocation", this.officeLocation);
        writer.writeStringValue("parentFolderId", this.parentFolderId);
        writer.writeStringValue("personalNotes", this.personalNotes);
        writer.writeCollectionOfObjectValues<Phone>("phones", this.phones);
        writer.writeObjectValue<ProfilePhoto>("photo", this.photo);
        writer.writeCollectionOfObjectValues<PhysicalAddress>("postalAddresses", this.postalAddresses);
        writer.writeStringValue("profession", this.profession);
        writer.writeCollectionOfObjectValues<SingleValueLegacyExtendedProperty>("singleValueExtendedProperties", this.singleValueExtendedProperties);
        writer.writeStringValue("spouseName", this.spouseName);
        writer.writeStringValue("surname", this.surname);
        writer.writeStringValue("title", this.title);
        writer.writeCollectionOfObjectValues<Website>("websites", this.websites);
        writer.writeDateOnlyValue("weddingAnniversary", this.weddingAnniversary);
        writer.writeStringValue("yomiCompanyName", this.yomiCompanyName);
        writer.writeStringValue("yomiGivenName", this.yomiGivenName);
        writer.writeStringValue("yomiSurname", this.yomiSurname);
    };
    /**
     * Gets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the contact. Read-only. Nullable.
     * @returns a singleValueLegacyExtendedProperty
     */
    public get singleValueExtendedProperties() {
        return this._singleValueExtendedProperties;
    };
    /**
     * Sets the singleValueExtendedProperties property value. The collection of single-value extended properties defined for the contact. Read-only. Nullable.
     * @param value Value to set for the singleValueExtendedProperties property.
     */
    public set singleValueExtendedProperties(value: SingleValueLegacyExtendedProperty[] | undefined) {
        this._singleValueExtendedProperties = value;
    };
    /**
     * Gets the spouseName property value. The spouseName property
     * @returns a string
     */
    public get spouseName() {
        return this._spouseName;
    };
    /**
     * Sets the spouseName property value. The spouseName property
     * @param value Value to set for the spouseName property.
     */
    public set spouseName(value: string | undefined) {
        this._spouseName = value;
    };
    /**
     * Gets the surname property value. The surname property
     * @returns a string
     */
    public get surname() {
        return this._surname;
    };
    /**
     * Sets the surname property value. The surname property
     * @param value Value to set for the surname property.
     */
    public set surname(value: string | undefined) {
        this._surname = value;
    };
    /**
     * Gets the title property value. The title property
     * @returns a string
     */
    public get title() {
        return this._title;
    };
    /**
     * Sets the title property value. The title property
     * @param value Value to set for the title property.
     */
    public set title(value: string | undefined) {
        this._title = value;
    };
    /**
     * Gets the websites property value. The websites property
     * @returns a website
     */
    public get websites() {
        return this._websites;
    };
    /**
     * Sets the websites property value. The websites property
     * @param value Value to set for the websites property.
     */
    public set websites(value: Website[] | undefined) {
        this._websites = value;
    };
    /**
     * Gets the weddingAnniversary property value. The weddingAnniversary property
     * @returns a DateOnly
     */
    public get weddingAnniversary() {
        return this._weddingAnniversary;
    };
    /**
     * Sets the weddingAnniversary property value. The weddingAnniversary property
     * @param value Value to set for the weddingAnniversary property.
     */
    public set weddingAnniversary(value: DateOnly | undefined) {
        this._weddingAnniversary = value;
    };
    /**
     * Gets the yomiCompanyName property value. The yomiCompanyName property
     * @returns a string
     */
    public get yomiCompanyName() {
        return this._yomiCompanyName;
    };
    /**
     * Sets the yomiCompanyName property value. The yomiCompanyName property
     * @param value Value to set for the yomiCompanyName property.
     */
    public set yomiCompanyName(value: string | undefined) {
        this._yomiCompanyName = value;
    };
    /**
     * Gets the yomiGivenName property value. The yomiGivenName property
     * @returns a string
     */
    public get yomiGivenName() {
        return this._yomiGivenName;
    };
    /**
     * Sets the yomiGivenName property value. The yomiGivenName property
     * @param value Value to set for the yomiGivenName property.
     */
    public set yomiGivenName(value: string | undefined) {
        this._yomiGivenName = value;
    };
    /**
     * Gets the yomiSurname property value. The yomiSurname property
     * @returns a string
     */
    public get yomiSurname() {
        return this._yomiSurname;
    };
    /**
     * Sets the yomiSurname property value. The yomiSurname property
     * @param value Value to set for the yomiSurname property.
     */
    public set yomiSurname(value: string | undefined) {
        this._yomiSurname = value;
    };
}
