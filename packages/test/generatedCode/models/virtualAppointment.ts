import {createVirtualAppointmentSettingsFromDiscriminatorValue} from './createVirtualAppointmentSettingsFromDiscriminatorValue';
import {createVirtualAppointmentUserFromDiscriminatorValue} from './createVirtualAppointmentUserFromDiscriminatorValue';
import {Entity, VirtualAppointmentSettings, VirtualAppointmentUser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class VirtualAppointment extends Entity implements Parsable {
    /** The join web URL of the virtual appointment for clients with waiting room and browser join. Optional. */
    private _appointmentClientJoinWebUrl?: string | undefined;
    /** The client information for the virtual appointment, including name, email, and SMS phone number. Optional. */
    private _appointmentClients?: VirtualAppointmentUser[] | undefined;
    /** The identifier of the appointment from the scheduling system, associated with the current virtual appointment. Optional. */
    private _externalAppointmentId?: string | undefined;
    /** The URL of the appointment resource from the scheduling system, associated with the current virtual appointment. Optional. */
    private _externalAppointmentUrl?: string | undefined;
    /** The settings property */
    private _settings?: VirtualAppointmentSettings | undefined;
    /**
     * Gets the appointmentClientJoinWebUrl property value. The join web URL of the virtual appointment for clients with waiting room and browser join. Optional.
     * @returns a string
     */
    public get appointmentClientJoinWebUrl() {
        return this._appointmentClientJoinWebUrl;
    };
    /**
     * Sets the appointmentClientJoinWebUrl property value. The join web URL of the virtual appointment for clients with waiting room and browser join. Optional.
     * @param value Value to set for the appointmentClientJoinWebUrl property.
     */
    public set appointmentClientJoinWebUrl(value: string | undefined) {
        this._appointmentClientJoinWebUrl = value;
    };
    /**
     * Gets the appointmentClients property value. The client information for the virtual appointment, including name, email, and SMS phone number. Optional.
     * @returns a virtualAppointmentUser
     */
    public get appointmentClients() {
        return this._appointmentClients;
    };
    /**
     * Sets the appointmentClients property value. The client information for the virtual appointment, including name, email, and SMS phone number. Optional.
     * @param value Value to set for the appointmentClients property.
     */
    public set appointmentClients(value: VirtualAppointmentUser[] | undefined) {
        this._appointmentClients = value;
    };
    /**
     * Instantiates a new virtualAppointment and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the externalAppointmentId property value. The identifier of the appointment from the scheduling system, associated with the current virtual appointment. Optional.
     * @returns a string
     */
    public get externalAppointmentId() {
        return this._externalAppointmentId;
    };
    /**
     * Sets the externalAppointmentId property value. The identifier of the appointment from the scheduling system, associated with the current virtual appointment. Optional.
     * @param value Value to set for the externalAppointmentId property.
     */
    public set externalAppointmentId(value: string | undefined) {
        this._externalAppointmentId = value;
    };
    /**
     * Gets the externalAppointmentUrl property value. The URL of the appointment resource from the scheduling system, associated with the current virtual appointment. Optional.
     * @returns a string
     */
    public get externalAppointmentUrl() {
        return this._externalAppointmentUrl;
    };
    /**
     * Sets the externalAppointmentUrl property value. The URL of the appointment resource from the scheduling system, associated with the current virtual appointment. Optional.
     * @param value Value to set for the externalAppointmentUrl property.
     */
    public set externalAppointmentUrl(value: string | undefined) {
        this._externalAppointmentUrl = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "appointmentClientJoinWebUrl": n => { this.appointmentClientJoinWebUrl = n.getStringValue(); },
            "appointmentClients": n => { this.appointmentClients = n.getCollectionOfObjectValues<VirtualAppointmentUser>(createVirtualAppointmentUserFromDiscriminatorValue); },
            "externalAppointmentId": n => { this.externalAppointmentId = n.getStringValue(); },
            "externalAppointmentUrl": n => { this.externalAppointmentUrl = n.getStringValue(); },
            "settings": n => { this.settings = n.getObjectValue<VirtualAppointmentSettings>(createVirtualAppointmentSettingsFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("appointmentClientJoinWebUrl", this.appointmentClientJoinWebUrl);
        writer.writeCollectionOfObjectValues<VirtualAppointmentUser>("appointmentClients", this.appointmentClients);
        writer.writeStringValue("externalAppointmentId", this.externalAppointmentId);
        writer.writeStringValue("externalAppointmentUrl", this.externalAppointmentUrl);
        writer.writeObjectValue<VirtualAppointmentSettings>("settings", this.settings);
    };
    /**
     * Gets the settings property value. The settings property
     * @returns a virtualAppointmentSettings
     */
    public get settings() {
        return this._settings;
    };
    /**
     * Sets the settings property value. The settings property
     * @param value Value to set for the settings property.
     */
    public set settings(value: VirtualAppointmentSettings | undefined) {
        this._settings = value;
    };
}
