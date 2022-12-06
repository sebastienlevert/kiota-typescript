import {ExtensionPropertyCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeExtensionProperty} from './serializeExtensionProperty';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeExtensionPropertyCollectionResponse(writer: SerializationWriter, extensionPropertyCollectionResponse: ExtensionPropertyCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, extensionPropertyCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", extensionPropertyCollectionResponse.value as any, serializeExtensionProperty);
}
