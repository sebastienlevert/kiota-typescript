import {ApplicationCollectionResponse} from './index';
import {serializeApplication} from './serializeApplication';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApplicationCollectionResponse(writer: SerializationWriter, applicationCollectionResponse: ApplicationCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, applicationCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", applicationCollectionResponse.value as any, serializeApplication);
}
