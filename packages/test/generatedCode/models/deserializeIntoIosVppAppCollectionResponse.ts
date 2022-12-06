import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoIosVppApp} from './deserializeIntoIosVppApp';
import {IosVppAppCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosVppAppCollectionResponse(iosVppAppCollectionResponse: IosVppAppCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(iosVppAppCollectionResponse),
        "value": n => { iosVppAppCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIosVppApp) as any ; },
    }
}
