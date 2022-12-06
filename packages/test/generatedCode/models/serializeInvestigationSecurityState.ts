import {InvestigationSecurityState} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInvestigationSecurityState(writer: SerializationWriter, investigationSecurityState: InvestigationSecurityState | undefined = {}) : void {
            writer.writeStringValue("name", investigationSecurityState.name);
            writer.writeStringValue("@odata.type", investigationSecurityState.odataType);
            writer.writeStringValue("status", investigationSecurityState.status);
}
