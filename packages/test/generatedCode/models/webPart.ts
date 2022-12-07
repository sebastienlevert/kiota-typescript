import {createSitePageDataFromDiscriminatorValue} from './createSitePageDataFromDiscriminatorValue';
import {SitePageData} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class WebPart implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The data property */
    private _data?: SitePageData | undefined;
    /** A unique identifier specifying the webPart type. Read-only. */
    private _type?: string | undefined;
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
     * Instantiates a new webPart and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the data property value. The data property
     * @returns a sitePageData
     */
    public get data() {
        return this._data;
    };
    /**
     * Sets the data property value. The data property
     * @param value Value to set for the data property.
     */
    public set data(value: SitePageData | undefined) {
        this._data = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "data": n => { this.data = n.getObjectValue<SitePageData>(createSitePageDataFromDiscriminatorValue); },
            "type": n => { this.type = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<SitePageData>("data", this.data);
        writer.writeStringValue("type", this.type);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the type property value. A unique identifier specifying the webPart type. Read-only.
     * @returns a string
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. A unique identifier specifying the webPart type. Read-only.
     * @param value Value to set for the type property.
     */
    public set type(value: string | undefined) {
        this._type = value;
    };
}
