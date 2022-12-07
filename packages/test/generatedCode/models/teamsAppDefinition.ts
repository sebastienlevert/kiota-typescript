import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {createTeamsAppIconFromDiscriminatorValue} from './createTeamsAppIconFromDiscriminatorValue';
import {createTeamworkBotFromDiscriminatorValue} from './createTeamworkBotFromDiscriminatorValue';
import {Entity, IdentitySet, TeamsAppIcon, TeamworkBot} from './index';
import {TeamsAppInstallationScopes} from './teamsAppInstallationScopes';
import {TeamsAppPublishingState} from './teamsAppPublishingState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamsAppDefinition extends Entity implements Parsable {
    /** The allowedInstallationScopes property */
    private _allowedInstallationScopes?: TeamsAppInstallationScopes | undefined;
    /** The WebApplicationInfo.Id from the Teams app manifest. */
    private _azureADAppId?: string | undefined;
    /** The bot property */
    private _bot?: TeamworkBot | undefined;
    /** The colorIcon property */
    private _colorIcon?: TeamsAppIcon | undefined;
    /** The createdBy property */
    private _createdBy?: IdentitySet | undefined;
    /** The description property */
    private _description?: string | undefined;
    /** The name of the app provided by the app developer. */
    private _displayName?: string | undefined;
    /** The lastModifiedDateTime property */
    private _lastModifiedDateTime?: Date | undefined;
    /** The outlineIcon property */
    private _outlineIcon?: TeamsAppIcon | undefined;
    /** The publishingState property */
    private _publishingState?: TeamsAppPublishingState | undefined;
    /** The shortdescription property */
    private _shortdescription?: string | undefined;
    /** The ID from the Teams app manifest. */
    private _teamsAppId?: string | undefined;
    /** The version number of the application. */
    private _version?: string | undefined;
    /**
     * Gets the allowedInstallationScopes property value. The allowedInstallationScopes property
     * @returns a teamsAppInstallationScopes
     */
    public get allowedInstallationScopes() {
        return this._allowedInstallationScopes;
    };
    /**
     * Sets the allowedInstallationScopes property value. The allowedInstallationScopes property
     * @param value Value to set for the allowedInstallationScopes property.
     */
    public set allowedInstallationScopes(value: TeamsAppInstallationScopes | undefined) {
        this._allowedInstallationScopes = value;
    };
    /**
     * Gets the azureADAppId property value. The WebApplicationInfo.Id from the Teams app manifest.
     * @returns a string
     */
    public get azureADAppId() {
        return this._azureADAppId;
    };
    /**
     * Sets the azureADAppId property value. The WebApplicationInfo.Id from the Teams app manifest.
     * @param value Value to set for the azureADAppId property.
     */
    public set azureADAppId(value: string | undefined) {
        this._azureADAppId = value;
    };
    /**
     * Gets the bot property value. The bot property
     * @returns a teamworkBot
     */
    public get bot() {
        return this._bot;
    };
    /**
     * Sets the bot property value. The bot property
     * @param value Value to set for the bot property.
     */
    public set bot(value: TeamworkBot | undefined) {
        this._bot = value;
    };
    /**
     * Gets the colorIcon property value. The colorIcon property
     * @returns a teamsAppIcon
     */
    public get colorIcon() {
        return this._colorIcon;
    };
    /**
     * Sets the colorIcon property value. The colorIcon property
     * @param value Value to set for the colorIcon property.
     */
    public set colorIcon(value: TeamsAppIcon | undefined) {
        this._colorIcon = value;
    };
    /**
     * Instantiates a new teamsAppDefinition and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdBy property value. The createdBy property
     * @returns a identitySet
     */
    public get createdBy() {
        return this._createdBy;
    };
    /**
     * Sets the createdBy property value. The createdBy property
     * @param value Value to set for the createdBy property.
     */
    public set createdBy(value: IdentitySet | undefined) {
        this._createdBy = value;
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
     * Gets the displayName property value. The name of the app provided by the app developer.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The name of the app provided by the app developer.
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
            "allowedInstallationScopes": n => { this.allowedInstallationScopes = n.getEnumValue<TeamsAppInstallationScopes>(TeamsAppInstallationScopes); },
            "azureADAppId": n => { this.azureADAppId = n.getStringValue(); },
            "bot": n => { this.bot = n.getObjectValue<TeamworkBot>(createTeamworkBotFromDiscriminatorValue); },
            "colorIcon": n => { this.colorIcon = n.getObjectValue<TeamsAppIcon>(createTeamsAppIconFromDiscriminatorValue); },
            "createdBy": n => { this.createdBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "outlineIcon": n => { this.outlineIcon = n.getObjectValue<TeamsAppIcon>(createTeamsAppIconFromDiscriminatorValue); },
            "publishingState": n => { this.publishingState = n.getEnumValue<TeamsAppPublishingState>(TeamsAppPublishingState); },
            "shortdescription": n => { this.shortdescription = n.getStringValue(); },
            "teamsAppId": n => { this.teamsAppId = n.getStringValue(); },
            "version": n => { this.version = n.getStringValue(); },
        };
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
     * Gets the outlineIcon property value. The outlineIcon property
     * @returns a teamsAppIcon
     */
    public get outlineIcon() {
        return this._outlineIcon;
    };
    /**
     * Sets the outlineIcon property value. The outlineIcon property
     * @param value Value to set for the outlineIcon property.
     */
    public set outlineIcon(value: TeamsAppIcon | undefined) {
        this._outlineIcon = value;
    };
    /**
     * Gets the publishingState property value. The publishingState property
     * @returns a teamsAppPublishingState
     */
    public get publishingState() {
        return this._publishingState;
    };
    /**
     * Sets the publishingState property value. The publishingState property
     * @param value Value to set for the publishingState property.
     */
    public set publishingState(value: TeamsAppPublishingState | undefined) {
        this._publishingState = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<TeamsAppInstallationScopes>("allowedInstallationScopes", this.allowedInstallationScopes);
        writer.writeStringValue("azureADAppId", this.azureADAppId);
        writer.writeObjectValue<TeamworkBot>("bot", this.bot);
        writer.writeObjectValue<TeamsAppIcon>("colorIcon", this.colorIcon);
        writer.writeObjectValue<IdentitySet>("createdBy", this.createdBy);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeObjectValue<TeamsAppIcon>("outlineIcon", this.outlineIcon);
        writer.writeEnumValue<TeamsAppPublishingState>("publishingState", this.publishingState);
        writer.writeStringValue("shortdescription", this.shortdescription);
        writer.writeStringValue("teamsAppId", this.teamsAppId);
        writer.writeStringValue("version", this.version);
    };
    /**
     * Gets the shortdescription property value. The shortdescription property
     * @returns a string
     */
    public get shortdescription() {
        return this._shortdescription;
    };
    /**
     * Sets the shortdescription property value. The shortdescription property
     * @param value Value to set for the shortdescription property.
     */
    public set shortdescription(value: string | undefined) {
        this._shortdescription = value;
    };
    /**
     * Gets the teamsAppId property value. The ID from the Teams app manifest.
     * @returns a string
     */
    public get teamsAppId() {
        return this._teamsAppId;
    };
    /**
     * Sets the teamsAppId property value. The ID from the Teams app manifest.
     * @param value Value to set for the teamsAppId property.
     */
    public set teamsAppId(value: string | undefined) {
        this._teamsAppId = value;
    };
    /**
     * Gets the version property value. The version number of the application.
     * @returns a string
     */
    public get version() {
        return this._version;
    };
    /**
     * Sets the version property value. The version number of the application.
     * @param value Value to set for the version property.
     */
    public set version(value: string | undefined) {
        this._version = value;
    };
}
