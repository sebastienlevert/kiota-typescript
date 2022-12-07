import {deserializeIntoPhysicalAddress} from './deserializeIntoPhysicalAddress';
import {CompanyDetail} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCompanyDetail(companyDetail: CompanyDetail | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "address": n => { companyDetail.address = n.getObject(deserializeIntoPhysicalAddress) as any ; },
        "department": n => { companyDetail.department = n.getStringValue() as any ; },
        "displayName": n => { companyDetail.displayName = n.getStringValue() as any ; },
        "officeLocation": n => { companyDetail.officeLocation = n.getStringValue() as any ; },
        "pronunciation": n => { companyDetail.pronunciation = n.getStringValue() as any ; },
        "webUrl": n => { companyDetail.webUrl = n.getStringValue() as any ; },
    }
}
