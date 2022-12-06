import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoUserInstallStateSummary} from './deserializeIntoUserInstallStateSummary';
import {UserInstallStateSummaryCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserInstallStateSummaryCollectionResponse(userInstallStateSummaryCollectionResponse: UserInstallStateSummaryCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(userInstallStateSummaryCollectionResponse),
        "value": n => { userInstallStateSummaryCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUserInstallStateSummary) as any ; },
    }
}
