import {RiskUserActivity} from './index';
import {RiskDetail} from './riskDetail';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRiskUserActivity(writer: SerializationWriter, riskUserActivity: RiskUserActivity | undefined = {}) : void {
            writer.writeEnumValue<RiskDetail>("detail", riskUserActivity.detail);
            writer.writeStringValue("@odata.type", riskUserActivity.odataType);
            writer.writeCollectionOfPrimitiveValues<string>("riskEventTypes", riskUserActivity.riskEventTypes);
}
