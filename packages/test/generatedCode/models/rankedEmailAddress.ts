import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RankedEmailAddress implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The email address. */
    private _address?: string | undefined;
    /** The rank of the email address. A rank is used as a sort key, in relation to the other returned results. A higher rank value corresponds to a more relevant result. Relevance is determined by communication, collaboration, and business relationship signals. */
    private _rank?: number | undefined;
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
     * Gets the address property value. The email address.
     * @returns a string
     */
    public get address() {
        return this._address;
    };
    /**
     * Sets the address property value. The email address.
     * @param value Value to set for the address property.
     */
    public set address(value: string | undefined) {
        this._address = value;
    };
    /**
     * Instantiates a new rankedEmailAddress and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "address": n => { this.address = n.getStringValue(); },
            "rank": n => { this.rank = n.getNumberValue(); },
        };
    };
    /**
     * Gets the rank property value. The rank of the email address. A rank is used as a sort key, in relation to the other returned results. A higher rank value corresponds to a more relevant result. Relevance is determined by communication, collaboration, and business relationship signals.
     * @returns a double
     */
    public get rank() {
        return this._rank;
    };
    /**
     * Sets the rank property value. The rank of the email address. A rank is used as a sort key, in relation to the other returned results. A higher rank value corresponds to a more relevant result. Relevance is determined by communication, collaboration, and business relationship signals.
     * @param value Value to set for the rank property.
     */
    public set rank(value: number | undefined) {
        this._rank = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("address", this.address);
        writer.writeNumberValue("rank", this.rank);
        writer.writeAdditionalData(this.additionalData);
    };
}
