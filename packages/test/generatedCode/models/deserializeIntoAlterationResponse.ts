import {deserializeIntoSearchAlteration} from './deserializeIntoSearchAlteration';
import {AlterationResponse} from './index';
import {SearchAlterationType} from './searchAlterationType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAlterationResponse(alterationResponse: AlterationResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { alterationResponse.odataType = n.getStringValue() as any ; },
        "originalQueryString": n => { alterationResponse.originalQueryString = n.getStringValue() as any ; },
        "queryAlteration": n => { alterationResponse.queryAlteration = n.getObject(deserializeIntoSearchAlteration) as any ; },
        "queryAlterationType": n => { alterationResponse.queryAlterationType = n.getEnumValue<SearchAlterationType>(SearchAlterationType) as any ; },
    }
}
