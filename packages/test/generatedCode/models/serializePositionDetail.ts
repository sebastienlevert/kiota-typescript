import {PositionDetail} from './index';
import {serializeCompanyDetail} from './serializeCompanyDetail';
import {AdditionalDataHolder, DateOnly, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePositionDetail(writer: SerializationWriter, positionDetail: PositionDetail | undefined = {}) : void {
            writer.writeObjectValueFromMethod("company", positionDetail.company as any, serializeCompanyDetail);
            writer.writeStringValue("description", positionDetail.description);
            writer.writeDateOnlyValue("endMonthYear", positionDetail.endMonthYear);
            writer.writeStringValue("jobTitle", positionDetail.jobTitle);
            writer.writeStringValue("role", positionDetail.role);
            writer.writeDateOnlyValue("startMonthYear", positionDetail.startMonthYear);
            writer.writeStringValue("summary", positionDetail.summary);
}
