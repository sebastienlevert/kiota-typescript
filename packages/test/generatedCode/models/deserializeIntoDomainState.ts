import {DomainState} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoDomainState(domainState: DomainState | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "lastActionDateTime": n => { domainState.lastActionDateTime = n.getDateValue() as any ; },
        "@odata.type": n => { domainState.odataType = n.getStringValue() as any ; },
        "operation": n => { domainState.operation = n.getStringValue() as any ; },
        "status": n => { domainState.status = n.getStringValue() as any ; },
    }
}
