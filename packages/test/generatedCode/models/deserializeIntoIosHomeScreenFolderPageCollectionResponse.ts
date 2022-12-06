import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoIosHomeScreenFolderPage} from './deserializeIntoIosHomeScreenFolderPage';
import {IosHomeScreenFolderPageCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosHomeScreenFolderPageCollectionResponse(iosHomeScreenFolderPageCollectionResponse: IosHomeScreenFolderPageCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(iosHomeScreenFolderPageCollectionResponse),
        "value": n => { iosHomeScreenFolderPageCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIosHomeScreenFolderPage) as any ; },
    }
}
