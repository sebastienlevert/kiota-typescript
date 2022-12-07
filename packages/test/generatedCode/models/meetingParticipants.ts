import {createMeetingParticipantInfoFromDiscriminatorValue} from './createMeetingParticipantInfoFromDiscriminatorValue';
import {MeetingParticipantInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MeetingParticipants implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Information of the meeting attendees. */
    private _attendees?: MeetingParticipantInfo[] | undefined;
    /** The contributors property */
    private _contributors?: MeetingParticipantInfo[] | undefined;
    /** The organizer property */
    private _organizer?: MeetingParticipantInfo | undefined;
    /** The producers property */
    private _producers?: MeetingParticipantInfo[] | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Gets the attendees property value. Information of the meeting attendees.
     * @returns a meetingParticipantInfo
     */
    public get attendees() {
        return this._attendees;
    };
    /**
     * Sets the attendees property value. Information of the meeting attendees.
     * @param value Value to set for the attendees property.
     */
    public set attendees(value: MeetingParticipantInfo[] | undefined) {
        this._attendees = value;
    };
    /**
     * Instantiates a new meetingParticipants and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the contributors property value. The contributors property
     * @returns a meetingParticipantInfo
     */
    public get contributors() {
        return this._contributors;
    };
    /**
     * Sets the contributors property value. The contributors property
     * @param value Value to set for the contributors property.
     */
    public set contributors(value: MeetingParticipantInfo[] | undefined) {
        this._contributors = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "attendees": n => { this.attendees = n.getCollectionOfObjectValues<MeetingParticipantInfo>(createMeetingParticipantInfoFromDiscriminatorValue); },
            "contributors": n => { this.contributors = n.getCollectionOfObjectValues<MeetingParticipantInfo>(createMeetingParticipantInfoFromDiscriminatorValue); },
            "organizer": n => { this.organizer = n.getObjectValue<MeetingParticipantInfo>(createMeetingParticipantInfoFromDiscriminatorValue); },
            "producers": n => { this.producers = n.getCollectionOfObjectValues<MeetingParticipantInfo>(createMeetingParticipantInfoFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the organizer property value. The organizer property
     * @returns a meetingParticipantInfo
     */
    public get organizer() {
        return this._organizer;
    };
    /**
     * Sets the organizer property value. The organizer property
     * @param value Value to set for the organizer property.
     */
    public set organizer(value: MeetingParticipantInfo | undefined) {
        this._organizer = value;
    };
    /**
     * Gets the producers property value. The producers property
     * @returns a meetingParticipantInfo
     */
    public get producers() {
        return this._producers;
    };
    /**
     * Sets the producers property value. The producers property
     * @param value Value to set for the producers property.
     */
    public set producers(value: MeetingParticipantInfo[] | undefined) {
        this._producers = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<MeetingParticipantInfo>("attendees", this.attendees);
        writer.writeCollectionOfObjectValues<MeetingParticipantInfo>("contributors", this.contributors);
        writer.writeObjectValue<MeetingParticipantInfo>("organizer", this.organizer);
        writer.writeCollectionOfObjectValues<MeetingParticipantInfo>("producers", this.producers);
        writer.writeAdditionalData(this.additionalData);
    };
}
