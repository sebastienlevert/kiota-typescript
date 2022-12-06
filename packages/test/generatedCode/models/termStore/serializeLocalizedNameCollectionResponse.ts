import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {LocalizedNameCollectionResponse} from './index';
import {serializeLocalizedName} from './serializeLocalizedName';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLocalizedNameCollectionResponse(writer: SerializationWriter, localizedNameCollectionResponse: LocalizedNameCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, localizedNameCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", localizedNameCollectionResponse.value as any, serializeLocalizedName);
}
