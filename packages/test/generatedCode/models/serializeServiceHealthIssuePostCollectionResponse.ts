import {ServiceHealthIssuePostCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeServiceHealthIssuePost} from './serializeServiceHealthIssuePost';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeServiceHealthIssuePostCollectionResponse(writer: SerializationWriter, serviceHealthIssuePostCollectionResponse: ServiceHealthIssuePostCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, serviceHealthIssuePostCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", serviceHealthIssuePostCollectionResponse.value as any, serializeServiceHealthIssuePost);
}
