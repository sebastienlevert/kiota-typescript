import {ExtensionCollectionResponse} from './index';
import {serializeExtension} from './serializeExtension';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExtensionCollectionResponse(writer: SerializationWriter, extensionCollectionResponse: ExtensionCollectionResponse | undefined = {}) : void {
            writer.writeStringValue("@odata.nextLink", extensionCollectionResponse.odataNextLink);
            writer.writeCollectionOfObjectValuesFromMethod("value", extensionCollectionResponse.value as any, serializeExtension);
}
