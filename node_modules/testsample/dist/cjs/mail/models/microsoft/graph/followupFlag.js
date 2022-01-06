"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FollowupFlag = void 0;
const dateTimeTimeZone_1 = require("./dateTimeTimeZone");
const followupFlagStatus_1 = require("./followupFlagStatus");
class FollowupFlag {
    /**
     * Instantiates a new followupFlag and sets the default values.
     */
    constructor() {
        this._additionalData = new Map();
    }
    ;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Map<string, unknown>
     */
    get additionalData() {
        return this._additionalData;
    }
    ;
    /**
     * Gets the completedDateTime property value.
     * @returns a dateTimeTimeZone
     */
    get completedDateTime() {
        return this._completedDateTime;
    }
    ;
    /**
     * Gets the dueDateTime property value.
     * @returns a dateTimeTimeZone
     */
    get dueDateTime() {
        return this._dueDateTime;
    }
    ;
    /**
     * Gets the flagStatus property value.
     * @returns a followupFlagStatus
     */
    get flagStatus() {
        return this._flagStatus;
    }
    ;
    /**
     * Gets the startDateTime property value.
     * @returns a dateTimeTimeZone
     */
    get startDateTime() {
        return this._startDateTime;
    }
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    getFieldDeserializers() {
        return new Map([
            ["completedDateTime", (o, n) => { o.completedDateTime = n.getObjectValue(dateTimeTimeZone_1.DateTimeTimeZone); }],
            ["dueDateTime", (o, n) => { o.dueDateTime = n.getObjectValue(dateTimeTimeZone_1.DateTimeTimeZone); }],
            ["flagStatus", (o, n) => { o.flagStatus = n.getEnumValue(followupFlagStatus_1.FollowupFlagStatus); }],
            ["startDateTime", (o, n) => { o.startDateTime = n.getObjectValue(dateTimeTimeZone_1.DateTimeTimeZone); }],
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
        writer.writeObjectValue("completedDateTime", this.completedDateTime);
        writer.writeObjectValue("dueDateTime", this.dueDateTime);
        writer.writeEnumValue("flagStatus", this.flagStatus);
        writer.writeObjectValue("startDateTime", this.startDateTime);
        writer.writeAdditionalData(this.additionalData);
    }
    ;
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    set additionalData(value) {
        this._additionalData = value;
    }
    ;
    /**
     * Sets the completedDateTime property value.
     * @param value Value to set for the completedDateTime property.
     */
    set completedDateTime(value) {
        this._completedDateTime = value;
    }
    ;
    /**
     * Sets the dueDateTime property value.
     * @param value Value to set for the dueDateTime property.
     */
    set dueDateTime(value) {
        this._dueDateTime = value;
    }
    ;
    /**
     * Sets the flagStatus property value.
     * @param value Value to set for the flagStatus property.
     */
    set flagStatus(value) {
        this._flagStatus = value;
    }
    ;
    /**
     * Sets the startDateTime property value.
     * @param value Value to set for the startDateTime property.
     */
    set startDateTime(value) {
        this._startDateTime = value;
    }
    ;
}
exports.FollowupFlag = FollowupFlag;
//# sourceMappingURL=followupFlag.js.map