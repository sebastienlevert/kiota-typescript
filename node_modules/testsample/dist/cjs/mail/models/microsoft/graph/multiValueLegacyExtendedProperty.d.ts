import { Entity } from './entity';
import { Parsable, ParseNode, SerializationWriter } from '@microsoft/kiota-abstractions';
export declare class MultiValueLegacyExtendedProperty extends Entity implements Parsable {
    /** A collection of property values.  */
    private _value?;
    /**
     * Instantiates a new multiValueLegacyExtendedProperty and sets the default values.
     */
    constructor();
    /**
     * Gets the value property value. A collection of property values.
     * @returns a string
     */
    get value(): string[] | undefined;
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
     * Sets the value property value. A collection of property values.
     * @param value Value to set for the value property.
     */
    set value(value: string[] | undefined);
}
//# sourceMappingURL=multiValueLegacyExtendedProperty.d.ts.map