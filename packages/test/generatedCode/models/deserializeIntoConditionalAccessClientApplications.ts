import {ConditionalAccessClientApplications} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoConditionalAccessClientApplications(conditionalAccessClientApplications: ConditionalAccessClientApplications | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "excludeServicePrincipals": n => { conditionalAccessClientApplications.excludeServicePrincipals = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "includeServicePrincipals": n => { conditionalAccessClientApplications.includeServicePrincipals = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "@odata.type": n => { conditionalAccessClientApplications.odataType = n.getStringValue() as any ; },
    }
}
