import {UserConfiguration} from './index';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserConfiguration(writer: SerializationWriter, userConfiguration: UserConfiguration | undefined = {}) : void {
        serializeEntity(writer, userConfiguration)
            writer.writeStringValue("binaryData", userConfiguration.binaryData);
}
