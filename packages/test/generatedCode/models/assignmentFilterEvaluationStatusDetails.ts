import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** A class containing information about the payloads on which filter has been applied. */
export class AssignmentFilterEvaluationStatusDetails extends Entity implements Parsable {
    /** PayloadId on which filter has been applied. */
    private _payloadId?: string | undefined;
    /**
     * Instantiates a new assignmentFilterEvaluationStatusDetails and sets the default values.
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
            "payloadId": n => { this.payloadId = n.getStringValue(); },
        };
    };
    /**
     * Gets the payloadId property value. PayloadId on which filter has been applied.
     * @returns a string
     */
    public get payloadId() {
        return this._payloadId;
    };
    /**
     * Sets the payloadId property value. PayloadId on which filter has been applied.
     * @param value Value to set for the payloadId property.
     */
    public set payloadId(value: string | undefined) {
        this._payloadId = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("payloadId", this.payloadId);
    };
}
