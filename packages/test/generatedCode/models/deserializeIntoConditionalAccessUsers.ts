import {ConditionalAccessUsers} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConditionalAccessUsers(conditionalAccessUsers: ConditionalAccessUsers | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "excludeGroups": n => { conditionalAccessUsers.excludeGroups = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "excludeRoles": n => { conditionalAccessUsers.excludeRoles = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "excludeUsers": n => { conditionalAccessUsers.excludeUsers = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "includeGroups": n => { conditionalAccessUsers.includeGroups = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "includeRoles": n => { conditionalAccessUsers.includeRoles = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "includeUsers": n => { conditionalAccessUsers.includeUsers = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "@odata.type": n => { conditionalAccessUsers.odataType = n.getStringValue() as any ; },
    }
}
