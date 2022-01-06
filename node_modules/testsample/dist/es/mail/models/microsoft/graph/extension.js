import { Entity } from './entity';
export class Extension extends Entity {
    /**
     * Instantiates a new extension and sets the default values.
     */
    constructor() {
        super();
    }
    ;
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    getFieldDeserializers() {
        return new Map([...super.getFieldDeserializers(),
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
    }
    ;
}
//# sourceMappingURL=extension.js.map