import {deserializeIntoCompanyDetail} from './deserializeIntoCompanyDetail';
import {PositionDetail} from './index';
import {AdditionalDataHolder, DateOnly, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPositionDetail(positionDetail: PositionDetail | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "company": n => { positionDetail.company = n.getObject(deserializeIntoCompanyDetail) as any ; },
        "description": n => { positionDetail.description = n.getStringValue() as any ; },
        "endMonthYear": n => { positionDetail.endMonthYear = n.getDateOnlyValue() as any ; },
        "jobTitle": n => { positionDetail.jobTitle = n.getStringValue() as any ; },
        "role": n => { positionDetail.role = n.getStringValue() as any ; },
        "startMonthYear": n => { positionDetail.startMonthYear = n.getDateOnlyValue() as any ; },
        "summary": n => { positionDetail.summary = n.getStringValue() as any ; },
    }
}
