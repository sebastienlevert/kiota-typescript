"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Recipient = void 0;
const emailAddress_1 = require("./emailAddress");
class Recipient {
    /**
     * Instantiates a new recipient and sets the default values.
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
     * Gets the emailAddress property value.
     * @returns a emailAddress
     */
    get emailAddress() {
        return this._emailAddress;
    }
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    getFieldDeserializers() {
        return new Map([
            ["emailAddress", (o, n) => { o.emailAddress = n.getObjectValue(emailAddress_1.EmailAddress); }],
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
        writer.writeObjectValue("emailAddress", this.emailAddress);
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
     * Sets the emailAddress property value.
     * @param value Value to set for the emailAddress property.
     */
    set emailAddress(value) {
        this._emailAddress = value;
    }
    ;
}
exports.Recipient = Recipient;
//# sourceMappingURL=recipient.js.map