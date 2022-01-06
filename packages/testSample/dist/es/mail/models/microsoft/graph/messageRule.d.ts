import { Entity } from './entity';
import { MessageRuleActions } from './messageRuleActions';
import { MessageRulePredicates } from './messageRulePredicates';
import { Parsable, ParseNode, SerializationWriter } from '@microsoft/kiota-abstractions';
export declare class MessageRule extends Entity implements Parsable {
    private _actions?;
    private _conditions?;
    /** The display name of the rule.  */
    private _displayName?;
    private _exceptions?;
    /** Indicates whether the rule is in an error condition. Read-only.  */
    private _hasError?;
    /** Indicates whether the rule is enabled to be applied to messages.  */
    private _isEnabled?;
    /** Indicates if the rule is read-only and cannot be modified or deleted by the rules REST API.  */
    private _isReadOnly?;
    /** Indicates the order in which the rule is executed, among other rules.  */
    private _sequence?;
    /**
     * Instantiates a new messageRule and sets the default values.
     */
    constructor();
    /**
     * Gets the actions property value.
     * @returns a messageRuleActions
     */
    get actions(): MessageRuleActions | undefined;
    /**
     * Gets the conditions property value.
     * @returns a messageRulePredicates
     */
    get conditions(): MessageRulePredicates | undefined;
    /**
     * Gets the displayName property value. The display name of the rule.
     * @returns a string
     */
    get displayName(): string | undefined;
    /**
     * Gets the exceptions property value.
     * @returns a messageRulePredicates
     */
    get exceptions(): MessageRulePredicates | undefined;
    /**
     * Gets the hasError property value. Indicates whether the rule is in an error condition. Read-only.
     * @returns a boolean
     */
    get hasError(): boolean | undefined;
    /**
     * Gets the isEnabled property value. Indicates whether the rule is enabled to be applied to messages.
     * @returns a boolean
     */
    get isEnabled(): boolean | undefined;
    /**
     * Gets the isReadOnly property value. Indicates if the rule is read-only and cannot be modified or deleted by the rules REST API.
     * @returns a boolean
     */
    get isReadOnly(): boolean | undefined;
    /**
     * Gets the sequence property value. Indicates the order in which the rule is executed, among other rules.
     * @returns a integer
     */
    get sequence(): number | undefined;
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
     * Sets the actions property value.
     * @param value Value to set for the actions property.
     */
    set actions(value: MessageRuleActions | undefined);
    /**
     * Sets the conditions property value.
     * @param value Value to set for the conditions property.
     */
    set conditions(value: MessageRulePredicates | undefined);
    /**
     * Sets the displayName property value. The display name of the rule.
     * @param value Value to set for the displayName property.
     */
    set displayName(value: string | undefined);
    /**
     * Sets the exceptions property value.
     * @param value Value to set for the exceptions property.
     */
    set exceptions(value: MessageRulePredicates | undefined);
    /**
     * Sets the hasError property value. Indicates whether the rule is in an error condition. Read-only.
     * @param value Value to set for the hasError property.
     */
    set hasError(value: boolean | undefined);
    /**
     * Sets the isEnabled property value. Indicates whether the rule is enabled to be applied to messages.
     * @param value Value to set for the isEnabled property.
     */
    set isEnabled(value: boolean | undefined);
    /**
     * Sets the isReadOnly property value. Indicates if the rule is read-only and cannot be modified or deleted by the rules REST API.
     * @param value Value to set for the isReadOnly property.
     */
    set isReadOnly(value: boolean | undefined);
    /**
     * Sets the sequence property value. Indicates the order in which the rule is executed, among other rules.
     * @param value Value to set for the sequence property.
     */
    set sequence(value: number | undefined);
}
//# sourceMappingURL=messageRule.d.ts.map