import {OpenTypeExtension} from './index';
import {serializeExtension} from './serializeExtension';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOpenTypeExtension(writer: SerializationWriter, openTypeExtension: OpenTypeExtension | undefined = {}) : void {
        serializeExtension(writer, openTypeExtension)
            writer.writeStringValue("extensionName", openTypeExtension.extensionName);
}
