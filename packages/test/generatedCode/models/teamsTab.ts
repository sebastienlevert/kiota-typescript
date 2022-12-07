import {createTeamsAppFromDiscriminatorValue} from './createTeamsAppFromDiscriminatorValue';
import {createTeamsTabConfigurationFromDiscriminatorValue} from './createTeamsTabConfigurationFromDiscriminatorValue';
import {Entity, TeamsApp, TeamsTabConfiguration} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamsTab extends Entity implements Parsable {
    /** The configuration property */
    private _configuration?: TeamsTabConfiguration | undefined;
    /** Name of the tab. */
    private _displayName?: string | undefined;
    /** The messageId property */
    private _messageId?: string | undefined;
    /** Index of the order used for sorting tabs. */
    private _sortOrderIndex?: string | undefined;
    /** The teamsApp property */
    private _teamsApp?: TeamsApp | undefined;
    /** The teamsAppId property */
    private _teamsAppId?: string | undefined;
    /** Deep link URL of the tab instance. Read only. */
    private _webUrl?: string | undefined;
    /**
     * Gets the configuration property value. The configuration property
     * @returns a teamsTabConfiguration
     */
    public get configuration() {
        return this._configuration;
    };
    /**
     * Sets the configuration property value. The configuration property
     * @param value Value to set for the configuration property.
     */
    public set configuration(value: TeamsTabConfiguration | undefined) {
        this._configuration = value;
    };
    /**
     * Instantiates a new teamsTab and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the displayName property value. Name of the tab.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Name of the tab.
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
            "configuration": n => { this.configuration = n.getObjectValue<TeamsTabConfiguration>(createTeamsTabConfigurationFromDiscriminatorValue); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "messageId": n => { this.messageId = n.getStringValue(); },
            "sortOrderIndex": n => { this.sortOrderIndex = n.getStringValue(); },
            "teamsApp": n => { this.teamsApp = n.getObjectValue<TeamsApp>(createTeamsAppFromDiscriminatorValue); },
            "teamsAppId": n => { this.teamsAppId = n.getStringValue(); },
            "webUrl": n => { this.webUrl = n.getStringValue(); },
        };
    };
    /**
     * Gets the messageId property value. The messageId property
     * @returns a string
     */
    public get messageId() {
        return this._messageId;
    };
    /**
     * Sets the messageId property value. The messageId property
     * @param value Value to set for the messageId property.
     */
    public set messageId(value: string | undefined) {
        this._messageId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<TeamsTabConfiguration>("configuration", this.configuration);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("messageId", this.messageId);
        writer.writeStringValue("sortOrderIndex", this.sortOrderIndex);
        writer.writeObjectValue<TeamsApp>("teamsApp", this.teamsApp);
        writer.writeStringValue("teamsAppId", this.teamsAppId);
        writer.writeStringValue("webUrl", this.webUrl);
    };
    /**
     * Gets the sortOrderIndex property value. Index of the order used for sorting tabs.
     * @returns a string
     */
    public get sortOrderIndex() {
        return this._sortOrderIndex;
    };
    /**
     * Sets the sortOrderIndex property value. Index of the order used for sorting tabs.
     * @param value Value to set for the sortOrderIndex property.
     */
    public set sortOrderIndex(value: string | undefined) {
        this._sortOrderIndex = value;
    };
    /**
     * Gets the teamsApp property value. The teamsApp property
     * @returns a teamsApp
     */
    public get teamsApp() {
        return this._teamsApp;
    };
    /**
     * Sets the teamsApp property value. The teamsApp property
     * @param value Value to set for the teamsApp property.
     */
    public set teamsApp(value: TeamsApp | undefined) {
        this._teamsApp = value;
    };
    /**
     * Gets the teamsAppId property value. The teamsAppId property
     * @returns a string
     */
    public get teamsAppId() {
        return this._teamsAppId;
    };
    /**
     * Sets the teamsAppId property value. The teamsAppId property
     * @param value Value to set for the teamsAppId property.
     */
    public set teamsAppId(value: string | undefined) {
        this._teamsAppId = value;
    };
    /**
     * Gets the webUrl property value. Deep link URL of the tab instance. Read only.
     * @returns a string
     */
    public get webUrl() {
        return this._webUrl;
    };
    /**
     * Sets the webUrl property value. Deep link URL of the tab instance. Read only.
     * @param value Value to set for the webUrl property.
     */
    public set webUrl(value: string | undefined) {
        this._webUrl = value;
    };
}
