import {PublicErrorDetail} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPublicErrorDetail(publicErrorDetail: PublicErrorDetail | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "code": n => { publicErrorDetail.code = n.getStringValue() as any ; },
        "message": n => { publicErrorDetail.message = n.getStringValue() as any ; },
        "target": n => { publicErrorDetail.target = n.getStringValue() as any ; },
    }
}
