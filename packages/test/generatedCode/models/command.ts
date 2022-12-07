import {createPayloadRequestFromDiscriminatorValue} from './createPayloadRequestFromDiscriminatorValue';
import {createPayloadResponseFromDiscriminatorValue} from './createPayloadResponseFromDiscriminatorValue';
import {Entity, PayloadRequest, PayloadResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Command extends Entity implements Parsable {
    /** The appServiceName property */
    private _appServiceName?: string | undefined;
    /** The error property */
    private _error_escaped?: string | undefined;
    /** The packageFamilyName property */
    private _packageFamilyName?: string | undefined;
    /** The payload property */
    private _payload?: PayloadRequest | undefined;
    /** The permissionTicket property */
    private _permissionTicket?: string | undefined;
    /** The postBackUri property */
    private _postBackUri?: string | undefined;
    /** The responsepayload property */
    private _responsepayload?: PayloadResponse | undefined;
    /** The status property */
    private _status?: string | undefined;
    /** The type property */
    private _type?: string | undefined;
    /**
     * Gets the appServiceName property value. The appServiceName property
     * @returns a string
     */
    public get appServiceName() {
        return this._appServiceName;
    };
    /**
     * Sets the appServiceName property value. The appServiceName property
     * @param value Value to set for the appServiceName property.
     */
    public set appServiceName(value: string | undefined) {
        this._appServiceName = value;
    };
    /**
     * Instantiates a new command and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the error property value. The error property
     * @returns a string
     */
    public get error_escaped() {
        return this._error_escaped;
    };
    /**
     * Sets the error property value. The error property
     * @param value Value to set for the error_escaped property.
     */
    public set error_escaped(value: string | undefined) {
        this._error_escaped = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "appServiceName": n => { this.appServiceName = n.getStringValue(); },
            "error": n => { this.error_escaped = n.getStringValue(); },
            "packageFamilyName": n => { this.packageFamilyName = n.getStringValue(); },
            "payload": n => { this.payload = n.getObjectValue<PayloadRequest>(createPayloadRequestFromDiscriminatorValue); },
            "permissionTicket": n => { this.permissionTicket = n.getStringValue(); },
            "postBackUri": n => { this.postBackUri = n.getStringValue(); },
            "responsepayload": n => { this.responsepayload = n.getObjectValue<PayloadResponse>(createPayloadResponseFromDiscriminatorValue); },
            "status": n => { this.status = n.getStringValue(); },
            "type": n => { this.type = n.getStringValue(); },
        };
    };
    /**
     * Gets the packageFamilyName property value. The packageFamilyName property
     * @returns a string
     */
    public get packageFamilyName() {
        return this._packageFamilyName;
    };
    /**
     * Sets the packageFamilyName property value. The packageFamilyName property
     * @param value Value to set for the packageFamilyName property.
     */
    public set packageFamilyName(value: string | undefined) {
        this._packageFamilyName = value;
    };
    /**
     * Gets the payload property value. The payload property
     * @returns a payloadRequest
     */
    public get payload() {
        return this._payload;
    };
    /**
     * Sets the payload property value. The payload property
     * @param value Value to set for the payload property.
     */
    public set payload(value: PayloadRequest | undefined) {
        this._payload = value;
    };
    /**
     * Gets the permissionTicket property value. The permissionTicket property
     * @returns a string
     */
    public get permissionTicket() {
        return this._permissionTicket;
    };
    /**
     * Sets the permissionTicket property value. The permissionTicket property
     * @param value Value to set for the permissionTicket property.
     */
    public set permissionTicket(value: string | undefined) {
        this._permissionTicket = value;
    };
    /**
     * Gets the postBackUri property value. The postBackUri property
     * @returns a string
     */
    public get postBackUri() {
        return this._postBackUri;
    };
    /**
     * Sets the postBackUri property value. The postBackUri property
     * @param value Value to set for the postBackUri property.
     */
    public set postBackUri(value: string | undefined) {
        this._postBackUri = value;
    };
    /**
     * Gets the responsepayload property value. The responsepayload property
     * @returns a payloadResponse
     */
    public get responsepayload() {
        return this._responsepayload;
    };
    /**
     * Sets the responsepayload property value. The responsepayload property
     * @param value Value to set for the responsepayload property.
     */
    public set responsepayload(value: PayloadResponse | undefined) {
        this._responsepayload = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("appServiceName", this.appServiceName);
        writer.writeStringValue("error", this.error_escaped);
        writer.writeStringValue("packageFamilyName", this.packageFamilyName);
        writer.writeObjectValue<PayloadRequest>("payload", this.payload);
        writer.writeStringValue("permissionTicket", this.permissionTicket);
        writer.writeStringValue("postBackUri", this.postBackUri);
        writer.writeObjectValue<PayloadResponse>("responsepayload", this.responsepayload);
        writer.writeStringValue("status", this.status);
        writer.writeStringValue("type", this.type);
    };
    /**
     * Gets the status property value. The status property
     * @returns a string
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The status property
     * @param value Value to set for the status property.
     */
    public set status(value: string | undefined) {
        this._status = value;
    };
    /**
     * Gets the type property value. The type property
     * @returns a string
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. The type property
     * @param value Value to set for the type property.
     */
    public set type(value: string | undefined) {
        this._type = value;
    };
}
