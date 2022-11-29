import {Entity} from './entity';
import {SingleValueLegacyExtendedProperty} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSingleValueLegacyExtendedProperty(writer: SerializationWriter, singleValueLegacyExtendedProperty: SingleValueLegacyExtendedProperty | undefined = {}) : void {
        serializeEntityInterface(singleValueLegacyExtendedProperty)
            writer.writeStringValue("value", singleValueLegacyExtendedProperty.value);
}
