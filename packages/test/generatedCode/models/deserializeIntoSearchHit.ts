import {deserializeIntoEntity} from './deserializeIntoEntity';
import {SearchHit} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSearchHit(searchHit: SearchHit | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "contentSource": n => { searchHit.contentSource = n.getStringValue() as any ; },
        "hitId": n => { searchHit.hitId = n.getStringValue() as any ; },
        "@odata.type": n => { searchHit.odataType = n.getStringValue() as any ; },
        "rank": n => { searchHit.rank = n.getNumberValue() as any ; },
        "resource": n => { searchHit.resource = n.getObject(deserializeIntoEntity) as any ; },
        "resultTemplateId": n => { searchHit.resultTemplateId = n.getStringValue() as any ; },
        "summary": n => { searchHit.summary = n.getStringValue() as any ; },
    }
}
