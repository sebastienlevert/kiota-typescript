import {UserInstallStateSummaryCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUserInstallStateSummary} from './serializeUserInstallStateSummary';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserInstallStateSummaryCollectionResponse(writer: SerializationWriter, userInstallStateSummaryCollectionResponse: UserInstallStateSummaryCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, userInstallStateSummaryCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", userInstallStateSummaryCollectionResponse.value as any, serializeUserInstallStateSummary);
}
