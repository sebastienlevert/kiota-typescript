import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TargetPolicyEndpoints implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Use to filter the notification distribution to a specific platform or platforms. Valid values are Windows, iOS, Android and WebPush. By default, all push endpoint types (Windows, iOS, Android and WebPush) are enabled. */
    private _platformTypes?: string[] | undefined;
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
     * Instantiates a new targetPolicyEndpoints and sets the default values.
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
            "platformTypes": n => { this.platformTypes = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Gets the platformTypes property value. Use to filter the notification distribution to a specific platform or platforms. Valid values are Windows, iOS, Android and WebPush. By default, all push endpoint types (Windows, iOS, Android and WebPush) are enabled.
     * @returns a string
     */
    public get platformTypes() {
        return this._platformTypes;
    };
    /**
     * Sets the platformTypes property value. Use to filter the notification distribution to a specific platform or platforms. Valid values are Windows, iOS, Android and WebPush. By default, all push endpoint types (Windows, iOS, Android and WebPush) are enabled.
     * @param value Value to set for the platformTypes property.
     */
    public set platformTypes(value: string[] | undefined) {
        this._platformTypes = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfPrimitiveValues<string>("platformTypes", this.platformTypes);
        writer.writeAdditionalData(this.additionalData);
    };
}
