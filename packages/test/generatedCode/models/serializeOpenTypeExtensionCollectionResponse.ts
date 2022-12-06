import {OpenTypeExtensionCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeOpenTypeExtension} from './serializeOpenTypeExtension';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeOpenTypeExtensionCollectionResponse(writer: SerializationWriter, openTypeExtensionCollectionResponse: OpenTypeExtensionCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, openTypeExtensionCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", openTypeExtensionCollectionResponse.value as any, serializeOpenTypeExtension);
}
