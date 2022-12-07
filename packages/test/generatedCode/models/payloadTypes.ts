import {createVisualPropertiesFromDiscriminatorValue} from './createVisualPropertiesFromDiscriminatorValue';
import {VisualProperties} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PayloadTypes implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The notification content of a raw user notification that will be delivered to and consumed by the app client on all supported platforms (Windows, iOS, Android or WebPush) receiving this notification. At least one of Payload.RawContent or Payload.VisualContent needs to be valid for a POST Notification request. */
    private _rawContent?: string | undefined;
    /** The visualContent property */
    private _visualContent?: VisualProperties | undefined;
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
     * Instantiates a new payloadTypes and sets the default values.
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
            "rawContent": n => { this.rawContent = n.getStringValue(); },
            "visualContent": n => { this.visualContent = n.getObjectValue<VisualProperties>(createVisualPropertiesFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the rawContent property value. The notification content of a raw user notification that will be delivered to and consumed by the app client on all supported platforms (Windows, iOS, Android or WebPush) receiving this notification. At least one of Payload.RawContent or Payload.VisualContent needs to be valid for a POST Notification request.
     * @returns a string
     */
    public get rawContent() {
        return this._rawContent;
    };
    /**
     * Sets the rawContent property value. The notification content of a raw user notification that will be delivered to and consumed by the app client on all supported platforms (Windows, iOS, Android or WebPush) receiving this notification. At least one of Payload.RawContent or Payload.VisualContent needs to be valid for a POST Notification request.
     * @param value Value to set for the rawContent property.
     */
    public set rawContent(value: string | undefined) {
        this._rawContent = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeStringValue("rawContent", this.rawContent);
        writer.writeObjectValue<VisualProperties>("visualContent", this.visualContent);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the visualContent property value. The visualContent property
     * @returns a visualProperties
     */
    public get visualContent() {
        return this._visualContent;
    };
    /**
     * Sets the visualContent property value. The visualContent property
     * @param value Value to set for the visualContent property.
     */
    public set visualContent(value: VisualProperties | undefined) {
        this._visualContent = value;
    };
}
