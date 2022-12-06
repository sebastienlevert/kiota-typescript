import {ApplicationTemplateCollectionResponse} from './index';
import {serializeApplicationTemplate} from './serializeApplicationTemplate';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeApplicationTemplateCollectionResponse(writer: SerializationWriter, applicationTemplateCollectionResponse: ApplicationTemplateCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, applicationTemplateCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", applicationTemplateCollectionResponse.value as any, serializeApplicationTemplate);
}
