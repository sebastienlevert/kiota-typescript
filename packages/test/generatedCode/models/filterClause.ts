import {createFilterOperandFromDiscriminatorValue} from './createFilterOperandFromDiscriminatorValue';
import {FilterOperand} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class FilterClause implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Name of the operator to be applied to the source and target operands. Must be one of the supported operators. Supported operators can be discovered. */
    private _operatorName?: string | undefined;
    /** Name of source operand (the operand being tested). The source operand name must match one of the attribute names on the source object. */
    private _sourceOperandName?: string | undefined;
    /** The targetOperand property */
    private _targetOperand?: FilterOperand | undefined;
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
     * Instantiates a new filterClause and sets the default values.
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
            "operatorName": n => { this.operatorName = n.getStringValue(); },
            "sourceOperandName": n => { this.sourceOperandName = n.getStringValue(); },
            "targetOperand": n => { this.targetOperand = n.getObjectValue<FilterOperand>(createFilterOperandFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the operatorName property value. Name of the operator to be applied to the source and target operands. Must be one of the supported operators. Supported operators can be discovered.
     * @returns a string
     */
    public get operatorName() {
        return this._operatorName;
    };
    /**
     * Sets the operatorName property value. Name of the operator to be applied to the source and target operands. Must be one of the supported operators. Supported operators can be discovered.
     * @param value Value to set for the operatorName property.
     */
    public set operatorName(value: string | undefined) {
        this._operatorName = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("operatorName", this.operatorName);
        writer.writeStringValue("sourceOperandName", this.sourceOperandName);
        writer.writeObjectValue<FilterOperand>("targetOperand", this.targetOperand);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the sourceOperandName property value. Name of source operand (the operand being tested). The source operand name must match one of the attribute names on the source object.
     * @returns a string
     */
    public get sourceOperandName() {
        return this._sourceOperandName;
    };
    /**
     * Sets the sourceOperandName property value. Name of source operand (the operand being tested). The source operand name must match one of the attribute names on the source object.
     * @param value Value to set for the sourceOperandName property.
     */
    public set sourceOperandName(value: string | undefined) {
        this._sourceOperandName = value;
    };
    /**
     * Gets the targetOperand property value. The targetOperand property
     * @returns a filterOperand
     */
    public get targetOperand() {
        return this._targetOperand;
    };
    /**
     * Sets the targetOperand property value. The targetOperand property
     * @param value Value to set for the targetOperand property.
     */
    public set targetOperand(value: FilterOperand | undefined) {
        this._targetOperand = value;
    };
}
