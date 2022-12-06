import {PublicErrorDetailCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializePublicErrorDetail} from './serializePublicErrorDetail';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePublicErrorDetailCollectionResponse(writer: SerializationWriter, publicErrorDetailCollectionResponse: PublicErrorDetailCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, publicErrorDetailCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", publicErrorDetailCollectionResponse.value as any, serializePublicErrorDetail);
}
