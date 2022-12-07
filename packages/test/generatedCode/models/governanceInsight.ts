import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class GovernanceInsight extends Entity implements Parsable {
    /** Indicates when the insight was created. */
    private _insightCreatedDateTime?: Date | undefined;
    /**
     * Instantiates a new governanceInsight and sets the default values.
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
            "insightCreatedDateTime": n => { this.insightCreatedDateTime = n.getDateValue(); },
        };
    };
    /**
     * Gets the insightCreatedDateTime property value. Indicates when the insight was created.
     * @returns a Date
     */
    public get insightCreatedDateTime() {
        return this._insightCreatedDateTime;
    };
    /**
     * Sets the insightCreatedDateTime property value. Indicates when the insight was created.
     * @param value Value to set for the insightCreatedDateTime property.
     */
    public set insightCreatedDateTime(value: Date | undefined) {
        this._insightCreatedDateTime = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeDateValue("insightCreatedDateTime", this.insightCreatedDateTime);
    };
}
