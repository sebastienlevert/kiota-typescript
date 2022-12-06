import {GetDeviceNonComplianceReportPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetDeviceNonComplianceReportPostRequestBody(getDeviceNonComplianceReportPostRequestBody: GetDeviceNonComplianceReportPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "filter": n => { getDeviceNonComplianceReportPostRequestBody.filter = n.getStringValue() as any ; },
        "groupBy": n => { getDeviceNonComplianceReportPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "name": n => { getDeviceNonComplianceReportPostRequestBody.name = n.getStringValue() as any ; },
        "orderBy": n => { getDeviceNonComplianceReportPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "search": n => { getDeviceNonComplianceReportPostRequestBody.search = n.getStringValue() as any ; },
        "select": n => { getDeviceNonComplianceReportPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "sessionId": n => { getDeviceNonComplianceReportPostRequestBody.sessionId = n.getStringValue() as any ; },
        "skip": n => { getDeviceNonComplianceReportPostRequestBody.skip = n.getNumberValue() as any ; },
        "top": n => { getDeviceNonComplianceReportPostRequestBody.top = n.getNumberValue() as any ; },
    }
}
