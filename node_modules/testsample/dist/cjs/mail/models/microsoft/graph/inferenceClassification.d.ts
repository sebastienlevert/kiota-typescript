import { Entity } from './entity';
import { InferenceClassificationOverride } from './inferenceClassificationOverride';
import { Parsable, ParseNode, SerializationWriter } from '@microsoft/kiota-abstractions';
export declare class InferenceClassification extends Entity implements Parsable {
    /** A set of overrides for a user to always classify messages from specific senders in certain ways: focused, or other. Read-only. Nullable.  */
    private _overrides?;
    /**
     * Instantiates a new inferenceClassification and sets the default values.
     */
    constructor();
    /**
     * Gets the overrides property value. A set of overrides for a user to always classify messages from specific senders in certain ways: focused, or other. Read-only. Nullable.
     * @returns a inferenceClassificationOverride
     */
    get overrides(): InferenceClassificationOverride[] | undefined;
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
     * Sets the overrides property value. A set of overrides for a user to always classify messages from specific senders in certain ways: focused, or other. Read-only. Nullable.
     * @param value Value to set for the overrides property.
     */
    set overrides(value: InferenceClassificationOverride[] | undefined);
}
//# sourceMappingURL=inferenceClassification.d.ts.map