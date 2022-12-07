import {createPayloadTypesFromDiscriminatorValue} from './createPayloadTypesFromDiscriminatorValue';
import {createTargetPolicyEndpointsFromDiscriminatorValue} from './createTargetPolicyEndpointsFromDiscriminatorValue';
import {Entity, PayloadTypes, TargetPolicyEndpoints} from './index';
import {Priority} from './priority';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Notification extends Entity implements Parsable {
    /** Sets how long (in seconds) this notification content will stay in each platform's notification viewer. For example, when the notification is delivered to a Windows device, the value of this property is passed on to ToastNotification.ExpirationTime, which determines how long the toast notification will stay in the user's Windows Action Center. */
    private _displayTimeToLive?: number | undefined;
    /** Sets a UTC expiration date and time on a user notification using ISO 8601 format (for example, midnight UTC on Jan 1, 2019 would look like this: '2019-01-01T00:00:00Z'). When time is up, the notification is removed from the Microsoft Graph notification feed store completely and is no longer part of notification history. Max value is 30 days. */
    private _expirationDateTime?: Date | undefined;
    /** The name of the group that this notification belongs to. It is set by the developer for the purpose of grouping notifications together. */
    private _groupName?: string | undefined;
    /** The payload property */
    private _payload?: PayloadTypes | undefined;
    /** The priority property */
    private _priority?: Priority | undefined;
    /** Represents the host name of the app to which the calling service wants to post the notification, for the given user. If targeting web endpoints (see targetPolicy.platformTypes), ensure that targetHostName is the same as the name used when creating a subscription on the client side within the application JSON property. */
    private _targetHostName?: string | undefined;
    /** The targetPolicy property */
    private _targetPolicy?: TargetPolicyEndpoints | undefined;
    /**
     * Instantiates a new notification and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the displayTimeToLive property value. Sets how long (in seconds) this notification content will stay in each platform's notification viewer. For example, when the notification is delivered to a Windows device, the value of this property is passed on to ToastNotification.ExpirationTime, which determines how long the toast notification will stay in the user's Windows Action Center.
     * @returns a integer
     */
    public get displayTimeToLive() {
        return this._displayTimeToLive;
    };
    /**
     * Sets the displayTimeToLive property value. Sets how long (in seconds) this notification content will stay in each platform's notification viewer. For example, when the notification is delivered to a Windows device, the value of this property is passed on to ToastNotification.ExpirationTime, which determines how long the toast notification will stay in the user's Windows Action Center.
     * @param value Value to set for the displayTimeToLive property.
     */
    public set displayTimeToLive(value: number | undefined) {
        this._displayTimeToLive = value;
    };
    /**
     * Gets the expirationDateTime property value. Sets a UTC expiration date and time on a user notification using ISO 8601 format (for example, midnight UTC on Jan 1, 2019 would look like this: '2019-01-01T00:00:00Z'). When time is up, the notification is removed from the Microsoft Graph notification feed store completely and is no longer part of notification history. Max value is 30 days.
     * @returns a Date
     */
    public get expirationDateTime() {
        return this._expirationDateTime;
    };
    /**
     * Sets the expirationDateTime property value. Sets a UTC expiration date and time on a user notification using ISO 8601 format (for example, midnight UTC on Jan 1, 2019 would look like this: '2019-01-01T00:00:00Z'). When time is up, the notification is removed from the Microsoft Graph notification feed store completely and is no longer part of notification history. Max value is 30 days.
     * @param value Value to set for the expirationDateTime property.
     */
    public set expirationDateTime(value: Date | undefined) {
        this._expirationDateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "displayTimeToLive": n => { this.displayTimeToLive = n.getNumberValue(); },
            "expirationDateTime": n => { this.expirationDateTime = n.getDateValue(); },
            "groupName": n => { this.groupName = n.getStringValue(); },
            "payload": n => { this.payload = n.getObjectValue<PayloadTypes>(createPayloadTypesFromDiscriminatorValue); },
            "priority": n => { this.priority = n.getEnumValue<Priority>(Priority); },
            "targetHostName": n => { this.targetHostName = n.getStringValue(); },
            "targetPolicy": n => { this.targetPolicy = n.getObjectValue<TargetPolicyEndpoints>(createTargetPolicyEndpointsFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the groupName property value. The name of the group that this notification belongs to. It is set by the developer for the purpose of grouping notifications together.
     * @returns a string
     */
    public get groupName() {
        return this._groupName;
    };
    /**
     * Sets the groupName property value. The name of the group that this notification belongs to. It is set by the developer for the purpose of grouping notifications together.
     * @param value Value to set for the groupName property.
     */
    public set groupName(value: string | undefined) {
        this._groupName = value;
    };
    /**
     * Gets the payload property value. The payload property
     * @returns a payloadTypes
     */
    public get payload() {
        return this._payload;
    };
    /**
     * Sets the payload property value. The payload property
     * @param value Value to set for the payload property.
     */
    public set payload(value: PayloadTypes | undefined) {
        this._payload = value;
    };
    /**
     * Gets the priority property value. The priority property
     * @returns a priority
     */
    public get priority() {
        return this._priority;
    };
    /**
     * Sets the priority property value. The priority property
     * @param value Value to set for the priority property.
     */
    public set priority(value: Priority | undefined) {
        this._priority = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeNumberValue("displayTimeToLive", this.displayTimeToLive);
        writer.writeDateValue("expirationDateTime", this.expirationDateTime);
        writer.writeStringValue("groupName", this.groupName);
        writer.writeObjectValue<PayloadTypes>("payload", this.payload);
        writer.writeEnumValue<Priority>("priority", this.priority);
        writer.writeStringValue("targetHostName", this.targetHostName);
        writer.writeObjectValue<TargetPolicyEndpoints>("targetPolicy", this.targetPolicy);
    };
    /**
     * Gets the targetHostName property value. Represents the host name of the app to which the calling service wants to post the notification, for the given user. If targeting web endpoints (see targetPolicy.platformTypes), ensure that targetHostName is the same as the name used when creating a subscription on the client side within the application JSON property.
     * @returns a string
     */
    public get targetHostName() {
        return this._targetHostName;
    };
    /**
     * Sets the targetHostName property value. Represents the host name of the app to which the calling service wants to post the notification, for the given user. If targeting web endpoints (see targetPolicy.platformTypes), ensure that targetHostName is the same as the name used when creating a subscription on the client side within the application JSON property.
     * @param value Value to set for the targetHostName property.
     */
    public set targetHostName(value: string | undefined) {
        this._targetHostName = value;
    };
    /**
     * Gets the targetPolicy property value. The targetPolicy property
     * @returns a targetPolicyEndpoints
     */
    public get targetPolicy() {
        return this._targetPolicy;
    };
    /**
     * Sets the targetPolicy property value. The targetPolicy property
     * @param value Value to set for the targetPolicy property.
     */
    public set targetPolicy(value: TargetPolicyEndpoints | undefined) {
        this._targetPolicy = value;
    };
}
