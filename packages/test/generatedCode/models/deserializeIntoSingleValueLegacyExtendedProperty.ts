import {Entity} from './entity';
import {SingleValueLegacyExtendedProperty} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSingleValueLegacyExtendedProperty(singleValueLegacyExtendedProperty: SingleValueLegacyExtendedProperty | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntityInterface(singleValueLegacyExtendedProperty),
        "value": n => { SingleValueLegacyExtendedProperty.value = n.getStringValue(); },
    }
}
