import {deserializeIntoAccessReviewStageSettings} from './deserializeIntoAccessReviewStageSettings';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AccessReviewStageSettingsCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewStageSettingsCollectionResponse(accessReviewStageSettingsCollectionResponse: AccessReviewStageSettingsCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(accessReviewStageSettingsCollectionResponse),
        "value": n => { accessReviewStageSettingsCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAccessReviewStageSettings) as any ; },
    }
}
