import { DateTimeTimeZone } from './dateTimeTimeZone';
import { FollowupFlagStatus } from './followupFlagStatus';
import { Parsable, ParseNode, SerializationWriter } from '@microsoft/kiota-abstractions';
export declare class FollowupFlag implements Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    private _additionalData;
    private _completedDateTime?;
    private _dueDateTime?;
    private _flagStatus?;
    private _startDateTime?;
    /**
     * Instantiates a new followupFlag and sets the default values.
     */
    constructor();
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    get additionalData(): Map<string, unknown>;
    /**
     * Gets the completedDateTime property value.
     * @returns a dateTimeTimeZone
     */
    get completedDateTime(): DateTimeTimeZone | undefined;
    /**
     * Gets the dueDateTime property value.
     * @returns a dateTimeTimeZone
     */
    get dueDateTime(): DateTimeTimeZone | undefined;
    /**
     * Gets the flagStatus property value.
     * @returns a followupFlagStatus
     */
    get flagStatus(): FollowupFlagStatus | undefined;
    /**
     * Gets the startDateTime property value.
     * @returns a dateTimeTimeZone
     */
    get startDateTime(): DateTimeTimeZone | undefined;
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
     * Sets the completedDateTime property value.
     * @param value Value to set for the completedDateTime property.
     */
    set completedDateTime(value: DateTimeTimeZone | undefined);
    /**
     * Sets the dueDateTime property value.
     * @param value Value to set for the dueDateTime property.
     */
    set dueDateTime(value: DateTimeTimeZone | undefined);
    /**
     * Sets the flagStatus property value.
     * @param value Value to set for the flagStatus property.
     */
    set flagStatus(value: FollowupFlagStatus | undefined);
    /**
     * Sets the startDateTime property value.
     * @param value Value to set for the startDateTime property.
     */
    set startDateTime(value: DateTimeTimeZone | undefined);
}
//# sourceMappingURL=followupFlag.d.ts.map