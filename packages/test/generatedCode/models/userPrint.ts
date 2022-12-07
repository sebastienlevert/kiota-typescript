import {createPrinterShareFromDiscriminatorValue} from './createPrinterShareFromDiscriminatorValue';
import {PrinterShare} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UserPrint implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The recentPrinterShares property */
    private _recentPrinterShares?: PrinterShare[] | undefined;
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
     * Instantiates a new userPrint and sets the default values.
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
            "recentPrinterShares": n => { this.recentPrinterShares = n.getCollectionOfObjectValues<PrinterShare>(createPrinterShareFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the recentPrinterShares property value. The recentPrinterShares property
     * @returns a printerShare
     */
    public get recentPrinterShares() {
        return this._recentPrinterShares;
    };
    /**
     * Sets the recentPrinterShares property value. The recentPrinterShares property
     * @param value Value to set for the recentPrinterShares property.
     */
    public set recentPrinterShares(value: PrinterShare[] | undefined) {
        this._recentPrinterShares = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<PrinterShare>("recentPrinterShares", this.recentPrinterShares);
        writer.writeAdditionalData(this.additionalData);
    };
}
