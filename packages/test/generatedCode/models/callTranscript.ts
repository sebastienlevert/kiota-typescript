import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class CallTranscript extends Entity implements Parsable {
    /** A field representing the content of the transcript. Read-only. */
    private _content?: string | undefined;
    /** Date and time at which the transcript was created. Read-only. */
    private _createdDateTime?: Date | undefined;
    /**
     * Instantiates a new callTranscript and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the content property value. A field representing the content of the transcript. Read-only.
     * @returns a binary
     */
    public get content() {
        return this._content;
    };
    /**
     * Sets the content property value. A field representing the content of the transcript. Read-only.
     * @param value Value to set for the content property.
     */
    public set content(value: string | undefined) {
        this._content = value;
    };
    /**
     * Gets the createdDateTime property value. Date and time at which the transcript was created. Read-only.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. Date and time at which the transcript was created. Read-only.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "content": n => { this.content = n.getStringValue(); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("content", this.content);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
    };
}
