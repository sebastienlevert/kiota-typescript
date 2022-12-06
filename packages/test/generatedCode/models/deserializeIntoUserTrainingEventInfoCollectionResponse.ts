import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoUserTrainingEventInfo} from './deserializeIntoUserTrainingEventInfo';
import {UserTrainingEventInfoCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserTrainingEventInfoCollectionResponse(userTrainingEventInfoCollectionResponse: UserTrainingEventInfoCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(userTrainingEventInfoCollectionResponse),
        "value": n => { userTrainingEventInfoCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUserTrainingEventInfo) as any ; },
    }
}
