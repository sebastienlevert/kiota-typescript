import {deserializeIntoAverageComparativeScore} from './deserializeIntoAverageComparativeScore';
import {deserializeIntoControlScore} from './deserializeIntoControlScore';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoSecurityVendorInformation} from './deserializeIntoSecurityVendorInformation';
import {SecureScore} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSecureScore(secureScore: SecureScore | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(secureScore),
        "activeUserCount": n => { secureScore.activeUserCount = n.getNumberValue() as any ; },
        "averageComparativeScores": n => { secureScore.averageComparativeScores = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAverageComparativeScore) as any ; },
        "azureTenantId": n => { secureScore.azureTenantId = n.getStringValue() as any ; },
        "controlScores": n => { secureScore.controlScores = n.getCollectionOfObjectValuesFromMethod(deserializeIntoControlScore) as any ; },
        "createdDateTime": n => { secureScore.createdDateTime = n.getDateValue() as any ; },
        "currentScore": n => { secureScore.currentScore = n.getNumberValue() as any ; },
        "enabledServices": n => { secureScore.enabledServices = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "licensedUserCount": n => { secureScore.licensedUserCount = n.getNumberValue() as any ; },
        "maxScore": n => { secureScore.maxScore = n.getNumberValue() as any ; },
        "vendorInformation": n => { secureScore.vendorInformation = n.getObject(deserializeIntoSecurityVendorInformation) as any ; },
    }
}
