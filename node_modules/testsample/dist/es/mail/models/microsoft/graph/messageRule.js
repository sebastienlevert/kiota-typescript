import { Entity } from './entity';
import { MessageRuleActions } from './messageRuleActions';
import { MessageRulePredicates } from './messageRulePredicates';
export class MessageRule extends Entity {
    /**
     * Instantiates a new messageRule and sets the default values.
     */
    constructor() {
        super();
    }
    ;
    /**
     * Gets the actions property value.
     * @returns a messageRuleActions
     */
    get actions() {
        return this._actions;
    }
    ;
    /**
     * Gets the conditions property value.
     * @returns a messageRulePredicates
     */
    get conditions() {
        return this._conditions;
    }
    ;
    /**
     * Gets the displayName property value. The display name of the rule.
     * @returns a string
     */
    get displayName() {
        return this._displayName;
    }
    ;
    /**
     * Gets the exceptions property value.
     * @returns a messageRulePredicates
     */
    get exceptions() {
        return this._exceptions;
    }
    ;
    /**
     * Gets the hasError property value. Indicates whether the rule is in an error condition. Read-only.
     * @returns a boolean
     */
    get hasError() {
        return this._hasError;
    }
    ;
    /**
     * Gets the isEnabled property value. Indicates whether the rule is enabled to be applied to messages.
     * @returns a boolean
     */
    get isEnabled() {
        return this._isEnabled;
    }
    ;
    /**
     * Gets the isReadOnly property value. Indicates if the rule is read-only and cannot be modified or deleted by the rules REST API.
     * @returns a boolean
     */
    get isReadOnly() {
        return this._isReadOnly;
    }
    ;
    /**
     * Gets the sequence property value. Indicates the order in which the rule is executed, among other rules.
     * @returns a integer
     */
    get sequence() {
        return this._sequence;
    }
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    getFieldDeserializers() {
        return new Map([...super.getFieldDeserializers(),
            ["actions", (o, n) => { o.actions = n.getObjectValue(MessageRuleActions); }],
            ["conditions", (o, n) => { o.conditions = n.getObjectValue(MessageRulePredicates); }],
            ["displayName", (o, n) => { o.displayName = n.getStringValue(); }],
            ["exceptions", (o, n) => { o.exceptions = n.getObjectValue(MessageRulePredicates); }],
            ["hasError", (o, n) => { o.hasError = n.getBooleanValue(); }],
            ["isEnabled", (o, n) => { o.isEnabled = n.getBooleanValue(); }],
            ["isReadOnly", (o, n) => { o.isReadOnly = n.getBooleanValue(); }],
            ["sequence", (o, n) => { o.sequence = n.getNumberValue(); }],
        ]);
    }
    ;
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    serialize(writer) {
        if (!writer)
            throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue("actions", this.actions);
        writer.writeObjectValue("conditions", this.conditions);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeObjectValue("exceptions", this.exceptions);
        writer.writeBooleanValue("hasError", this.hasError);
        writer.writeBooleanValue("isEnabled", this.isEnabled);
        writer.writeBooleanValue("isReadOnly", this.isReadOnly);
        writer.writeNumberValue("sequence", this.sequence);
    }
    ;
    /**
     * Sets the actions property value.
     * @param value Value to set for the actions property.
     */
    set actions(value) {
        this._actions = value;
    }
    ;
    /**
     * Sets the conditions property value.
     * @param value Value to set for the conditions property.
     */
    set conditions(value) {
        this._conditions = value;
    }
    ;
    /**
     * Sets the displayName property value. The display name of the rule.
     * @param value Value to set for the displayName property.
     */
    set displayName(value) {
        this._displayName = value;
    }
    ;
    /**
     * Sets the exceptions property value.
     * @param value Value to set for the exceptions property.
     */
    set exceptions(value) {
        this._exceptions = value;
    }
    ;
    /**
     * Sets the hasError property value. Indicates whether the rule is in an error condition. Read-only.
     * @param value Value to set for the hasError property.
     */
    set hasError(value) {
        this._hasError = value;
    }
    ;
    /**
     * Sets the isEnabled property value. Indicates whether the rule is enabled to be applied to messages.
     * @param value Value to set for the isEnabled property.
     */
    set isEnabled(value) {
        this._isEnabled = value;
    }
    ;
    /**
     * Sets the isReadOnly property value. Indicates if the rule is read-only and cannot be modified or deleted by the rules REST API.
     * @param value Value to set for the isReadOnly property.
     */
    set isReadOnly(value) {
        this._isReadOnly = value;
    }
    ;
    /**
     * Sets the sequence property value. Indicates the order in which the rule is executed, among other rules.
     * @param value Value to set for the sequence property.
     */
    set sequence(value) {
        this._sequence = value;
    }
    ;
}
//# sourceMappingURL=messageRule.js.map