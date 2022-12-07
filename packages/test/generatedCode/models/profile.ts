import {createEducationalActivityFromDiscriminatorValue} from './createEducationalActivityFromDiscriminatorValue';
import {createItemAddressFromDiscriminatorValue} from './createItemAddressFromDiscriminatorValue';
import {createItemEmailFromDiscriminatorValue} from './createItemEmailFromDiscriminatorValue';
import {createItemPatentFromDiscriminatorValue} from './createItemPatentFromDiscriminatorValue';
import {createItemPhoneFromDiscriminatorValue} from './createItemPhoneFromDiscriminatorValue';
import {createItemPublicationFromDiscriminatorValue} from './createItemPublicationFromDiscriminatorValue';
import {createLanguageProficiencyFromDiscriminatorValue} from './createLanguageProficiencyFromDiscriminatorValue';
import {createPersonAnnotationFromDiscriminatorValue} from './createPersonAnnotationFromDiscriminatorValue';
import {createPersonAnnualEventFromDiscriminatorValue} from './createPersonAnnualEventFromDiscriminatorValue';
import {createPersonAwardFromDiscriminatorValue} from './createPersonAwardFromDiscriminatorValue';
import {createPersonCertificationFromDiscriminatorValue} from './createPersonCertificationFromDiscriminatorValue';
import {createPersonInterestFromDiscriminatorValue} from './createPersonInterestFromDiscriminatorValue';
import {createPersonNameFromDiscriminatorValue} from './createPersonNameFromDiscriminatorValue';
import {createPersonWebsiteFromDiscriminatorValue} from './createPersonWebsiteFromDiscriminatorValue';
import {createProjectParticipationFromDiscriminatorValue} from './createProjectParticipationFromDiscriminatorValue';
import {createSkillProficiencyFromDiscriminatorValue} from './createSkillProficiencyFromDiscriminatorValue';
import {createUserAccountInformationFromDiscriminatorValue} from './createUserAccountInformationFromDiscriminatorValue';
import {createWebAccountFromDiscriminatorValue} from './createWebAccountFromDiscriminatorValue';
import {createWorkPositionFromDiscriminatorValue} from './createWorkPositionFromDiscriminatorValue';
import {EducationalActivity, Entity, ItemAddress, ItemEmail, ItemPatent, ItemPhone, ItemPublication, LanguageProficiency, PersonAnnotation, PersonAnnualEvent, PersonAward, PersonCertification, PersonInterest, PersonName, PersonWebsite, ProjectParticipation, SkillProficiency, UserAccountInformation, WebAccount, WorkPosition} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Profile extends Entity implements Parsable {
    /** The account property */
    private _account?: UserAccountInformation[] | undefined;
    /** Represents details of addresses associated with the user. */
    private _addresses?: ItemAddress[] | undefined;
    /** Represents the details of meaningful dates associated with a person. */
    private _anniversaries?: PersonAnnualEvent[] | undefined;
    /** Represents the details of awards or honors associated with a person. */
    private _awards?: PersonAward[] | undefined;
    /** Represents the details of certifications associated with a person. */
    private _certifications?: PersonCertification[] | undefined;
    /** Represents data that a user has supplied related to undergraduate, graduate, postgraduate or other educational activities. */
    private _educationalActivities?: EducationalActivity[] | undefined;
    /** Represents detailed information about email addresses associated with the user. */
    private _emails?: ItemEmail[] | undefined;
    /** Provides detailed information about interests the user has associated with themselves in various services. */
    private _interests?: PersonInterest[] | undefined;
    /** Represents detailed information about languages that a user has added to their profile. */
    private _languages?: LanguageProficiency[] | undefined;
    /** Represents the names a user has added to their profile. */
    private _names?: PersonName[] | undefined;
    /** Represents notes that a user has added to their profile. */
    private _notes?: PersonAnnotation[] | undefined;
    /** Represents patents that a user has added to their profile. */
    private _patents?: ItemPatent[] | undefined;
    /** Represents detailed information about phone numbers associated with a user in various services. */
    private _phones?: ItemPhone[] | undefined;
    /** Represents detailed information about work positions associated with a user's profile. */
    private _positions?: WorkPosition[] | undefined;
    /** Represents detailed information about projects associated with a user. */
    private _projects?: ProjectParticipation[] | undefined;
    /** Represents details of any publications a user has added to their profile. */
    private _publications?: ItemPublication[] | undefined;
    /** Represents detailed information about skills associated with a user in various services. */
    private _skills?: SkillProficiency[] | undefined;
    /** Represents web accounts the user has indicated they use or has added to their user profile. */
    private _webAccounts?: WebAccount[] | undefined;
    /** Represents detailed information about websites associated with a user in various services. */
    private _websites?: PersonWebsite[] | undefined;
    /**
     * Gets the account property value. The account property
     * @returns a userAccountInformation
     */
    public get account() {
        return this._account;
    };
    /**
     * Sets the account property value. The account property
     * @param value Value to set for the account property.
     */
    public set account(value: UserAccountInformation[] | undefined) {
        this._account = value;
    };
    /**
     * Gets the addresses property value. Represents details of addresses associated with the user.
     * @returns a itemAddress
     */
    public get addresses() {
        return this._addresses;
    };
    /**
     * Sets the addresses property value. Represents details of addresses associated with the user.
     * @param value Value to set for the addresses property.
     */
    public set addresses(value: ItemAddress[] | undefined) {
        this._addresses = value;
    };
    /**
     * Gets the anniversaries property value. Represents the details of meaningful dates associated with a person.
     * @returns a personAnnualEvent
     */
    public get anniversaries() {
        return this._anniversaries;
    };
    /**
     * Sets the anniversaries property value. Represents the details of meaningful dates associated with a person.
     * @param value Value to set for the anniversaries property.
     */
    public set anniversaries(value: PersonAnnualEvent[] | undefined) {
        this._anniversaries = value;
    };
    /**
     * Gets the awards property value. Represents the details of awards or honors associated with a person.
     * @returns a personAward
     */
    public get awards() {
        return this._awards;
    };
    /**
     * Sets the awards property value. Represents the details of awards or honors associated with a person.
     * @param value Value to set for the awards property.
     */
    public set awards(value: PersonAward[] | undefined) {
        this._awards = value;
    };
    /**
     * Gets the certifications property value. Represents the details of certifications associated with a person.
     * @returns a personCertification
     */
    public get certifications() {
        return this._certifications;
    };
    /**
     * Sets the certifications property value. Represents the details of certifications associated with a person.
     * @param value Value to set for the certifications property.
     */
    public set certifications(value: PersonCertification[] | undefined) {
        this._certifications = value;
    };
    /**
     * Instantiates a new profile and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the educationalActivities property value. Represents data that a user has supplied related to undergraduate, graduate, postgraduate or other educational activities.
     * @returns a educationalActivity
     */
    public get educationalActivities() {
        return this._educationalActivities;
    };
    /**
     * Sets the educationalActivities property value. Represents data that a user has supplied related to undergraduate, graduate, postgraduate or other educational activities.
     * @param value Value to set for the educationalActivities property.
     */
    public set educationalActivities(value: EducationalActivity[] | undefined) {
        this._educationalActivities = value;
    };
    /**
     * Gets the emails property value. Represents detailed information about email addresses associated with the user.
     * @returns a itemEmail
     */
    public get emails() {
        return this._emails;
    };
    /**
     * Sets the emails property value. Represents detailed information about email addresses associated with the user.
     * @param value Value to set for the emails property.
     */
    public set emails(value: ItemEmail[] | undefined) {
        this._emails = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "account": n => { this.account = n.getCollectionOfObjectValues<UserAccountInformation>(createUserAccountInformationFromDiscriminatorValue); },
            "addresses": n => { this.addresses = n.getCollectionOfObjectValues<ItemAddress>(createItemAddressFromDiscriminatorValue); },
            "anniversaries": n => { this.anniversaries = n.getCollectionOfObjectValues<PersonAnnualEvent>(createPersonAnnualEventFromDiscriminatorValue); },
            "awards": n => { this.awards = n.getCollectionOfObjectValues<PersonAward>(createPersonAwardFromDiscriminatorValue); },
            "certifications": n => { this.certifications = n.getCollectionOfObjectValues<PersonCertification>(createPersonCertificationFromDiscriminatorValue); },
            "educationalActivities": n => { this.educationalActivities = n.getCollectionOfObjectValues<EducationalActivity>(createEducationalActivityFromDiscriminatorValue); },
            "emails": n => { this.emails = n.getCollectionOfObjectValues<ItemEmail>(createItemEmailFromDiscriminatorValue); },
            "interests": n => { this.interests = n.getCollectionOfObjectValues<PersonInterest>(createPersonInterestFromDiscriminatorValue); },
            "languages": n => { this.languages = n.getCollectionOfObjectValues<LanguageProficiency>(createLanguageProficiencyFromDiscriminatorValue); },
            "names": n => { this.names = n.getCollectionOfObjectValues<PersonName>(createPersonNameFromDiscriminatorValue); },
            "notes": n => { this.notes = n.getCollectionOfObjectValues<PersonAnnotation>(createPersonAnnotationFromDiscriminatorValue); },
            "patents": n => { this.patents = n.getCollectionOfObjectValues<ItemPatent>(createItemPatentFromDiscriminatorValue); },
            "phones": n => { this.phones = n.getCollectionOfObjectValues<ItemPhone>(createItemPhoneFromDiscriminatorValue); },
            "positions": n => { this.positions = n.getCollectionOfObjectValues<WorkPosition>(createWorkPositionFromDiscriminatorValue); },
            "projects": n => { this.projects = n.getCollectionOfObjectValues<ProjectParticipation>(createProjectParticipationFromDiscriminatorValue); },
            "publications": n => { this.publications = n.getCollectionOfObjectValues<ItemPublication>(createItemPublicationFromDiscriminatorValue); },
            "skills": n => { this.skills = n.getCollectionOfObjectValues<SkillProficiency>(createSkillProficiencyFromDiscriminatorValue); },
            "webAccounts": n => { this.webAccounts = n.getCollectionOfObjectValues<WebAccount>(createWebAccountFromDiscriminatorValue); },
            "websites": n => { this.websites = n.getCollectionOfObjectValues<PersonWebsite>(createPersonWebsiteFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the interests property value. Provides detailed information about interests the user has associated with themselves in various services.
     * @returns a personInterest
     */
    public get interests() {
        return this._interests;
    };
    /**
     * Sets the interests property value. Provides detailed information about interests the user has associated with themselves in various services.
     * @param value Value to set for the interests property.
     */
    public set interests(value: PersonInterest[] | undefined) {
        this._interests = value;
    };
    /**
     * Gets the languages property value. Represents detailed information about languages that a user has added to their profile.
     * @returns a languageProficiency
     */
    public get languages() {
        return this._languages;
    };
    /**
     * Sets the languages property value. Represents detailed information about languages that a user has added to their profile.
     * @param value Value to set for the languages property.
     */
    public set languages(value: LanguageProficiency[] | undefined) {
        this._languages = value;
    };
    /**
     * Gets the names property value. Represents the names a user has added to their profile.
     * @returns a personName
     */
    public get names() {
        return this._names;
    };
    /**
     * Sets the names property value. Represents the names a user has added to their profile.
     * @param value Value to set for the names property.
     */
    public set names(value: PersonName[] | undefined) {
        this._names = value;
    };
    /**
     * Gets the notes property value. Represents notes that a user has added to their profile.
     * @returns a personAnnotation
     */
    public get notes() {
        return this._notes;
    };
    /**
     * Sets the notes property value. Represents notes that a user has added to their profile.
     * @param value Value to set for the notes property.
     */
    public set notes(value: PersonAnnotation[] | undefined) {
        this._notes = value;
    };
    /**
     * Gets the patents property value. Represents patents that a user has added to their profile.
     * @returns a itemPatent
     */
    public get patents() {
        return this._patents;
    };
    /**
     * Sets the patents property value. Represents patents that a user has added to their profile.
     * @param value Value to set for the patents property.
     */
    public set patents(value: ItemPatent[] | undefined) {
        this._patents = value;
    };
    /**
     * Gets the phones property value. Represents detailed information about phone numbers associated with a user in various services.
     * @returns a itemPhone
     */
    public get phones() {
        return this._phones;
    };
    /**
     * Sets the phones property value. Represents detailed information about phone numbers associated with a user in various services.
     * @param value Value to set for the phones property.
     */
    public set phones(value: ItemPhone[] | undefined) {
        this._phones = value;
    };
    /**
     * Gets the positions property value. Represents detailed information about work positions associated with a user's profile.
     * @returns a workPosition
     */
    public get positions() {
        return this._positions;
    };
    /**
     * Sets the positions property value. Represents detailed information about work positions associated with a user's profile.
     * @param value Value to set for the positions property.
     */
    public set positions(value: WorkPosition[] | undefined) {
        this._positions = value;
    };
    /**
     * Gets the projects property value. Represents detailed information about projects associated with a user.
     * @returns a projectParticipation
     */
    public get projects() {
        return this._projects;
    };
    /**
     * Sets the projects property value. Represents detailed information about projects associated with a user.
     * @param value Value to set for the projects property.
     */
    public set projects(value: ProjectParticipation[] | undefined) {
        this._projects = value;
    };
    /**
     * Gets the publications property value. Represents details of any publications a user has added to their profile.
     * @returns a itemPublication
     */
    public get publications() {
        return this._publications;
    };
    /**
     * Sets the publications property value. Represents details of any publications a user has added to their profile.
     * @param value Value to set for the publications property.
     */
    public set publications(value: ItemPublication[] | undefined) {
        this._publications = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<UserAccountInformation>("account", this.account);
        writer.writeCollectionOfObjectValues<ItemAddress>("addresses", this.addresses);
        writer.writeCollectionOfObjectValues<PersonAnnualEvent>("anniversaries", this.anniversaries);
        writer.writeCollectionOfObjectValues<PersonAward>("awards", this.awards);
        writer.writeCollectionOfObjectValues<PersonCertification>("certifications", this.certifications);
        writer.writeCollectionOfObjectValues<EducationalActivity>("educationalActivities", this.educationalActivities);
        writer.writeCollectionOfObjectValues<ItemEmail>("emails", this.emails);
        writer.writeCollectionOfObjectValues<PersonInterest>("interests", this.interests);
        writer.writeCollectionOfObjectValues<LanguageProficiency>("languages", this.languages);
        writer.writeCollectionOfObjectValues<PersonName>("names", this.names);
        writer.writeCollectionOfObjectValues<PersonAnnotation>("notes", this.notes);
        writer.writeCollectionOfObjectValues<ItemPatent>("patents", this.patents);
        writer.writeCollectionOfObjectValues<ItemPhone>("phones", this.phones);
        writer.writeCollectionOfObjectValues<WorkPosition>("positions", this.positions);
        writer.writeCollectionOfObjectValues<ProjectParticipation>("projects", this.projects);
        writer.writeCollectionOfObjectValues<ItemPublication>("publications", this.publications);
        writer.writeCollectionOfObjectValues<SkillProficiency>("skills", this.skills);
        writer.writeCollectionOfObjectValues<WebAccount>("webAccounts", this.webAccounts);
        writer.writeCollectionOfObjectValues<PersonWebsite>("websites", this.websites);
    };
    /**
     * Gets the skills property value. Represents detailed information about skills associated with a user in various services.
     * @returns a skillProficiency
     */
    public get skills() {
        return this._skills;
    };
    /**
     * Sets the skills property value. Represents detailed information about skills associated with a user in various services.
     * @param value Value to set for the skills property.
     */
    public set skills(value: SkillProficiency[] | undefined) {
        this._skills = value;
    };
    /**
     * Gets the webAccounts property value. Represents web accounts the user has indicated they use or has added to their user profile.
     * @returns a webAccount
     */
    public get webAccounts() {
        return this._webAccounts;
    };
    /**
     * Sets the webAccounts property value. Represents web accounts the user has indicated they use or has added to their user profile.
     * @param value Value to set for the webAccounts property.
     */
    public set webAccounts(value: WebAccount[] | undefined) {
        this._webAccounts = value;
    };
    /**
     * Gets the websites property value. Represents detailed information about websites associated with a user in various services.
     * @returns a personWebsite
     */
    public get websites() {
        return this._websites;
    };
    /**
     * Sets the websites property value. Represents detailed information about websites associated with a user in various services.
     * @param value Value to set for the websites property.
     */
    public set websites(value: PersonWebsite[] | undefined) {
        this._websites = value;
    };
}
