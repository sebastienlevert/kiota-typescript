import {Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UserConfiguration extends Entity implements Parsable {
    /** The binaryData property */
    private _binaryData?: string | undefined;
    /**
     * Gets the binaryData property value. The binaryData property
     * @returns a binary
     */
    public get binaryData() {
        return this._binaryData;
    };
    /**
     * Sets the binaryData property value. The binaryData property
     * @param value Value to set for the binaryData property.
     */
    public set binaryData(value: string | undefined) {
        this._binaryData = value;
    };
    /**
     * Instantiates a new userConfiguration and sets the default values.
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
            "binaryData": n => { this.binaryData = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("binaryData", this.binaryData);
    };
}
