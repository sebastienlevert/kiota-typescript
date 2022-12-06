import {InvestigationSecurityState} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInvestigationSecurityState(investigationSecurityState: InvestigationSecurityState | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "name": n => { investigationSecurityState.name = n.getStringValue() as any ; },
        "@odata.type": n => { investigationSecurityState.odataType = n.getStringValue() as any ; },
        "status": n => { investigationSecurityState.status = n.getStringValue() as any ; },
    }
}
