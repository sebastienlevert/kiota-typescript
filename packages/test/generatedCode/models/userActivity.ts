import {createActivityHistoryItemFromDiscriminatorValue} from './createActivityHistoryItemFromDiscriminatorValue';
import {createJsonFromDiscriminatorValue} from './createJsonFromDiscriminatorValue';
import {createVisualInfoFromDiscriminatorValue} from './createVisualInfoFromDiscriminatorValue';
import {ActivityHistoryItem, Entity, Json, VisualInfo} from './index';
import {Status} from './status';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UserActivity extends Entity implements Parsable {
    /** The activationUrl property */
    private _activationUrl?: string | undefined;
    /** The activitySourceHost property */
    private _activitySourceHost?: string | undefined;
    /** The appActivityId property */
    private _appActivityId?: string | undefined;
    /** The appDisplayName property */
    private _appDisplayName?: string | undefined;
    /** The contentInfo property */
    private _contentInfo?: Json | undefined;
    /** The contentUrl property */
    private _contentUrl?: string | undefined;
    /** The createdDateTime property */
    private _createdDateTime?: Date | undefined;
    /** The expirationDateTime property */
    private _expirationDateTime?: Date | undefined;
    /** The fallbackUrl property */
    private _fallbackUrl?: string | undefined;
    /** The historyItems property */
    private _historyItems?: ActivityHistoryItem[] | undefined;
    /** The lastModifiedDateTime property */
    private _lastModifiedDateTime?: Date | undefined;
    /** The status property */
    private _status?: Status | undefined;
    /** The userTimezone property */
    private _userTimezone?: string | undefined;
    /** The visualElements property */
    private _visualElements?: VisualInfo | undefined;
    /**
     * Gets the activationUrl property value. The activationUrl property
     * @returns a string
     */
    public get activationUrl() {
        return this._activationUrl;
    };
    /**
     * Sets the activationUrl property value. The activationUrl property
     * @param value Value to set for the activationUrl property.
     */
    public set activationUrl(value: string | undefined) {
        this._activationUrl = value;
    };
    /**
     * Gets the activitySourceHost property value. The activitySourceHost property
     * @returns a string
     */
    public get activitySourceHost() {
        return this._activitySourceHost;
    };
    /**
     * Sets the activitySourceHost property value. The activitySourceHost property
     * @param value Value to set for the activitySourceHost property.
     */
    public set activitySourceHost(value: string | undefined) {
        this._activitySourceHost = value;
    };
    /**
     * Gets the appActivityId property value. The appActivityId property
     * @returns a string
     */
    public get appActivityId() {
        return this._appActivityId;
    };
    /**
     * Sets the appActivityId property value. The appActivityId property
     * @param value Value to set for the appActivityId property.
     */
    public set appActivityId(value: string | undefined) {
        this._appActivityId = value;
    };
    /**
     * Gets the appDisplayName property value. The appDisplayName property
     * @returns a string
     */
    public get appDisplayName() {
        return this._appDisplayName;
    };
    /**
     * Sets the appDisplayName property value. The appDisplayName property
     * @param value Value to set for the appDisplayName property.
     */
    public set appDisplayName(value: string | undefined) {
        this._appDisplayName = value;
    };
    /**
     * Instantiates a new userActivity and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the contentInfo property value. The contentInfo property
     * @returns a Json
     */
    public get contentInfo() {
        return this._contentInfo;
    };
    /**
     * Sets the contentInfo property value. The contentInfo property
     * @param value Value to set for the contentInfo property.
     */
    public set contentInfo(value: Json | undefined) {
        this._contentInfo = value;
    };
    /**
     * Gets the contentUrl property value. The contentUrl property
     * @returns a string
     */
    public get contentUrl() {
        return this._contentUrl;
    };
    /**
     * Sets the contentUrl property value. The contentUrl property
     * @param value Value to set for the contentUrl property.
     */
    public set contentUrl(value: string | undefined) {
        this._contentUrl = value;
    };
    /**
     * Gets the createdDateTime property value. The createdDateTime property
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The createdDateTime property
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Gets the expirationDateTime property value. The expirationDateTime property
     * @returns a Date
     */
    public get expirationDateTime() {
        return this._expirationDateTime;
    };
    /**
     * Sets the expirationDateTime property value. The expirationDateTime property
     * @param value Value to set for the expirationDateTime property.
     */
    public set expirationDateTime(value: Date | undefined) {
        this._expirationDateTime = value;
    };
    /**
     * Gets the fallbackUrl property value. The fallbackUrl property
     * @returns a string
     */
    public get fallbackUrl() {
        return this._fallbackUrl;
    };
    /**
     * Sets the fallbackUrl property value. The fallbackUrl property
     * @param value Value to set for the fallbackUrl property.
     */
    public set fallbackUrl(value: string | undefined) {
        this._fallbackUrl = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "activationUrl": n => { this.activationUrl = n.getStringValue(); },
            "activitySourceHost": n => { this.activitySourceHost = n.getStringValue(); },
            "appActivityId": n => { this.appActivityId = n.getStringValue(); },
            "appDisplayName": n => { this.appDisplayName = n.getStringValue(); },
            "contentInfo": n => { this.contentInfo = n.getObjectValue<Json>(createJsonFromDiscriminatorValue); },
            "contentUrl": n => { this.contentUrl = n.getStringValue(); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "expirationDateTime": n => { this.expirationDateTime = n.getDateValue(); },
            "fallbackUrl": n => { this.fallbackUrl = n.getStringValue(); },
            "historyItems": n => { this.historyItems = n.getCollectionOfObjectValues<ActivityHistoryItem>(createActivityHistoryItemFromDiscriminatorValue); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "status": n => { this.status = n.getEnumValue<Status>(Status); },
            "userTimezone": n => { this.userTimezone = n.getStringValue(); },
            "visualElements": n => { this.visualElements = n.getObjectValue<VisualInfo>(createVisualInfoFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the historyItems property value. The historyItems property
     * @returns a activityHistoryItem
     */
    public get historyItems() {
        return this._historyItems;
    };
    /**
     * Sets the historyItems property value. The historyItems property
     * @param value Value to set for the historyItems property.
     */
    public set historyItems(value: ActivityHistoryItem[] | undefined) {
        this._historyItems = value;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("activationUrl", this.activationUrl);
        writer.writeStringValue("activitySourceHost", this.activitySourceHost);
        writer.writeStringValue("appActivityId", this.appActivityId);
        writer.writeStringValue("appDisplayName", this.appDisplayName);
        writer.writeObjectValue<Json>("contentInfo", this.contentInfo);
        writer.writeStringValue("contentUrl", this.contentUrl);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeDateValue("expirationDateTime", this.expirationDateTime);
        writer.writeStringValue("fallbackUrl", this.fallbackUrl);
        writer.writeCollectionOfObjectValues<ActivityHistoryItem>("historyItems", this.historyItems);
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        writer.writeEnumValue<Status>("status", this.status);
        writer.writeStringValue("userTimezone", this.userTimezone);
        writer.writeObjectValue<VisualInfo>("visualElements", this.visualElements);
    };
    /**
     * Gets the status property value. The status property
     * @returns a status
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The status property
     * @param value Value to set for the status property.
     */
    public set status(value: Status | undefined) {
        this._status = value;
    };
    /**
     * Gets the userTimezone property value. The userTimezone property
     * @returns a string
     */
    public get userTimezone() {
        return this._userTimezone;
    };
    /**
     * Sets the userTimezone property value. The userTimezone property
     * @param value Value to set for the userTimezone property.
     */
    public set userTimezone(value: string | undefined) {
        this._userTimezone = value;
    };
    /**
     * Gets the visualElements property value. The visualElements property
     * @returns a visualInfo
     */
    public get visualElements() {
        return this._visualElements;
    };
    /**
     * Sets the visualElements property value. The visualElements property
     * @param value Value to set for the visualElements property.
     */
    public set visualElements(value: VisualInfo | undefined) {
        this._visualElements = value;
    };
}
