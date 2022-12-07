import {createServiceInformationFromDiscriminatorValue} from './createServiceInformationFromDiscriminatorValue';
import {ItemFacet, ServiceInformation} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WebAccount extends ItemFacet implements Parsable {
    /** Contains the description the user has provided for the account on the service being referenced. */
    private _description?: string | undefined;
    /** The service property */
    private _service?: ServiceInformation | undefined;
    /** Contains a status message from the cloud service if provided or synchronized. */
    private _statusMessage?: string | undefined;
    /** The thumbnailUrl property */
    private _thumbnailUrl?: string | undefined;
    /** The user name  displayed for the webaccount. */
    private _userId?: string | undefined;
    /** Contains a link to the user's profile on the cloud service if one exists. */
    private _webUrl?: string | undefined;
    /**
     * Instantiates a new webAccount and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the description property value. Contains the description the user has provided for the account on the service being referenced.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Contains the description the user has provided for the account on the service being referenced.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "description": n => { this.description = n.getStringValue(); },
            "service": n => { this.service = n.getObjectValue<ServiceInformation>(createServiceInformationFromDiscriminatorValue); },
            "statusMessage": n => { this.statusMessage = n.getStringValue(); },
            "thumbnailUrl": n => { this.thumbnailUrl = n.getStringValue(); },
            "userId": n => { this.userId = n.getStringValue(); },
            "webUrl": n => { this.webUrl = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("description", this.description);
        writer.writeObjectValue<ServiceInformation>("service", this.service);
        writer.writeStringValue("statusMessage", this.statusMessage);
        writer.writeStringValue("thumbnailUrl", this.thumbnailUrl);
        writer.writeStringValue("userId", this.userId);
        writer.writeStringValue("webUrl", this.webUrl);
    };
    /**
     * Gets the service property value. The service property
     * @returns a serviceInformation
     */
    public get service() {
        return this._service;
    };
    /**
     * Sets the service property value. The service property
     * @param value Value to set for the service property.
     */
    public set service(value: ServiceInformation | undefined) {
        this._service = value;
    };
    /**
     * Gets the statusMessage property value. Contains a status message from the cloud service if provided or synchronized.
     * @returns a string
     */
    public get statusMessage() {
        return this._statusMessage;
    };
    /**
     * Sets the statusMessage property value. Contains a status message from the cloud service if provided or synchronized.
     * @param value Value to set for the statusMessage property.
     */
    public set statusMessage(value: string | undefined) {
        this._statusMessage = value;
    };
    /**
     * Gets the thumbnailUrl property value. The thumbnailUrl property
     * @returns a string
     */
    public get thumbnailUrl() {
        return this._thumbnailUrl;
    };
    /**
     * Sets the thumbnailUrl property value. The thumbnailUrl property
     * @param value Value to set for the thumbnailUrl property.
     */
    public set thumbnailUrl(value: string | undefined) {
        this._thumbnailUrl = value;
    };
    /**
     * Gets the userId property value. The user name  displayed for the webaccount.
     * @returns a string
     */
    public get userId() {
        return this._userId;
    };
    /**
     * Sets the userId property value. The user name  displayed for the webaccount.
     * @param value Value to set for the userId property.
     */
    public set userId(value: string | undefined) {
        this._userId = value;
    };
    /**
     * Gets the webUrl property value. Contains a link to the user's profile on the cloud service if one exists.
     * @returns a string
     */
    public get webUrl() {
        return this._webUrl;
    };
    /**
     * Sets the webUrl property value. Contains a link to the user's profile on the cloud service if one exists.
     * @param value Value to set for the webUrl property.
     */
    public set webUrl(value: string | undefined) {
        this._webUrl = value;
    };
}
