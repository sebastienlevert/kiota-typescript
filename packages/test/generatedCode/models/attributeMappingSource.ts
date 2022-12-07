import {AttributeMappingSourceType} from './attributeMappingSourceType';
import {createStringKeyAttributeMappingSourceValuePairFromDiscriminatorValue} from './createStringKeyAttributeMappingSourceValuePairFromDiscriminatorValue';
import {StringKeyAttributeMappingSourceValuePair} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AttributeMappingSource implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The expression property */
    private _expression?: string | undefined;
    /** The name property */
    private _name?: string | undefined;
    /** The parameters property */
    private _parameters?: StringKeyAttributeMappingSourceValuePair[] | undefined;
    /** The type property */
    private _type?: AttributeMappingSourceType | undefined;
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
     * Instantiates a new attributeMappingSource and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the expression property value. The expression property
     * @returns a string
     */
    public get expression() {
        return this._expression;
    };
    /**
     * Sets the expression property value. The expression property
     * @param value Value to set for the expression property.
     */
    public set expression(value: string | undefined) {
        this._expression = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "expression": n => { this.expression = n.getStringValue(); },
            "name": n => { this.name = n.getStringValue(); },
            "parameters": n => { this.parameters = n.getCollectionOfObjectValues<StringKeyAttributeMappingSourceValuePair>(createStringKeyAttributeMappingSourceValuePairFromDiscriminatorValue); },
            "type": n => { this.type = n.getEnumValue<AttributeMappingSourceType>(AttributeMappingSourceType); },
        };
    };
    /**
     * Gets the name property value. The name property
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. The name property
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
    };
    /**
     * Gets the parameters property value. The parameters property
     * @returns a stringKeyAttributeMappingSourceValuePair
     */
    public get parameters() {
        return this._parameters;
    };
    /**
     * Sets the parameters property value. The parameters property
     * @param value Value to set for the parameters property.
     */
    public set parameters(value: StringKeyAttributeMappingSourceValuePair[] | undefined) {
        this._parameters = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("expression", this.expression);
        writer.writeStringValue("name", this.name);
        writer.writeCollectionOfObjectValues<StringKeyAttributeMappingSourceValuePair>("parameters", this.parameters);
        writer.writeEnumValue<AttributeMappingSourceType>("type", this.type);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the type property value. The type property
     * @returns a attributeMappingSourceType
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. The type property
     * @param value Value to set for the type property.
     */
    public set type(value: AttributeMappingSourceType | undefined) {
        this._type = value;
    };
}
