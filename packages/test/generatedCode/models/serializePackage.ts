import {Package} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePackage(writer: SerializationWriter, x: Package | undefined = {}) : void {
            writer.writeStringValue("type", x.type);
}
