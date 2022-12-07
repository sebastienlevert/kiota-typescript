import {EmployeeOrgData} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEmployeeOrgData(writer: SerializationWriter, employeeOrgData: EmployeeOrgData | undefined = {}) : void {
            writer.writeStringValue("costCenter", employeeOrgData.costCenter);
            writer.writeStringValue("division", employeeOrgData.division);
}
