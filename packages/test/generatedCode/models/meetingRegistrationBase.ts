import {createMeetingRegistrantBaseFromDiscriminatorValue} from './createMeetingRegistrantBaseFromDiscriminatorValue';
import {Entity, MeetingRegistrantBase} from './index';
import {MeetingAudience} from './meetingAudience';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MeetingRegistrationBase extends Entity implements Parsable {
    /** The allowedRegistrant property */
    private _allowedRegistrant?: MeetingAudience | undefined;
    /** Registrants of the online meeting. */
    private _registrants?: MeetingRegistrantBase[] | undefined;
    /**
     * Gets the allowedRegistrant property value. The allowedRegistrant property
     * @returns a meetingAudience
     */
    public get allowedRegistrant() {
        return this._allowedRegistrant;
    };
    /**
     * Sets the allowedRegistrant property value. The allowedRegistrant property
     * @param value Value to set for the allowedRegistrant property.
     */
    public set allowedRegistrant(value: MeetingAudience | undefined) {
        this._allowedRegistrant = value;
    };
    /**
     * Instantiates a new meetingRegistrationBase and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "allowedRegistrant": n => { this.allowedRegistrant = n.getEnumValue<MeetingAudience>(MeetingAudience); },
            "registrants": n => { this.registrants = n.getCollectionOfObjectValues<MeetingRegistrantBase>(createMeetingRegistrantBaseFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the registrants property value. Registrants of the online meeting.
     * @returns a meetingRegistrantBase
     */
    public get registrants() {
        return this._registrants;
    };
    /**
     * Sets the registrants property value. Registrants of the online meeting.
     * @param value Value to set for the registrants property.
     */
    public set registrants(value: MeetingRegistrantBase[] | undefined) {
        this._registrants = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<MeetingAudience>("allowedRegistrant", this.allowedRegistrant);
        writer.writeCollectionOfObjectValues<MeetingRegistrantBase>("registrants", this.registrants);
    };
}
