import {Entity} from './entity';
import {MultiValueLegacyExtendedProperty} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMultiValueLegacyExtendedProperty(multiValueLegacyExtendedProperty: MultiValueLegacyExtendedProperty | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntityInterface(multiValueLegacyExtendedProperty),
        "value": n => { MultiValueLegacyExtendedProperty.value = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
