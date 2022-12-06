import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoOutlookCategory} from './deserializeIntoOutlookCategory';
import {OutlookUser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOutlookUser(outlookUser: OutlookUser | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(outlookUser),
        "masterCategories": n => { outlookUser.masterCategories = n.getCollectionOfObjectValuesFromMethod(deserializeIntoOutlookCategory) as any ; },
    }
}
