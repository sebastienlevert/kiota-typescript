import {serializeEntity} from '../serializeEntity';
import {Security} from './index';
import {serializeInformationProtection} from './serializeInformationProtection';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSecurity(writer: SerializationWriter, security: Security | undefined = {}) : void {
        serializeEntity(writer, security)
            writer.writeObjectValueFromMethod("informationProtection", security.informationProtection as any, serializeInformationProtection);
}
