import { Parsable, ParseNode, SerializationWriter } from '@microsoft/kiota-abstractions';
export declare class DateTimeTimeZone implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData;
    /** A single point of time in a combined date and time representation ({date}T{time}; for example, 2017-08-29T04:00:00.0000000).  */
    private _dateTime?;
    /** Represents a time zone, for example, 'Pacific Standard Time'. See below for more possible values.  */
    private _timeZone?;
    /**
     * Instantiates a new dateTimeTimeZone and sets the default values.
     */
    constructor();
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    get additionalData(): Map<string, unknown>;
    /**
     * Gets the dateTime property value. A single point of time in a combined date and time representation ({date}T{time}; for example, 2017-08-29T04:00:00.0000000).
     * @returns a string
     */
    get dateTime(): string | undefined;
    /**
     * Gets the timeZone property value. Represents a time zone, for example, 'Pacific Standard Time'. See below for more possible values.
     * @returns a string
     */
    get timeZone(): string | undefined;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    getFieldDeserializers<T>(): Map<string, (item: T, node: ParseNode) => void>;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    serialize(writer: SerializationWriter): void;
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    set additionalData(value: Map<string, unknown>);
    /**
     * Sets the dateTime property value. A single point of time in a combined date and time representation ({date}T{time}; for example, 2017-08-29T04:00:00.0000000).
     * @param value Value to set for the dateTime property.
     */
    set dateTime(value: string | undefined);
    /**
     * Sets the timeZone property value. Represents a time zone, for example, 'Pacific Standard Time'. See below for more possible values.
     * @param value Value to set for the timeZone property.
     */
    set timeZone(value: string | undefined);
}
//# sourceMappingURL=dateTimeTimeZone.d.ts.map