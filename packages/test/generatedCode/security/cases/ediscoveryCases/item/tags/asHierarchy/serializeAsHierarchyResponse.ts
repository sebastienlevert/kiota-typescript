import {serializeEdiscoveryReviewTag} from '../../../../../../models/security/serializeEdiscoveryReviewTag';
import {serializeBaseCollectionPaginationCountResponse} from '../../../../../../models/serializeBaseCollectionPaginationCountResponse';
import {AsHierarchyResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAsHierarchyResponse(writer: SerializationWriter, asHierarchyResponse: AsHierarchyResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, asHierarchyResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", asHierarchyResponse.value as any, serializeEdiscoveryReviewTag);
}
