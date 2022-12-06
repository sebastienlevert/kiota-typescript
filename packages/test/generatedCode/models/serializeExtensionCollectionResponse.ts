import {ExtensionCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeExtension} from './serializeExtension';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExtensionCollectionResponse(writer: SerializationWriter, extensionCollectionResponse: ExtensionCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, extensionCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", extensionCollectionResponse.value as any, serializeExtension);
}
