import {createMeetingRegistrationQuestionFromDiscriminatorValue} from './createMeetingRegistrationQuestionFromDiscriminatorValue';
import {createMeetingSpeakerFromDiscriminatorValue} from './createMeetingSpeakerFromDiscriminatorValue';
import {MeetingRegistrationBase, MeetingRegistrationQuestion, MeetingSpeaker} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MeetingRegistration extends MeetingRegistrationBase implements Parsable {
    /** Custom registration questions. */
    private _customQuestions?: MeetingRegistrationQuestion[] | undefined;
    /** The description of the meeting. */
    private _description?: string | undefined;
    /** The meeting end time in UTC. */
    private _endDateTime?: Date | undefined;
    /** The number of times the registration page has been visited. Read-only. */
    private _registrationPageViewCount?: number | undefined;
    /** The URL of the registration page. Read-only. */
    private _registrationPageWebUrl?: string | undefined;
    /** The meeting speaker's information. */
    private _speakers?: MeetingSpeaker[] | undefined;
    /** The meeting start time in UTC. */
    private _startDateTime?: Date | undefined;
    /** The subject of the meeting. */
    private _subject?: string | undefined;
    /**
     * Instantiates a new meetingRegistration and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the customQuestions property value. Custom registration questions.
     * @returns a meetingRegistrationQuestion
     */
    public get customQuestions() {
        return this._customQuestions;
    };
    /**
     * Sets the customQuestions property value. Custom registration questions.
     * @param value Value to set for the customQuestions property.
     */
    public set customQuestions(value: MeetingRegistrationQuestion[] | undefined) {
        this._customQuestions = value;
    };
    /**
     * Gets the description property value. The description of the meeting.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. The description of the meeting.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the endDateTime property value. The meeting end time in UTC.
     * @returns a Date
     */
    public get endDateTime() {
        return this._endDateTime;
    };
    /**
     * Sets the endDateTime property value. The meeting end time in UTC.
     * @param value Value to set for the endDateTime property.
     */
    public set endDateTime(value: Date | undefined) {
        this._endDateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "customQuestions": n => { this.customQuestions = n.getCollectionOfObjectValues<MeetingRegistrationQuestion>(createMeetingRegistrationQuestionFromDiscriminatorValue); },
            "description": n => { this.description = n.getStringValue(); },
            "endDateTime": n => { this.endDateTime = n.getDateValue(); },
            "registrationPageViewCount": n => { this.registrationPageViewCount = n.getNumberValue(); },
            "registrationPageWebUrl": n => { this.registrationPageWebUrl = n.getStringValue(); },
            "speakers": n => { this.speakers = n.getCollectionOfObjectValues<MeetingSpeaker>(createMeetingSpeakerFromDiscriminatorValue); },
            "startDateTime": n => { this.startDateTime = n.getDateValue(); },
            "subject": n => { this.subject = n.getStringValue(); },
        };
    };
    /**
     * Gets the registrationPageViewCount property value. The number of times the registration page has been visited. Read-only.
     * @returns a integer
     */
    public get registrationPageViewCount() {
        return this._registrationPageViewCount;
    };
    /**
     * Sets the registrationPageViewCount property value. The number of times the registration page has been visited. Read-only.
     * @param value Value to set for the registrationPageViewCount property.
     */
    public set registrationPageViewCount(value: number | undefined) {
        this._registrationPageViewCount = value;
    };
    /**
     * Gets the registrationPageWebUrl property value. The URL of the registration page. Read-only.
     * @returns a string
     */
    public get registrationPageWebUrl() {
        return this._registrationPageWebUrl;
    };
    /**
     * Sets the registrationPageWebUrl property value. The URL of the registration page. Read-only.
     * @param value Value to set for the registrationPageWebUrl property.
     */
    public set registrationPageWebUrl(value: string | undefined) {
        this._registrationPageWebUrl = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<MeetingRegistrationQuestion>("customQuestions", this.customQuestions);
        writer.writeStringValue("description", this.description);
        writer.writeDateValue("endDateTime", this.endDateTime);
        writer.writeNumberValue("registrationPageViewCount", this.registrationPageViewCount);
        writer.writeStringValue("registrationPageWebUrl", this.registrationPageWebUrl);
        writer.writeCollectionOfObjectValues<MeetingSpeaker>("speakers", this.speakers);
        writer.writeDateValue("startDateTime", this.startDateTime);
        writer.writeStringValue("subject", this.subject);
    };
    /**
     * Gets the speakers property value. The meeting speaker's information.
     * @returns a meetingSpeaker
     */
    public get speakers() {
        return this._speakers;
    };
    /**
     * Sets the speakers property value. The meeting speaker's information.
     * @param value Value to set for the speakers property.
     */
    public set speakers(value: MeetingSpeaker[] | undefined) {
        this._speakers = value;
    };
    /**
     * Gets the startDateTime property value. The meeting start time in UTC.
     * @returns a Date
     */
    public get startDateTime() {
        return this._startDateTime;
    };
    /**
     * Sets the startDateTime property value. The meeting start time in UTC.
     * @param value Value to set for the startDateTime property.
     */
    public set startDateTime(value: Date | undefined) {
        this._startDateTime = value;
    };
    /**
     * Gets the subject property value. The subject of the meeting.
     * @returns a string
     */
    public get subject() {
        return this._subject;
    };
    /**
     * Sets the subject property value. The subject of the meeting.
     * @param value Value to set for the subject property.
     */
    public set subject(value: string | undefined) {
        this._subject = value;
    };
}
