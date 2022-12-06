import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoUserTrainingStatusInfo} from './deserializeIntoUserTrainingStatusInfo';
import {UserTrainingStatusInfoCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserTrainingStatusInfoCollectionResponse(userTrainingStatusInfoCollectionResponse: UserTrainingStatusInfoCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(userTrainingStatusInfoCollectionResponse),
        "value": n => { userTrainingStatusInfoCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoUserTrainingStatusInfo) as any ; },
    }
}
