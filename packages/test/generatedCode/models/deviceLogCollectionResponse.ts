import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

interface Guid{}
/** Windows Log Collection request entity. */
export class DeviceLogCollectionResponse extends Entity implements Parsable {
    /** The User Principal Name (UPN) of the user that enrolled the device */
    private _enrolledByUser?: string | undefined;
    /** The error code, if any. Valid values -9.22337203685478E+18 to 9.22337203685478E+18 */
    private _errorCode?: number | undefined;
    /** The DateTime of the expiration of the logs */
    private _expirationDateTimeUTC?: Date | undefined;
    /** The UPN for who initiated the request */
    private _initiatedByUserPrincipalName?: string | undefined;
    /** The device Id */
    private _managedDeviceId?: string | undefined;
    /** The DateTime the request was received */
    private _receivedDateTimeUTC?: Date | undefined;
    /** The DateTime of the request */
    private _requestedDateTimeUTC?: Date | undefined;
    /** The size of the logs. Valid values -1.79769313486232E+308 to 1.79769313486232E+308 */
    private _size?: number | undefined;
    /** The status of the log collection request */
    private _status?: string | undefined;
    /**
     * Instantiates a new deviceLogCollectionResponse and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the enrolledByUser property value. The User Principal Name (UPN) of the user that enrolled the device
     * @returns a string
     */
    public get enrolledByUser() {
        return this._enrolledByUser;
    };
    /**
     * Sets the enrolledByUser property value. The User Principal Name (UPN) of the user that enrolled the device
     * @param value Value to set for the enrolledByUser property.
     */
    public set enrolledByUser(value: string | undefined) {
        this._enrolledByUser = value;
    };
    /**
     * Gets the errorCode property value. The error code, if any. Valid values -9.22337203685478E+18 to 9.22337203685478E+18
     * @returns a int64
     */
    public get errorCode() {
        return this._errorCode;
    };
    /**
     * Sets the errorCode property value. The error code, if any. Valid values -9.22337203685478E+18 to 9.22337203685478E+18
     * @param value Value to set for the errorCode property.
     */
    public set errorCode(value: number | undefined) {
        this._errorCode = value;
    };
    /**
     * Gets the expirationDateTimeUTC property value. The DateTime of the expiration of the logs
     * @returns a Date
     */
    public get expirationDateTimeUTC() {
        return this._expirationDateTimeUTC;
    };
    /**
     * Sets the expirationDateTimeUTC property value. The DateTime of the expiration of the logs
     * @param value Value to set for the expirationDateTimeUTC property.
     */
    public set expirationDateTimeUTC(value: Date | undefined) {
        this._expirationDateTimeUTC = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "enrolledByUser": n => { this.enrolledByUser = n.getStringValue(); },
            "errorCode": n => { this.errorCode = n.getNumberValue(); },
            "expirationDateTimeUTC": n => { this.expirationDateTimeUTC = n.getDateValue(); },
            "initiatedByUserPrincipalName": n => { this.initiatedByUserPrincipalName = n.getStringValue(); },
            "managedDeviceId": n => { this.managedDeviceId = n.getGuidValue(); },
            "receivedDateTimeUTC": n => { this.receivedDateTimeUTC = n.getDateValue(); },
            "requestedDateTimeUTC": n => { this.requestedDateTimeUTC = n.getDateValue(); },
            "size": n => { this.size = n.getNumberValue(); },
            "status": n => { this.status = n.getStringValue(); },
        };
    };
    /**
     * Gets the initiatedByUserPrincipalName property value. The UPN for who initiated the request
     * @returns a string
     */
    public get initiatedByUserPrincipalName() {
        return this._initiatedByUserPrincipalName;
    };
    /**
     * Sets the initiatedByUserPrincipalName property value. The UPN for who initiated the request
     * @param value Value to set for the initiatedByUserPrincipalName property.
     */
    public set initiatedByUserPrincipalName(value: string | undefined) {
        this._initiatedByUserPrincipalName = value;
    };
    /**
     * Gets the managedDeviceId property value. The device Id
     * @returns a Guid
     */
    public get managedDeviceId() {
        return this._managedDeviceId;
    };
    /**
     * Sets the managedDeviceId property value. The device Id
     * @param value Value to set for the managedDeviceId property.
     */
    public set managedDeviceId(value: string | undefined) {
        this._managedDeviceId = value;
    };
    /**
     * Gets the receivedDateTimeUTC property value. The DateTime the request was received
     * @returns a Date
     */
    public get receivedDateTimeUTC() {
        return this._receivedDateTimeUTC;
    };
    /**
     * Sets the receivedDateTimeUTC property value. The DateTime the request was received
     * @param value Value to set for the receivedDateTimeUTC property.
     */
    public set receivedDateTimeUTC(value: Date | undefined) {
        this._receivedDateTimeUTC = value;
    };
    /**
     * Gets the requestedDateTimeUTC property value. The DateTime of the request
     * @returns a Date
     */
    public get requestedDateTimeUTC() {
        return this._requestedDateTimeUTC;
    };
    /**
     * Sets the requestedDateTimeUTC property value. The DateTime of the request
     * @param value Value to set for the requestedDateTimeUTC property.
     */
    public set requestedDateTimeUTC(value: Date | undefined) {
        this._requestedDateTimeUTC = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("enrolledByUser", this.enrolledByUser);
        writer.writeNumberValue("errorCode", this.errorCode);
        writer.writeDateValue("expirationDateTimeUTC", this.expirationDateTimeUTC);
        writer.writeStringValue("initiatedByUserPrincipalName", this.initiatedByUserPrincipalName);
        ////writer.writeGuidValue("managedDeviceId", this.managedDeviceId);
        writer.writeDateValue("receivedDateTimeUTC", this.receivedDateTimeUTC);
        writer.writeDateValue("requestedDateTimeUTC", this.requestedDateTimeUTC);
        writer.writeNumberValue("size", this.size);
        writer.writeStringValue("status", this.status);
    };
    /**
     * Gets the size property value. The size of the logs. Valid values -1.79769313486232E+308 to 1.79769313486232E+308
     * @returns a double
     */
    public get size() {
        return this._size;
    };
    /**
     * Sets the size property value. The size of the logs. Valid values -1.79769313486232E+308 to 1.79769313486232E+308
     * @param value Value to set for the size property.
     */
    public set size(value: number | undefined) {
        this._size = value;
    };
    /**
     * Gets the status property value. The status of the log collection request
     * @returns a string
     */
    public get status() {
        return this._status;
    };
    /**
     * Sets the status property value. The status of the log collection request
     * @param value Value to set for the status property.
     */
    public set status(value: string | undefined) {
        this._status = value;
    };
}
