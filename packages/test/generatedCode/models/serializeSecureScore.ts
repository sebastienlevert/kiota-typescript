import {SecureScore} from './index';
import {serializeAverageComparativeScore} from './serializeAverageComparativeScore';
import {serializeControlScore} from './serializeControlScore';
import {serializeEntity} from './serializeEntity';
import {serializeSecurityVendorInformation} from './serializeSecurityVendorInformation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSecureScore(writer: SerializationWriter, secureScore: SecureScore | undefined = {}) : void {
        serializeEntity(writer, secureScore)
            writer.writeNumberValue("activeUserCount", secureScore.activeUserCount);
            writer.writeCollectionOfObjectValuesFromMethod("averageComparativeScores", secureScore.averageComparativeScores as any, serializeAverageComparativeScore);
            writer.writeStringValue("azureTenantId", secureScore.azureTenantId);
            writer.writeCollectionOfObjectValuesFromMethod("controlScores", secureScore.controlScores as any, serializeControlScore);
            writer.writeDateValue("createdDateTime", secureScore.createdDateTime);
            writer.writeNumberValue("currentScore", secureScore.currentScore);
            writer.writeCollectionOfPrimitiveValues<string>("enabledServices", secureScore.enabledServices);
            writer.writeNumberValue("licensedUserCount", secureScore.licensedUserCount);
            writer.writeNumberValue("maxScore", secureScore.maxScore);
            writer.writeObjectValueFromMethod("vendorInformation", secureScore.vendorInformation as any, serializeSecurityVendorInformation);
}
