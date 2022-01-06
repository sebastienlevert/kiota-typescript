export class EmailAddress {
    /**
     * Instantiates a new emailAddress and sets the default values.
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
     * Gets the address property value. The email address of the person or entity.
     * @returns a string
     */
    get address() {
        return this._address;
    }
    ;
    /**
     * Gets the name property value. The display name of the person or entity.
     * @returns a string
     */
    get name() {
        return this._name;
    }
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    getFieldDeserializers() {
        return new Map([
            ["address", (o, n) => { o.address = n.getStringValue(); }],
            ["name", (o, n) => { o.name = n.getStringValue(); }],
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
        writer.writeStringValue("address", this.address);
        writer.writeStringValue("name", this.name);
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
     * Sets the address property value. The email address of the person or entity.
     * @param value Value to set for the address property.
     */
    set address(value) {
        this._address = value;
    }
    ;
    /**
     * Sets the name property value. The display name of the person or entity.
     * @param value Value to set for the name property.
     */
    set name(value) {
        this._name = value;
    }
    ;
}
//# sourceMappingURL=emailAddress.js.map