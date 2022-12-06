import {Package} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePackage(writer: SerializationWriter, package: Package | undefined = {}) : void {
            writer.writeStringValue("@odata.type", package.odataType);
            writer.writeStringValue("type", package.type);
}
