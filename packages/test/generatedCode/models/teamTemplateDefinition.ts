import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Entity, IdentitySet, Team} from './index';
import {TeamTemplateAudience} from './teamTemplateAudience';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamTemplateDefinition extends Entity implements Parsable {
    /** The audience property */
    private _audience?: TeamTemplateAudience | undefined;
    /** The categories property */
    private _categories?: string[] | undefined;
    /** The description property */
    private _description?: string | undefined;
    /** The displayName property */
    private _displayName?: string | undefined;
    /** The iconUrl property */
    private _iconUrl?: string | undefined;
    /** The languageTag property */
    private _languageTag?: string | undefined;
    /** The lastModifiedBy property */
    private _lastModifiedBy?: IdentitySet | undefined;
    /** The lastModifiedDateTime property */
    private _lastModifiedDateTime?: Date | undefined;
    /** The parentTemplateId property */
    private _parentTemplateId?: string | undefined;
    /** The publisherName property */
    private _publisherName?: string | undefined;
    /** The shortDescription property */
    private _shortDescription?: string | undefined;
    /** The teamDefinition property */
    private _teamDefinition?: Team | undefined;
    /**
     * Gets the audience property value. The audience property
     * @returns a teamTemplateAudience
     */
    public get audience() {
        return this._audience;
    };
    /**
     * Sets the audience property value. The audience property
     * @param value Value to set for the audience property.
     */
    public set audience(value: TeamTemplateAudience | undefined) {
        this._audience = value;
    };
    /**
     * Gets the categories property value. The categories property
     * @returns a string
     */
    public get categories() {
        return this._categories;
    };
    /**
     * Sets the categories property value. The categories property
     * @param value Value to set for the categories property.
     */
    public set categories(value: string[] | undefined) {
        this._categories = value;
    };
    /**
     * Instantiates a new teamTemplateDefinition and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the description property value. The description property
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. The description property
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the displayName property value. The displayName property
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The displayName property
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "audience": n => { this.audience = n.getEnumValue<TeamTemplateAudience>(TeamTemplateAudience); },
            "categories": n => { this.categories = n.getCollectionOfPrimitiveValues<string>(); },
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "iconUrl": n => { this.iconUrl = n.getStringValue(); },
            "languageTag": n => { this.languageTag = n.getStringValue(); },
            "lastModifiedBy": n => { this.lastModifiedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "parentTemplateId": n => { this.parentTemplateId = n.getStringValue(); },
            "publisherName": n => { this.publisherName = n.getStringValue(); },
            "shortDescription": n => { this.shortDescription = n.getStringValue(); },
            "teamDefinition": n => { this.teamDefinition = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the iconUrl property value. The iconUrl property
     * @returns a string
     */
    public get iconUrl() {
        return this._iconUrl;
    };
    /**
     * Sets the iconUrl property value. The iconUrl property
     * @param value Value to set for the iconUrl property.
     */
    public set iconUrl(value: string | undefined) {
        this._iconUrl = value;
    };
    /**
     * Gets the languageTag property value. The languageTag property
     * @returns a string
     */
    public get languageTag() {
        return this._languageTag;
    };
    /**
     * Sets the languageTag property value. The languageTag property
     * @param value Value to set for the languageTag property.
     */
    public set languageTag(value: string | undefined) {
        this._languageTag = value;
    };
    /**
     * Gets the lastModifiedBy property value. The lastModifiedBy property
     * @returns a identitySet
     */
    public get lastModifiedBy() {
        return this._lastModifiedBy;
    };
    /**
     * Sets the lastModifiedBy property value. The lastModifiedBy property
     * @param value Value to set for the lastModifiedBy property.
     */
    public set lastModifiedBy(value: IdentitySet | undefined) {
        this._lastModifiedBy = value;
    };
    /**
     * Gets the lastModifiedDateTime property value. The lastModifiedDateTime property
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. The lastModifiedDateTime property
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        this._lastModifiedDateTime = value;
    };
    /**
     * Gets the parentTemplateId property value. The parentTemplateId property
     * @returns a string
     */
    public get parentTemplateId() {
        return this._parentTemplateId;
    };
    /**
     * Sets the parentTemplateId property value. The parentTemplateId property
     * @param value Value to set for the parentTemplateId property.
     */
    public set parentTemplateId(value: string | undefined) {
        this._parentTemplateId = value;
    };
    /**
     * Gets the publisherName property value. The publisherName property
     * @returns a string
     */
    public get publisherName() {
        return this._publisherName;
    };
    /**
     * Sets the publisherName property value. The publisherName property
     * @param value Value to set for the publisherName property.
     */
    public set publisherName(value: string | undefined) {
        this._publisherName = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<TeamTemplateAudience>("audience", this.audience);
        writer.writeCollectionOfPrimitiveValues<string>("categories", this.categories);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("iconUrl", this.iconUrl);
        writer.writeStringValue("languageTag", this.languageTag);
        writer.writeObjectValue<IdentitySet>("lastModifiedBy", this.lastModifiedBy);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeStringValue("parentTemplateId", this.parentTemplateId);
        writer.writeStringValue("publisherName", this.publisherName);
        writer.writeStringValue("shortDescription", this.shortDescription);
        writer.writeObjectValue<Team>("teamDefinition", this.teamDefinition);
    };
    /**
     * Gets the shortDescription property value. The shortDescription property
     * @returns a string
     */
    public get shortDescription() {
        return this._shortDescription;
    };
    /**
     * Sets the shortDescription property value. The shortDescription property
     * @param value Value to set for the shortDescription property.
     */
    public set shortDescription(value: string | undefined) {
        this._shortDescription = value;
    };
    /**
     * Gets the teamDefinition property value. The teamDefinition property
     * @returns a team
     */
    public get teamDefinition() {
        return this._teamDefinition;
    };
    /**
     * Sets the teamDefinition property value. The teamDefinition property
     * @param value Value to set for the teamDefinition property.
     */
    public set teamDefinition(value: Team | undefined) {
        this._teamDefinition = value;
    };
}
