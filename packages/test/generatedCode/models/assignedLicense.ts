import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
 interface Guid{}
export class AssignedLicense implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** A collection of the unique identifiers for plans that have been disabled. */
    private _disabledPlans?: Guid[] | undefined;
    /** The unique identifier for the SKU. */
    private _skuId?: string | undefined;
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
     * Instantiates a new assignedLicense and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the disabledPlans property value. A collection of the unique identifiers for plans that have been disabled.
     * @returns a Guid
     */
    public get disabledPlans() {
        return this._disabledPlans;
    };
    /**
     * Sets the disabledPlans property value. A collection of the unique identifiers for plans that have been disabled.
     * @param value Value to set for the disabledPlans property.
     */
    public set disabledPlans(value: Guid[] | undefined) {
        this._disabledPlans = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            //"disabledPlans": n => { this.disabledPlans = n.getCollectionOfPrimitiveValues<guid>(); },
           // "skuId": n => { this.skuId = n.getGuidValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
       // writer.writeCollectionOfPrimitiveValues<guid>("disabledPlans", this.disabledPlans);
       // //writer.writeGuidValue("skuId", this.skuId);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the skuId property value. The unique identifier for the SKU.
     * @returns a Guid
     */
    public get skuId() {
        return this._skuId;
    };
    /**
     * Sets the skuId property value. The unique identifier for the SKU.
     * @param value Value to set for the skuId property.
     */
    public set skuId(value: string | undefined) {
        this._skuId = value;
    };
}
