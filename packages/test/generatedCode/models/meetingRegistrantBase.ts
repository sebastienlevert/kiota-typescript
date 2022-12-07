import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class MeetingRegistrantBase extends Entity implements Parsable {
    /** A unique web URL for the registrant to join the meeting. Read-only. */
    private _joinWebUrl?: string | undefined;
    /**
     * Instantiates a new meetingRegistrantBase and sets the default values.
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
            "joinWebUrl": n => { this.joinWebUrl = n.getStringValue(); },
        };
    };
    /**
     * Gets the joinWebUrl property value. A unique web URL for the registrant to join the meeting. Read-only.
     * @returns a string
     */
    public get joinWebUrl() {
        return this._joinWebUrl;
    };
    /**
     * Sets the joinWebUrl property value. A unique web URL for the registrant to join the meeting. Read-only.
     * @param value Value to set for the joinWebUrl property.
     */
    public set joinWebUrl(value: string | undefined) {
        this._joinWebUrl = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("joinWebUrl", this.joinWebUrl);
    };
}
