import {CompanyDetail} from './index';
import {serializePhysicalAddress} from './serializePhysicalAddress';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCompanyDetail(writer: SerializationWriter, companyDetail: CompanyDetail | undefined = {}) : void {
            writer.writeObjectValueFromMethod("address", companyDetail.address as any, serializePhysicalAddress);
            writer.writeStringValue("department", companyDetail.department);
            writer.writeStringValue("displayName", companyDetail.displayName);
            writer.writeStringValue("officeLocation", companyDetail.officeLocation);
            writer.writeStringValue("pronunciation", companyDetail.pronunciation);
            writer.writeStringValue("webUrl", companyDetail.webUrl);
}
