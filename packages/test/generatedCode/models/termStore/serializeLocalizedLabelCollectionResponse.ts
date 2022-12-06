import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {LocalizedLabelCollectionResponse} from './index';
import {serializeLocalizedLabel} from './serializeLocalizedLabel';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLocalizedLabelCollectionResponse(writer: SerializationWriter, localizedLabelCollectionResponse: LocalizedLabelCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, localizedLabelCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", localizedLabelCollectionResponse.value as any, serializeLocalizedLabel);
}
