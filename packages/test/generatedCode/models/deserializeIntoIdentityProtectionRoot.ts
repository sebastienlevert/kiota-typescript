import {deserializeIntoRiskDetection} from './deserializeIntoRiskDetection';
import {deserializeIntoRiskyUser} from './deserializeIntoRiskyUser';
import {IdentityProtectionRoot} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIdentityProtectionRoot(identityProtectionRoot: IdentityProtectionRoot | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { identityProtectionRoot.odataType = n.getStringValue() as any ; },
        "riskDetections": n => { identityProtectionRoot.riskDetections = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRiskDetection) as any ; },
        "riskyUsers": n => { identityProtectionRoot.riskyUsers = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRiskyUser) as any ; },
    }
}
