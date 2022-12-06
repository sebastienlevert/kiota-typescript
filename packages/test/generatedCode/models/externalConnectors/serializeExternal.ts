import {External} from './index';
import {serializeExternalConnection} from './serializeExternalConnection';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExternal(writer: SerializationWriter, external: External | undefined = {}) : void {
            writer.writeCollectionOfObjectValuesFromMethod("connections", external.connections as any, serializeExternalConnection);
            writer.writeStringValue("@odata.type", external.odataType);
}
