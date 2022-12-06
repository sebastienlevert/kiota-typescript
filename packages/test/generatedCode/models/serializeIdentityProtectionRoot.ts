import {IdentityProtectionRoot} from './index';
import {serializeRiskDetection} from './serializeRiskDetection';
import {serializeRiskyUser} from './serializeRiskyUser';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentityProtectionRoot(writer: SerializationWriter, identityProtectionRoot: IdentityProtectionRoot | undefined = {}) : void {
            writer.writeStringValue("@odata.type", identityProtectionRoot.odataType);
            writer.writeCollectionOfObjectValuesFromMethod("riskDetections", identityProtectionRoot.riskDetections as any, serializeRiskDetection);
            writer.writeCollectionOfObjectValuesFromMethod("riskyUsers", identityProtectionRoot.riskyUsers as any, serializeRiskyUser);
}
