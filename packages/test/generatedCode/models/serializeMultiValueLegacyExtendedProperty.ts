import {Entity} from './entity';
import {MultiValueLegacyExtendedProperty} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMultiValueLegacyExtendedProperty(writer: SerializationWriter, multiValueLegacyExtendedProperty: MultiValueLegacyExtendedProperty | undefined = {}) : void {
        serializeEntityInterface(multiValueLegacyExtendedProperty)
            writer.writeCollectionOfPrimitiveValues<string>("value", multiValueLegacyExtendedProperty.value);
}
