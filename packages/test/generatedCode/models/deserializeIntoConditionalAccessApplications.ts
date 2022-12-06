import {ConditionalAccessApplications} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConditionalAccessApplications(conditionalAccessApplications: ConditionalAccessApplications | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "excludeApplications": n => { conditionalAccessApplications.excludeApplications = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "includeApplications": n => { conditionalAccessApplications.includeApplications = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "includeAuthenticationContextClassReferences": n => { conditionalAccessApplications.includeAuthenticationContextClassReferences = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "includeUserActions": n => { conditionalAccessApplications.includeUserActions = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "@odata.type": n => { conditionalAccessApplications.odataType = n.getStringValue() as any ; },
    }
}
