import {deserializeIntoResourceAccess} from './deserializeIntoResourceAccess';
import {RequiredResourceAccess} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRequiredResourceAccess(requiredResourceAccess: RequiredResourceAccess | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { requiredResourceAccess.odataType = n.getStringValue() as any ; },
        "resourceAccess": n => { requiredResourceAccess.resourceAccess = n.getCollectionOfObjectValuesFromMethod(deserializeIntoResourceAccess) as any ; },
        "resourceAppId": n => { requiredResourceAccess.resourceAppId = n.getStringValue() as any ; },
    }
}
