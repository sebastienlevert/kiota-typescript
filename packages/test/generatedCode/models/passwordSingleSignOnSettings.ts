import {createPasswordSingleSignOnFieldFromDiscriminatorValue} from './createPasswordSingleSignOnFieldFromDiscriminatorValue';
import {PasswordSingleSignOnField} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PasswordSingleSignOnSettings implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The fields property */
    private _fields?: PasswordSingleSignOnField[] | undefined;
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
     * Instantiates a new passwordSingleSignOnSettings and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the fields property value. The fields property
     * @returns a passwordSingleSignOnField
     */
    public get fields() {
        return this._fields;
    };
    /**
     * Sets the fields property value. The fields property
     * @param value Value to set for the fields property.
     */
    public set fields(value: PasswordSingleSignOnField[] | undefined) {
        this._fields = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "fields": n => { this.fields = n.getCollectionOfObjectValues<PasswordSingleSignOnField>(createPasswordSingleSignOnFieldFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<PasswordSingleSignOnField>("fields", this.fields);
        writer.writeAdditionalData(this.additionalData);
    };
}
