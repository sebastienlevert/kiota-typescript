import {ServiceHealthIssueCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeServiceHealthIssue} from './serializeServiceHealthIssue';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeServiceHealthIssueCollectionResponse(writer: SerializationWriter, serviceHealthIssueCollectionResponse: ServiceHealthIssueCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, serviceHealthIssueCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", serviceHealthIssueCollectionResponse.value as any, serializeServiceHealthIssue);
}
