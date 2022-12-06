import {ConditionalAccessTemplateCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeConditionalAccessTemplate} from './serializeConditionalAccessTemplate';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeConditionalAccessTemplateCollectionResponse(writer: SerializationWriter, conditionalAccessTemplateCollectionResponse: ConditionalAccessTemplateCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, conditionalAccessTemplateCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", conditionalAccessTemplateCollectionResponse.value as any, serializeConditionalAccessTemplate);
}
